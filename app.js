let display = document.getElementById('display');
let submit = document.getElementById('submit');
let reset = document.getElementById('reset');
let number = 0;



submit.addEventListener('click', function () {
    number++;

    display.innerHTML = number;
})
reset.addEventListener('click', function () {
    number = '0';

    display.innerHTML = number;
})