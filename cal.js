const display = document.getElementById("display");
const resultDisplay = document.getElementById("result-display");
let lastInput = '';
let isError = false;

function appendToDisplay(value) {
  if (isError) {
    display.value = '';
    resultDisplay.textContent = '';
    isError = false;
  }

  if (value === '00' && display.value === '00') {
    return;
  }
  if (value === '0' && display.value === '00') {
    return;
  }

  if (!isOperator(value) || (isOperator(value) && !isOperator(lastInput))) {
    display.value += value;
  }
  lastInput = value;
}

function clearDisplay() {
  display.value = '';
  resultDisplay.textContent = '';
  lastInput = '';
  isError = false;
}

function isOperator(value) {
  return ['+', '-', '*', '/','.'].includes(value);
}

function calculate() {
  try {
    const result = eval(display.value);
    if (isNaN(result) || result === Infinity || result === -Infinity) {
      resultDisplay.textContent = 'Error';
      isError = true;
    } else {
      resultDisplay.textContent = result;
    }
  } catch (error) {
    resultDisplay.textContent = 'Error';
    isError = true;
  }
}

function calculatePercentage() {
if (!isOperator(lastInput)) {
const inputValue = eval(display.value);
const percentValue = inputValue / 100;
display.value = percentValue.toString();
lastInput = '%';
}
}
function calculateSquareRoot() {
  display.value = Math.sqrt(eval(display.value));
  lastInput = '√';
}

function calculateReciprocal() {
  display.value = (1 / eval(display.value)).toString();
  lastInput = '1/x';
}

function calculateSquare() {
  display.value = (Math.pow(eval(display.value), 2)).toString();
  lastInput = 'x^2';
}
function calculateCube() {
  display.value = (Math.pow(eval(display.value), 3)).toString();
  lastInput = 'x^3';
}
function deleteLastCharacter() {
  display.value = display.value.slice(0, -1);
  lastInput = '';
}