// Number Counter

const decreaseBtn = document.getElementById('decreaseBtn');
const resetBtn = document.getElementById('resetBtn');
const increaseBtn = document.getElementById('increaseBtn');
const number = document.getElementById('number');

let value = 0;

// Event Listeners
decreaseBtn.addEventListener('click', decreaseNum);
resetBtn.addEventListener('click', resetNum);
increaseBtn.addEventListener('click', increaseNum);
// Functions

// Decrease
function decreaseNum() {
    value--;
    animateUpdateNumber();
}

// Reset
function resetNum() {
    value = 0;
    animateUpdateNumber();
}

// Increase
function increaseNum() {
    value++;
    animateUpdateNumber();
}

// For smooth animation on counter

function animateUpdateNumber() {
    number.classList.add('fade-out');

    setTimeout(() =>{
        number.textContent = value;
        number.classList.remove('fade-out');
        number.classList.add('fade-in');
    }, 250);
}