let variableOne = null;
let variableTwo = null;
let operatorIs = null;
let firstArray = [];
let secondArray = [];
let answer = null; 

/*
to check end status of all variables after something happens, be it an event, calculation, or function
console.log("firstArray: ", firstArray);
console.log("variableOne: ", variableOne);
console.log("operatorIs: ", operatorIs);
console.log("secondArray: ", secondArray);
console.log("variableTwo: ", variableTwo);
console.log("answer: ", answer)
console.log("display: ", display.textContent)
*/

let allNumbers = document.querySelectorAll(".number");
let decimal = document.querySelector(".decimal");
let negative = document.querySelector(".negative") 

let allOperators = document.querySelectorAll(".operator")

let equalTo = document.querySelector(".equals")
let clear = document.querySelector(".clear") 
let back = document.querySelector(".back");

let display = document.querySelector(".display");

window.addEventListener("keydown", (e) => {

    if (e.key === "/" || e.key === "Enter") {
        e.preventDefault();
    }

    if (e.key >= "0" && e.key <=9) {
        allNumbers.forEach(number => {
            if (number.textContent === e.key) {
                number.click();
            }
        })
    }

    if (e.key === "+" || e.key === "-" || e.key === "*" || e.key === "/") {
        allOperators.forEach(operator => {
            if (operator.textContent === e.key) {
                operator.click();
            }
        })
    }

    if (e.key === "Enter" || e.key === "=") {
        equalTo.click();
    }
    
    if (e.key == "Backspace") {
        back.click();
    }

    if (e.key === "Escape") {
        clear.click();
    }

    if (e.key === ".") {
        decimal.click();
    }
})

allNumbers.forEach(number => {
    number.addEventListener("click", (e) => {
        if (operatorIs === null && firstArray.length < 7 && answer === null) {
            firstArray.push(e.target.textContent)
            variableOne = Number(firstArray.join(""))
            if (firstArray.includes(".")) {
                display.textContent = `${firstArray.join("")}`
            } else {
                display.textContent = `${variableOne}`
            }    
        } else if (operatorIs !== null && secondArray.length < 7) {
            secondArray.push(e.target.textContent)
            variableTwo = Number(secondArray.join(""));
            if (secondArray.includes(".")) {
                display.textContent = `${variableOne} ${operatorIs} ${secondArray.join("")}`
            } else {
                display.textContent = `${variableOne} ${operatorIs} ${variableTwo}`
            }
        } else if (operatorIs === null && secondArray.length === 0 && answer !== null) {
            firstArray = [];
            firstArray.push(e.target.textContent);
            variableOne = Number(firstArray.join(""))
            answer = null;
            display.textContent = `${variableOne}`

        }
        /*
        console.log("firstArray: ", firstArray);
        console.log("variableOne: ", variableOne);
        console.log("operatorIs: ", operatorIs);
        console.log("secondArray: ", secondArray);
        console.log("variableTwo: ", variableTwo);
        console.log("answer: ", answer)
        console.log("display: ", display.textContent)*/

    })   
})

allOperators.forEach(operator => {
    operator.addEventListener("click", (e)=> {
        if (firstArray.length > 0 && variableOne !== null && secondArray.length === 0 && variableTwo === null) {
            operatorIs = operator.textContent;
            display.textContent = `${variableOne} ${operatorIs}`
        }
    })
   
})

decimal.addEventListener("click", (e) => {
    if (firstArray.length > 0 && variableOne !== null && !firstArray.includes(".") && answer === null) {
        firstArray.push(e.target.textContent)
        variableOne = Number(firstArray.join(""));
        display.textContent = `${variableOne}${e.target.textContent}`
    } else if ( firstArray.length === 0 && variableOne === null && operatorIs === null && answer === null) {
        firstArray.push("0")
        firstArray.push(e.target.textContent)
        variableOne = Number(firstArray.join(""));
        display.textContent = `${variableOne}${e.target.textContent}`
    } else if (operatorIs !== null && secondArray.length > 0 && variableTwo !== null && !secondArray.includes(".")) {
        secondArray.push(e.target.textContent);
        variableTwo = Number(secondArray.join(""));
        display.textContent = `${variableOne} ${operatorIs} ${variableTwo}${e.target.textContent}`
    } else if (operatorIs !== null && secondArray.length === 0 && variableTwo === null) {
        secondArray.push("0");
        secondArray.push(e.target.textContent);
        variableTwo = Number(secondArray.join(""));
        display.textContent = `${variableOne} ${operatorIs} ${variableTwo}${e.target.textContent}`
    } else if (answer !== null && operatorIs === null &&secondArray.length === 0) {
        firstArray = [];
        firstArray.push("0");
        variableOne = Number(firstArray.join(""));
        answer = null;
        display.textContent = `${variableOne}${e.target.textContent}`

    }
        console.log("firstArray: ", firstArray);
        console.log("variableOne: ", variableOne);
        console.log("operatorIs: ", operatorIs);
        console.log("secondArray: ", secondArray);
        console.log("variableTwo: ", variableTwo);
        console.log("answer: ", answer)
        console.log("display: ", display.textContent)
})

