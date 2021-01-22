// dictionary: M=1000, CM=900, D=500, CD=400, C=100, XC=90, L=50, XL=40, X=10, IX=9, V=5, IV=4, I=1

function checkInp() {
  let x = "hello";
  let regex=/^[0-9]+$/;
  if(!x.match(regex)) {
    alert("Must input number");
    return false;
  };
};