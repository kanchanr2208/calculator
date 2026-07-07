let finalResult = null;
let variableOne = null;
let variableTwo = null;
let isOperator = null; 
let firstNumber = [];
let secondNumber = [];
let displayContent = "";

function maths(a, b, sign) {
    if (sign === "+") {
        finalResult = (a + b);
        finalResult = roundingDecimals(finalResult);
    } else if (sign === "-") {
        finalResult = (a - b);
        finalResult = roundingDecimals(finalResult);

    } else if (sign === "*") {
        finalResult = (a * b);
        finalResult = roundingDecimals(finalResult);
    } else if ( sign === "/") {
        if (b == 0) {
            updateDisplay("");
            snarkyMessage();
            clearBoard();        
        } else {
            finalResult = (a / b); 
            finalResult = roundingDecimals(finalResult);
        }
    }
}


function snarkyMessage() {
    let snarkyMessage = document.querySelector(".message")
        snarkyMessage.style.visibility = "visible";
}

function clearBoard() {
    finalResult = null;
    variableOne = null;
    variableTwo = null;
    isOperator = null; 
    firstNumber = [];
    secondNumber = [];

}

function updateDisplay(displayContent) {
    let answer = document.querySelector(".answer")
    answer.textContent = displayContent;
}

function roundingDecimals(a) {
    let temporary = a*10000;
    let finalAnswer = Math.round(temporary)/10000;
    return finalAnswer;
}


let allNumbers = document.querySelectorAll(".number")
allNumbers.forEach(number => {
    number.addEventListener("click", (e) => {
        if(isOperator === null) {
            firstNumber.push(e.target.textContent);
            updateDisplay(firstNumber.join(""));
        } else {
            secondNumber.push(e.target.textContent)
            updateDisplay(firstNumber.join("") + " " + isOperator + " " + secondNumber.join(""));
        }
    })
    
})

let decimal = document.querySelector(".decimal")
decimal.addEventListener("click", (e) => {
    if(isOperator === null) {
        if (!firstNumber.includes(".")) {
            firstNumber.push(e.target.textContent)
            updateDisplay(firstNumber.join(""));
        }
    } else {
        if (!secondNumber.includes(".")) {
            secondNumber.push(e.target.textContent)
            updateDisplay(firstNumber.join("") + " " + isOperator + " " + secondNumber.join(""));
        }
    }
})

let negative = document.querySelector(".negative")
negative.addEventListener("click", (e) => {
    if(isOperator === null) {
        if(firstNumber[0] === "-") {
            firstNumber.shift()
            updateDisplay(firstNumber.join(""));
        } else {
            firstNumber.unshift("-") 
            updateDisplay(firstNumber.join(""));
        }
    } else {
        if(secondNumber[0] === "-") {
            secondNumber.shift()
            updateDisplay(firstNumber.join("") + " " + isOperator + " " + secondNumber.join(""));
        } else {
            secondNumber.unshift("-") 
            updateDisplay(firstNumber.join("") + " " + isOperator + " " + secondNumber.join(""));
        }
    }
})

let operators = document.querySelectorAll(".operator")
operators.forEach(operator => {
    operator.addEventListener("click", (e) => {
        isOperator = e.target.textContent;
        updateDisplay(firstNumber.join("") + " " + isOperator);
    })
})

let back = document.querySelector(".back")
back.addEventListener("click", (e) => {
   if(secondNumber.length > 0) {
    secondNumber.pop()
    updateDisplay(firstNumber.join("") + " " + isOperator + " " + secondNumber.join(""));
   } else if (secondNumber.length === 0 && isOperator !== null) {
    isOperator = null;
    updateDisplay(firstNumber.join(""));
   } else if (isOperator === null && firstNumber.length > 0) {
    firstNumber.pop();
    updateDisplay(firstNumber.join(""));
   } else {
    firstNumber = [];
    secondNumber = [];
    variableOne = null;
    variableTwo = null;
    isOperator = null;
    updateDisplay("");
   }
})

let clear = document.querySelector(".clear")
clear.addEventListener("click", () => {
    clearBoard();
    updateDisplay("0");
})

let equalTo = document.querySelector(".equals")
equalTo.addEventListener("click", (e) => {
    let joinedFirstNumber = firstNumber.join("");
    let joinedSecondNumber = secondNumber.join("");

    variableOne = Number(joinedFirstNumber);
    variableTwo = Number(joinedSecondNumber);
    if ((variableOne === null && isOperator === null && variableTwo === null) || 
        (variableOne === null && isOperator === null && variableTwo !== null) || 
        (variableOne !== null && isOperator === null && variableTwo !== null)) {
        finalResult = null;
        updateDisplay(variableOne);
    } else if (variableOne !== null  && isOperator === null && variableTwo === null) {
        finalResult = variableOne;
        updateDisplay(variableOne);
    } else if (variableOne !== null && isOperator !== null && variableTwo === null) {
        finalResult = variableOne;
        updateDisplay(finalResult);
    } else if (variableOne !== null && isOperator !== null && variableTwo !== null) {
        maths(variableOne, variableTwo, isOperator);
        updateDisplay(finalResult);
    }


})


function continuousCalculation() {
    let buttons = document.querySelector(".buttons")
    buttons.addEventListener("click", (e) => {
        let button = e.target;
        if (button.classList.contains("number")) {
            secondNumber.push(button.textContent)
            //updateDisplay(firstNumber.join("") + " " + isOperator + " " + secondNumber.join(""));
        } else if (button.classList.contains("operator")) {
            isOperator = button.textContent;
        } else if (button.classList.contains("decimal")) {
            if (!secondNumber.includes(".")) {
                secondNumber.push(button.textContent)
                //updateDisplay(firstNumber.join("") + " " + isOperator + " " + secondNumber.join(""));
            }
        } else if (button.classList.contains("negative")) {
            if(secondNumber[0] === "-") {
                secondNumber.shift()
                //updateDisplay(firstNumber.join("") + " " + isOperator + " " + secondNumber.join(""));
            } else {
                secondNumber.unshift("-") 
            // updateDisplay(firstNumber.join("") + " " + isOperator + " " + secondNumber.join(""));
            }
        } else if (button.classList.contains("action")) {
            if (button.classList.contains("back")) {
                if (secondNumber.length === 0 && isOperator !== null) {
                isOperator = null
                } else if (secondNumber.length > 0 && isOperator !== null) {
                    secondNumber.pop();  
                } else if (secondNumber.length === 0 && isOperator === null) {
                    clearBoard();
                }
            } else if (button.classList.contains("clear")) {
                clearBoard();
            } else if (button.classList.contains("equals")) {
                console.log("do the calculation")
            }     
        } else {
            console.log("not sure")
        }
    })
}

