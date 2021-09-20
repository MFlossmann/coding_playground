
// This function takes any angle and maps it to a color wheel
// i.e. 0° -> #FF0000, 120° -> #00FF00, 240° -> #0000FF
// If you go through the angles, from 0° to 360, you should get a rainbow
// didn't test it for prettiness, though

const selectColor = (angle_deg) => {
    const toRad = (x) => x * Math.PI / 180;  // function to convert degree to rad

    // function to get the degrees to the range offset +/- 180°
    const constraintDeg = (_deg, offset = 0) => {
        let deg = _deg - offset;
        while (deg > 360) deg -= 360;
        while (deg < -360) deg += 360;

        return deg;
    };

    const mapToFF = (x) => (255 * x).toFixed(0);  // map a 0 to 1 value to an integer between 0 and 255

    // Each RGB value is calculated from a cosine that's phase shifted to the appropriate
    // color on the color wheel
    const red = mapToFF( Math.max(0, Math.cos(toRad(constraintDeg(angle_deg, 0)) )) );
    const green = mapToFF( Math.max(0, Math.cos( toRad(constraintDeg(angle_deg, 120)) )) );
    const blue = mapToFF( Math.max(0, Math.cos( toRad(constraintDeg(angle_deg, -120)) )) );

    return `rgb(${red}, ${green}, ${blue})`;  // convert it to a HTML-Color string
};
