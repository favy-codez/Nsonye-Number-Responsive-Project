let displayValues = document.querySelectorAll(".num");
let interval = 4000;

console.log(displayValues);

displayValues.forEach((displayValue) => {
    let startValue = 0;
    let endValue = parseInt(displayValue.getAttribute("data-val"));
    console.log(endValue);
    // Math.floor round down a number to the nearest integer less than or equal to the given number.
    let duration = Math.floor( interval / endValue );
    let counter = setInterval(function(){
        startValue += 1;
        displayValue.textContent = startValue;
        if(startValue === endValue){
            clearInterval(counter)
        }
    }, duration);
})