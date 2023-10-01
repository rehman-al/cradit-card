var cv = document.getElementById("cvc");
var card = document.getElementById("rtr");
// rotate on the adding the cvc 
cv.addEventListener("focus", function () {
  card.classList.add("rotate");
})

cv.addEventListener("blur", function () {
  card.classList.remove("rotate");
})

// Getting the input target elements
const inputname = document.getElementById("name");
const inputnumber = document.getElementById("number");
const inputmonth = document.getElementById("mm");
const inputyear = document.getElementById("yy");
const inputcvc = document.getElementById("cvc");

// Adding event listeners to input fields
inputname.addEventListener("input", function () {
  const yname = inputname.value;
  document.getElementById("card-data-name").innerText = yname;
});

inputnumber.addEventListener("input", function () {
  const ynumber = inputnumber.value;
  document.getElementById("card-data-number").innerText = ynumber;
});

inputmonth.addEventListener("input", function () {
  const ymonth = inputmonth.value;
  document.getElementById("card-data-exp").innerText = ymonth;
});

inputyear.addEventListener("input", function () {
  const yyear = inputyear.value;
  document.getElementById("card-data-exp2").innerText = "/" + yyear;

}); 
inputcvc.addEventListener("input", function () {
  const ycvc = inputcvc.value;
  document.getElementById("card-data-cvc").innerText = ycvc;

});


















// format the card
$(document).ready(function () {
  $('#number').mask('0000 0000 0000 0000');
  $('#mm').mask('00');
  $('#yy').mask('00');
  $('#cvc').mask('000');
});