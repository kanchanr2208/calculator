let finalResult = null;
let variableOne = null;
let variableTwo = null;
let isOperator = null;

function add(a, b) {
    return finalResult = (a + b);
}

function subtract(a, b) {
    return finalResult =(a - b);
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

//e cha kaam nantar yeil. adding now just for funzies
let numbersNodeList = document.querySelectorAll(".number")
numbersNodeList.forEach(number => {
    number.addEventListener("click", (e) => {
        let textContent = e.target.textContent;
        console.log(textContent)
    })
})

let operatorsNodeList = document.querySelectorAll(".operator")
operatorsNodeList.forEach(operator => {
    operator.addEventListener("click", (e) => {
        let operatorContent = e.target.textContent;
        isOperator = operatorContent
    })
})

let clear = document.querySelector(".clear")
clear.addEventListener("click", () => {
    variableOne = null;
    variableTwo = null;
    isOperator = null;
})


let equalTo = document.querySelector(".equals")
equalTo.addEventListener("click", (e) => {
    if ((variableOne === null && isOperator === null && variableTwo === null) || 
        (variableOne === null && isOperator === null && variableTwo !== null) || 
        (variableOne !== null && isOperator === null && variableTwo !== null)) {
        finalResult = null;
    } else if (variableOne !== null  && isOperator === null && variableTwo === null) {
        finalResult = variableOne;
    } else if (variableOne !== null && isOperator !== null && variableTwo === null) {
        finalResult = variableOne;
    } else if (variableOne !== null && isOperator !== null && variableTwo !== null) {
        if(isOperator == "+") {
            add(variableOne, variableTwo)
        } else if(isOperator == "-") {
            subtract(variableOne, variableTwo)
        } else if (isOperator == "*") {
            multiply(variableOne, variableTwo)
        } else if (isOperator == "/") {
            divide(variableOne, variableTwo)
        } else {
            finalResult = "error"
        }
    }
    console.log(finalResult)
})









