const display = document.getElementById('display');

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculateResult() {
    if(display.value === '') {
        display.value = 'Erreur';
    } else if (display.value.includes('/0')) {
        display.value = 'Division by zero is not allowed';
    } else {
        display.value = eval(display.value);
    }
}