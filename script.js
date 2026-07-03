let finalResult = "";

function add(a, b) {
    return finalResult = (a + b);
}

function subtract(a, b) {
    return finalResult =(b - a);
}

function multiply(a, b) {
    return finalResult =(a * b);
}

function divide(a, b) {
    if (b == 0) {
        finalResult = "FU. Clearing the board";
    } else {
        finalResult = a / b; 
    }

    return finalResult;
}

