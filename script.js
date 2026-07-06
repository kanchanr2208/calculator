let finalResult = null;
let variableOne = null;
let variableTwo = null;
let isOperator = null; 
let firstNumber = [];
let secondNumber = [];
let displayContent = "";


function addition(a, b) {
    return finalResult = (a + b);
}

function subtraction(a, b) {
    return finalResult =(a - b);
}

function multiplication(a, b) {
    return finalResult =(a * b);
}

function division(a, b) {
    if (b == 0) {
        updateDisplay("FU. Clearing the board") //not working right now
        clearBoard();        
    } else {
        finalResult = a / b; 
    }

    return finalResult;
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

let one = document.querySelector(".one")
let two = document.querySelector(".two")
let three = document.querySelector(".three")
let four = document.querySelector(".four")
let five = document.querySelector(".five")
let six = document.querySelector(".six")
let seven = document.querySelector(".seven")
let eight = document.querySelector(".eight")
let nine = document.querySelector(".nine")
let zero = document.querySelector(".zero")
let decimal = document.querySelector(".decimal")
let negative = document.querySelector(".negative")
let plus = document.querySelector(".plus")
let minus= document.querySelector(".minus")
let multiply= document.querySelector(".multiply")
let divide= document.querySelector(".divide")
let clear = document.querySelector(".clear")
let equalTo = document.querySelector(".equals")
let back = document.querySelector(".back")


one.addEventListener("click", (e) => {
    if(isOperator === null) {
        firstNumber.push(e.target.textContent);
        updateDisplay(firstNumber.join(""));
    } else {
        secondNumber.push(e.target.textContent)
        updateDisplay(firstNumber.join("") + " " + isOperator + " " + secondNumber.join(""));
    }
})

two.addEventListener("click", (e) => {
    if(isOperator === null) {
        firstNumber.push(e.target.textContent)
        updateDisplay(firstNumber.join(""));
    } else {
        secondNumber.push(e.target.textContent)
        updateDisplay(firstNumber.join("") + " " + isOperator + " " + secondNumber.join(""));
    }
})

three.addEventListener("click", (e) => {
    if(isOperator === null) {
        firstNumber.push(e.target.textContent)
        updateDisplay(firstNumber.join(""));
    } else {
        secondNumber.push(e.target.textContent)
        updateDisplay(firstNumber.join("") + " " + isOperator + " " + secondNumber.join(""));
    }
})

four.addEventListener("click", (e) => {
    if(isOperator === null) {
        firstNumber.push(e.target.textContent)
        updateDisplay(firstNumber.join(""));
    } else {
        secondNumber.push(e.target.textContent)
        updateDisplay(firstNumber.join("") + " " + isOperator + " " + secondNumber.join(""));
    } 
})

five.addEventListener("click", (e) => {
    if(isOperator === null) {
        firstNumber.push(e.target.textContent)
        updateDisplay(firstNumber.join(""));
    } else {
        secondNumber.push(e.target.textContent)
        updateDisplay(firstNumber.join("") + " " + isOperator + " " + secondNumber.join(""));
    }   
})

six.addEventListener("click", (e) => {
   if(isOperator === null) {
        firstNumber.push(e.target.textContent)
        updateDisplay(firstNumber.join(""));
    } else {
        secondNumber.push(e.target.textContent)
        updateDisplay(firstNumber.join("") + " " + isOperator + " " + secondNumber.join(""));
    } 
})

seven.addEventListener("click", (e) => {
    if(isOperator === null) {
        firstNumber.push(e.target.textContent)
        updateDisplay(firstNumber.join(""));
        
    } else {
        secondNumber.push(e.target.textContent)
        updateDisplay(firstNumber.join("") + " " + isOperator + " " + secondNumber.join(""));
    }    
})

eight.addEventListener("click", (e) => {
   if(isOperator === null) {
        firstNumber.push(e.target.textContent)
        updateDisplay(firstNumber.join(""));
    } else {
        secondNumber.push(e.target.textContent)
        updateDisplay(firstNumber.join("") + " " + isOperator + " " + secondNumber.join(""));
    }
})

nine.addEventListener("click", (e) => {
    if(isOperator === null) {
        firstNumber.push(e.target.textContent)
        updateDisplay(firstNumber.join(""));
    } else {
        secondNumber.push(e.target.textContent)
        updateDisplay(firstNumber.join("") + " " + isOperator + " " + secondNumber.join(""));
    }
})

zero.addEventListener("click", (e) => {
    if(isOperator === null) {
        firstNumber.push(e.target.textContent)
        updateDisplay(firstNumber.join(""));
    } else {
        secondNumber.push(e.target.textContent)
        updateDisplay(firstNumber.join("") + " " + isOperator + " " + secondNumber.join(""));
    }
})

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

plus.addEventListener("click", (e) => {
    isOperator = e.target.textContent;
    updateDisplay(firstNumber.join("") + " " + isOperator);
})

minus.addEventListener("click", (e) => {
    isOperator = e.target.textContent;
    updateDisplay(firstNumber.join("") + " " + isOperator);
})

multiply.addEventListener("click", (e) => {
    isOperator = e.target.textContent;
    updateDisplay(firstNumber.join("") + " " + isOperator);
})

divide.addEventListener("click", (e) => {
    isOperator = e.target.textContent;
    updateDisplay(firstNumber.join("") + " " + isOperator);
})

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

clear.addEventListener("click", () => {
    clearBoard();
    updateDisplay("0");
})

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
        if(isOperator == "+") {
            addition(variableOne, variableTwo)
        } else if(isOperator == "-") {
            subtraction(variableOne, variableTwo)
        } else if (isOperator == "*") {
            multiplication(variableOne, variableTwo)
        } else if (isOperator == "/") {
            division(variableOne, variableTwo)
        } else {
            finalResult = "error"
        }
        updateDisplay(finalResult);
    }
})

