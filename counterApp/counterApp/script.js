const increment = document.querySelector('.increment button');
const reset = document.querySelector('.reset button');
const decrement = document.querySelector('.decrement button');
const display = document.getElementById('count')

let count = 0;

const updateDisplay = () => {
    display.textContent = count;
}

const adding = () => {
    count++;
    updateDisplay();
}

const reseting = () => {
    count = 0;
    updateDisplay();
}

const decreasing = () => {
    count--;
    updateDisplay();
}

increment.addEventListener('click', adding);
reset.addEventListener('click', reseting);
decrement.addEventListener('click', decreasing);

updateDisplay();