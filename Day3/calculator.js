function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Cannot divide by zero";
    }

    return a / b;
}

function calculate(operation, a, b) {
    return operation(a, b);
}

console.log(calculate(add, 5, 3));
console.log(calculate(subtract, 5, 3));
console.log(calculate(multiply, 5, 3));
console.log(calculate(divide, 10, 2));
console.log(calculate(divide, 10, 0));