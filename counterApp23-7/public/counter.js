"use strict";
const incrementbtn = document.getElementById("incrementbtn");
const decrementbtn = document.getElementById("decrementbtn");
const count = document.getElementById("count");
let counterNum = 0;
decrementbtn.disabled = true;
function handleIncrDecr(clickOn) {
    if (clickOn == "plus")
        counterNum++;
    if (clickOn == "minus")
        counterNum--;
    count.innerHTML = counterNum.toString();
    if (counterNum === 0) {
        decrementbtn.disabled = true;
    }
    else {
        decrementbtn.disabled = false;
    }
}
incrementbtn.addEventListener('click', () => handleIncrDecr('plus'));
decrementbtn.addEventListener('click', () => handleIncrDecr('minus'));
