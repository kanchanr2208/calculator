let finalResult = null;
let variableOne = null;
let variableTwo = null;
let isOperator = null; 
let firstNumber = [];
let secondNumber = [];

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
        finalResult = "FU. Clearing the board";
    } else {
        finalResult = a / b; 
    }

    return finalResult;
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
        firstNumber.push(e.target.textContent)
    } else {
        secondNumber.push(e.target.textContent)
    }
    console.log(firstNumber);
    console.log(secondNumber);
    
    
})

two.addEventListener("click", (e) => {
    if(isOperator === null) {
        firstNumber.push(e.target.textContent)
    } else {
        secondNumber.push(e.target.textContent)
    }
    console.log(firstNumber);
    console.log(secondNumber);
    
})

three.addEventListener("click", (e) => {
    if(isOperator === null) {
        firstNumber.push(e.target.textContent)
    } else {
        secondNumber.push(e.target.textContent)
    }
    console.log(firstNumber);
    console.log(secondNumber);
    
})

four.addEventListener("click", (e) => {
    if(isOperator === null) {
        firstNumber.push(e.target.textContent)
    } else {
        secondNumber.push(e.target.textContent)
    }
    console.log(firstNumber);
    console.log(secondNumber);
    
})

five.addEventListener("click", (e) => {
    if(isOperator === null) {
        firstNumber.push(e.target.textContent)
    } else {
        secondNumber.push(e.target.textContent)
    }
    console.log(firstNumber);
    console.log(secondNumber);
    
})

six.addEventListener("click", (e) => {
   if(isOperator === null) {
        firstNumber.push(e.target.textContent)
    } else {
        secondNumber.push(e.target.textContent)
    }
    console.log(firstNumber);
    console.log(secondNumber);
   
})

seven.addEventListener("click", (e) => {
    if(isOperator === null) {
        firstNumber.push(e.target.textContent)
    } else {
        secondNumber.push(e.target.textContent)
    }
    console.log(firstNumber);
    console.log(secondNumber);
    
})

eight.addEventListener("click", (e) => {
   if(isOperator === null) {
        firstNumber.push(e.target.textContent)
    } else {
        secondNumber.push(e.target.textContent)
    }
    console.log(firstNumber);
    console.log(secondNumber);
   
})

nine.addEventListener("click", (e) => {
    if(isOperator === null) {
        firstNumber.push(e.target.textContent)
    } else {
        secondNumber.push(e.target.textContent)
    }
    console.log(firstNumber);
    console.log(secondNumber);
    
})

zero.addEventListener("click", (e) => {
    if(isOperator === null) {
        firstNumber.push(e.target.textContent)
    } else {
        secondNumber.push(e.target.textContent)
    }
    console.log(firstNumber);
    console.log(secondNumber);
    
})

decimal.addEventListener("click", (e) => {
    if(isOperator === null) {
        if (!firstNumber.includes(".")) {
            firstNumber.push(e.target.textContent)
        }
    } else {
        if (!secondNumber.includes(".")) {
            secondNumber.push(e.target.textContent)
        }
    }
    console.log(firstNumber);
    console.log(secondNumber); 
})

negative.addEventListener("click", (e) => {
    if(isOperator === null) {
        if(firstNumber[0] === "-") {
            firstNumber.shift()
        } else {
            firstNumber.unshift("-") 
        }
    } else {
         if(secondNumber[0] === "-") {
            secondNumber.shift()
        } else {
            secondNumber.unshift("-") 
        }
    }
    console.log(firstNumber);
    console.log(secondNumber); 
})

plus.addEventListener("click", (e) => {
    isOperator = e.target.textContent;
    console.log(isOperator)
})

minus.addEventListener("click", (e) => {
    isOperator = e.target.textContent;
    console.log(isOperator)
    
})

multiply.addEventListener("click", (e) => {
    isOperator = e.target.textContent;
    console.log(isOperator)
    
})

divide.addEventListener("click", (e) => {
    isOperator = e.target.textContent;
    console.log(isOperator)
    
})

back.addEventListener("click", (e) => {
    console.log(e.target.textContent)
    
})

clear.addEventListener("click", () => {
    firstNumber = [];
    secondNumber = [];
    variableOne = null;
    variableTwo = null;
    isOperator = null;
})

equalTo.addEventListener("click", (e) => {
    let joinedFirstNumber = firstNumber.join("");
    let joinedSecondNumber = secondNumber.join("");
    console.log(joinedFirstNumber)
    console.log(joinedSecondNumber)
    variableOne = Number(joinedFirstNumber);
    variableTwo = Number(joinedSecondNumber);
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
    }
    console.log(finalResult)
})

