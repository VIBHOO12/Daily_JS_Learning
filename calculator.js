// Get display element
const display = document.getElementById('display');

// Append number to display
function appendNumber(num) {
    // Prevent multiple decimal points
    if (num === '.' && display.value.includes('.')) {
        return;
    }
    display.value += num;
}

// Append operator to display
function appendOperator(operator) {
    // Prevent operator at the start or consecutive operators
    if (display.value === '' || /[+\-*/]$/.test(display.value)) {
        return;
    }
    display.value += operator;
}

// Clear display
function clearDisplay() {
    display.value = '';
}

// Delete last character
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Calculate result
function calculate() {
    try {
        // Evaluate the expression
        const result = eval(display.value);
        
        // Check if result is a valid number
        if (isFinite(result)) {
            // Display result with limited decimal places
            display.value = Math.round(result * 100000000) / 100000000;
        } else {
            display.value = 'Error';
        }
    } catch (error) {
        display.value = 'Error';
    }
}

// Allow keyboard input
document.addEventListener('keydown', (event) => {
    const key = event.key;

    // Number keys
    if (key >= '0' && key <= '9') {
        appendNumber(key);
    }
    // Operators
    else if (key === '+' || key === '-' || key === '*' || key === '/') {
        appendOperator(key);
    }
    // Decimal point
    else if (key === '.') {
        appendNumber('.');
    }
    // Enter or equals
    else if (key === 'Enter' || key === '=') {
        event.preventDefault();
        calculate();
    }
    // Backspace
    else if (key === 'Backspace') {
        event.preventDefault();
        deleteLast();
    }
    // Escape to clear
    else if (key === 'Escape') {
        clearDisplay();
    }
});