negative.addEventListener("click", (e) => {
    if (firstArray.length > 0 && variableOne !== null) {
        if (firstArray[0] === "-") {
            firstArray.shift();
        } else {
            firstArray.unshift("-");
        }
        variableOne = Number(firstArray.join(""));
        display.textContent = `${variableOne}`;
    } else if (operatorIs !== null && secondArray.length > 0 && variableTwo !== null) {
        if(secondArray[0] === "-") {
            secondArray.shift();
        } else {
            secondArray.unshift("-");
        }
        variableTwo = Number(secondArray.join(""));
        display.textContent = `${variableOne} ${operatorIs} ${variableTwo}`
    }
})

clear.addEventListener("click", (e) => {
    clearBoard();
})

back.addEventListener("click", (e) => {
    if(firstArray.length === 0 && secondArray.length === 0 && operatorIs === null) {
        clearBoard();
    } else if ( firstArray.length > 0 && operatorIs === null && secondArray.length === 0) {
        firstArray.pop();
        variableOne = Number(firstArray.join(""))
        if (firstArray.length === 0) {
            display.textContent = ""
        } else if (firstArray.length > 0 && firstArray[firstArray.length -1] === ".") {
            display.textContent = `${variableOne}.`
        }   else {
            display.textContent = `${variableOne}`
        }
    } else if (variableOne !== null && operatorIs !== null && secondArray.length === 0) {
        operatorIs = null;
        display.textContent = `${variableOne}`;
    } else if ( variableOne !== null && operatorIs !==null && secondArray.length > 0 && variableTwo !== null) {
        secondArray.pop();
        variableTwo = Number(secondArray.join(""));
        if (secondArray.length === 0) {
            display.textContent = `${variableOne} ${operatorIs}`;
        } else if ( secondArray.length > 0 && secondArray[secondArray.length -1] === ".") {
            display.textContent = `${variableOne} ${operatorIs} ${variableTwo}.`;
        } else {
            display.textContent = `${variableOne} ${operatorIs} ${variableTwo}`;
        } 
    }
})

equalTo.addEventListener("click", (e) => {
    if (firstArray.length === 0 && operatorIs === null && secondArray.length === 0 && answer === null) {
        clearBoard();
    } else if (firstArray.length > 0 && operatorIs === null && secondArray.length === 0 && answer === null) {
        variableOne = Number(firstArray.join(""));
        answer = variableOne;
        display.textContent = `${roundOutDecimal(answer)}`
    } else if (firstArray.length > 0 && operatorIs !== null && secondArray.length === 0 && answer === null) {
        variableOne = Number(firstArray.join(""));
        answer = variableOne;
        display.textContent = `${roundOutDecimal(answer)}`
    } else if (firstArray.length > 0 && operatorIs !== null && secondArray.length > 0) {
        variableOne = Number(firstArray.join(""));
        variableTwo = Number(secondArray.join(""));
        if (operatorIs === "+") {
            answer = variableOne + variableTwo;
            display.textContent = `${roundOutDecimal(answer)}`
        } else if (operatorIs === "-") {
            answer = variableOne - variableTwo;
            display.textContent = `${roundOutDecimal(answer)}`
        } else if (operatorIs === "*") {
            answer = variableOne*variableTwo;
            display.textContent = `${roundOutDecimal(answer)}`
        } else if (operatorIs === "/") {
            if (variableTwo === 0) {
                display.textContent = "Error."
                firstArray = [];
                secondArray = []
                answer = null;
                variableOne = null;
                variableTwo = null;
                operatorIs = null;

                return;
            } else {
                answer = variableOne / variableTwo;
                display.textContent = `${roundOutDecimal(answer)}`
            }
        }
        variableOne = answer;
        firstArray = Array.from(String(variableOne));
        operatorIs = null;
        secondArray = [];
        variableTwo = null;
    }
})

function clearBoard() {
    variableOne = null;
    variableTwo = null;
    operatorIs = null;
    firstArray = [];
    secondArray = [];
    answer = null; 
    display.textContent = "";
}

function roundOutDecimal(number) {
    let numberTimesTenThousand = number * 10000;
    let preRoundOut = Math.round(numberTimesTenThousand);
    let finalNumber = preRoundOut/10000;
    return finalNumber;
}


