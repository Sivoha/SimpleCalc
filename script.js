let input = document.querySelector(".input");

let erase = document.querySelector(".erase");
let plusminus = document.querySelector(".plusminus");
let percent = document.querySelector(".percent");

let num1 = document.querySelector(".num1");
let num2 = document.querySelector(".num2");
let num3 = document.querySelector(".num3");
let num4 = document.querySelector(".num4");
let num5 = document.querySelector(".num5");
let num6 = document.querySelector(".num6");
let num7 = document.querySelector(".num7");
let num8 = document.querySelector(".num8");
let num9 = document.querySelector(".num9");
let num0 = document.querySelector(".num0");
let num00 = document.querySelector(".num00");
let comma = document.querySelector(".comma");

let divide = document.querySelector(".divide");
let multiply = document.querySelector(".multiply");
let minus = document.querySelector(".minus");
let plus = document.querySelector(".plus");
let equals = document.querySelector(".equals");

inputText = "";
calcStatus = "input";
prevNum = "";

function update() {
    if ((input.innerHTML.length < 8) || ((input.innerHTML.length == 8) && ((inputText[0] == "-"))) || ((input.innerHTML.length == 6) && (inputText.includes(".")))) {
        input.innerHTML = inputText;
    }
    else {
        if (calcStatus == "plusminus") {
            input.innerHTML = inputText;
        }
        else if ((calcStatus == "equal") && (inputText.length == 9) && (inputText.includes("."))) {
            input.innerHTML = inputText;
        }
        if (calcStatus == "equal") {
            input.innerHTML = "TOO MUCH BRO";
        }
    }
}

function eraseF() {
    inputText = "";
    calcStatus = "input";
    prevNum = "";
    input.innerHTML = "0";
} 

function resetText() {
    inputText = "";
    input.innerHTML = "0";
}

function numF(num) {
    inputText += num;
    update();
}

function plusminusF() {
    prevStatus = calcStatus;
    if (inputText[0] != "-") {
        inputText = "-" + inputText;
        calcStatus = "plusminus";
    }
    else {
        inputText = inputText.slice(1);
    }
    update();
    calcStatus = prevStatus;
}

function setPrevNum() {
    if (calcStatus == "input") {
        prevNum = inputText;
    }
    else if (calcStatus == "plus") {
        prevNum = (Number(inputText) + Number(prevNum)).toString();
    }
    else if (calcStatus == "minus") {
        prevNum = (Number(prevNum) - Number(inputText)).toString();
    }
    else if (calcStatus == "multiply") {
        prevNum = (Number(inputText) * Number(prevNum)).toString();
    }
    else if (calcStatus == "divide") {
        prevNum = (Number(prevNum) / Number(inputText)).toFixed(2).toString();
        while (inputText[inputText.length - 1] == "0") {
            inputText = inputText.slice(0, inputText.length - 1);
        }
        if (inputText[inputText.length - 1] == ".") {
            inputText = inputText.slice(0, inputText.length - 1);
        }
    }
}

function plusF() {
    setPrevNum();
    resetText();
    calcStatus = "plus";
}

function minusF() {
    setPrevNum();
    resetText();
    calcStatus = "minus";
}

function multiplyF() {
    setPrevNum();
    resetText();
    calcStatus = "multiply";
}

function divideF() {
    setPrevNum();
    resetText();
    calcStatus = "divide";
}

function equalsF() {
    if (calcStatus == "plus") {
        inputText = (Number(inputText) + Number(prevNum)).toString();
    }
    else if (calcStatus == "minus") {
        inputText = (Number(prevNum) - Number(inputText)).toString();
    }
    else if (calcStatus == "multiply") {
        inputText = (Number(inputText) * Number(prevNum)).toString();
    }
    else if (calcStatus == "divide") {
        inputText = (Number(prevNum) / Number(inputText)).toFixed(2).toString();
        while (inputText[inputText.length - 1] == "0") {
            inputText = inputText.slice(0, inputText.length - 1);
        }
        if (inputText[inputText.length - 1] == ".") {
            inputText = inputText.slice(0, inputText.length - 1);
        }
    }
    calcStatus = "equal";
    update();
    calcStatus = "input";
    prevNum = "";
}


erase.addEventListener("click", eraseF);
plusminus.addEventListener("click", plusminusF);
// percent.addEventListener("click", percentF);

num1.addEventListener("click", () => numF("1"));
num2.addEventListener("click", () => numF("2"));
num3.addEventListener("click", () => numF("3"));
num4.addEventListener("click", () => numF("4"));
num5.addEventListener("click", () => numF("5"));
num6.addEventListener("click", () => numF("6"));
num7.addEventListener("click", () => numF("7"));
num8.addEventListener("click", () => numF("8"));
num9.addEventListener("click", () => numF("9"));
num0.addEventListener("click", () => numF("0"));
num00.addEventListener("click", () => numF("00"));
// comma.addEventListener("click", commaF);

divide.addEventListener("click", divideF);
multiply.addEventListener("click", multiplyF);
minus.addEventListener("click", minusF);
plus.addEventListener("click", plusF);
equals.addEventListener("click", equalsF);



