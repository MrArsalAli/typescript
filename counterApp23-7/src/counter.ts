

const incrementbtn = document.getElementById("incrementbtn") as HTMLButtonElement;
const decrementbtn = document.getElementById("decrementbtn") as HTMLButtonElement;
const count = document.getElementById("count") as HTMLButtonElement;



let counterNum: number = 0;
decrementbtn.disabled = true;

function handleIncrDecr(clickOn: "plus" | "minus") {
    if (clickOn == "plus") counterNum++;
    if (clickOn == "minus") counterNum--;
    count.innerHTML = counterNum.toString();
    if (counterNum === 0) {
        decrementbtn.disabled = true;
    } else {
        decrementbtn.disabled = false;
    }
}


incrementbtn.addEventListener('click', () => handleIncrDecr('plus'));
decrementbtn.addEventListener('click', () => handleIncrDecr('minus'));