let displayValues = document.querySelectorAll(".num");
let interval = 1000;

console.log(displayValues);

displayValues.forEach((displayValue) => {
    let startValue = 0;
    let endValue = parseInt(displayValue.getAttribute("data-val"))
    console.log(endValue);
})