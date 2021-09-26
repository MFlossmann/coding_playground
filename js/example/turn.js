function position(e) {
  let x = e.clientX;
  let y = e.clientY;
  let cx = document.querySelector('html').offsetLeft + document.querySelector('html').offsetWidth / 2;
  let cy = document.querySelector('html').offsetTop + document.querySelector('html').offsetHeight / 2;
  let ex = cx - x;
  let ey = cy - y;
  let exy = ex / ey * 720;
  let color = selectColor(exy);
  console.log("x " + ex);
  console.log("y " + ey);
  console.log(ex / ey);
  document.getElementById("nob").style.transform = 'translate(-50%, -50%) rotate(' + exy + 'deg)';
  document.querySelector("html").style.backgroundColor = color;
  document.getElementById("blob").style.backgroundColor = color;

}

function positiont(e) {
  let x = e.touches[0].clientX;
  let y = e.touches[0].clientY;
  let cx = document.querySelector('html').offsetLeft + document.querySelector('html').offsetWidth / 2;
  let cy = document.querySelector('html').offsetTop + document.querySelector('html').offsetHeight / 2;
  let ex = cx - x;
  let ey = cy - y;
  let exy = -ex / ey * 720;
  let color = selectColor(exy);
  console.log("x " + ex);
  console.log("y " + ey);
  console.log(ex / ey);
  document.getElementById("nob").style.transform = 'translate(-50%, -50%) rotate(' + (-exy) + 'deg)';
  document.querySelector("html").style.backgroundColor = color;
  document.getElementById("blob").style.backgroundColor = color;

}