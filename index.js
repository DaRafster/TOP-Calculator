const clearButton = document.querySelector(".clear");
const addButton = document.querySelector(".add");
const subtractButton = document.querySelector(".subtract");
const divideButton = document.querySelector(".divide");
const multiplyButton = document.querySelector(".multiply");
const equalsButton = document.querySelector(".enter");
const deleteButton = document.querySelector(".delete");
const percentButton = document.querySelector(".percent");
const decimalButton = document.querySelector(".decimal");
const display = document.querySelector(".result-display");
const numbers = document.querySelectorAll(".number");
const operatorHolder = document.querySelector(".operator-holder");
const reverseSignButton = document.querySelector(".plus-minus");
const previousNumber = document.querySelector(".prev-number");
const zero = document.querySelector(".zero");

const clear = () => {
  display.innerHTML = "0";
  display.classList.add("update");
  operatorHolder.innerHTML = "";
  previousNumber.innerHTML = "";
  decimalButton.disabled = false;
};

const deleteLast = () => {
  if (display.innerHTML.charAt(display.innerHTML.length - 1) === ".") {
    decimalButton.disabled = false;
  }

  display.innerHTML = display.innerHTML.substring(
    0,
    display.innerHTML.length - 1
  );

  if (display.classList.contains("update")) {
    display.innerHTML = "0";
    return;
  }

  if (display.innerHTML === "") {
    display.innerHTML = "0";
    display.classList.add("update");
  }
};

const percentage = () => {
  let calculatedResult = parseFloat(display.innerHTML) / 100;
  display.innerHTML = calculatedResult;
  previousNumber.innerHTML = calculatedResult;
  display.classList.add("update");

  if (display.clientWidth > display.parentElement.clientWidth - 50) {
    display.innerHTML = calculatedResult.toPrecision(2);
  }
};

const operation = (oper) => {
  operatorHolder.innerHTML = oper;
  previousNumber.innerHTML = display.innerHTML;
  decimalButton.disabled = false;
  display.classList.add("update");
};

const addDecimal = () => {
  if (display.innerHTML === "" || decimalButton.disabled === true) {
    return;
  } else if (display.classList.contains("update")) {
    display.innerHTML = "0";
  }

  display.innerHTML += ".";
  decimalButton.disabled = true;
  display.classList.remove("update");
};

const getResult = () => {
  if (previousNumber.innerHTML === "") {
    return;
  }

  let num1 = parseFloat(previousNumber.innerHTML);
  let num2 = parseFloat(display.innerHTML);
  let calculatedResult = 0;

  let operator = operatorHolder.innerHTML;
  switch (operator) {
    case "+":
      calculatedResult = num1 + num2;
      display.innerHTML = calculatedResult;
      break;
    case "-":
      calculatedResult = num1 - num2;
      display.innerHTML = calculatedResult;
      break;
    case "×":
      calculatedResult = num1 * num2;
      display.innerHTML = calculatedResult;
      break;
    case "÷":
      if (num2 === 0) {
        display.innerHTML = "LOL";
      } else {
        calculatedResult = num1 / num2;
        display.innerHTML = calculatedResult;
      }
      break;
    default:
      break;
  }

  if (display.clientWidth > display.parentElement.clientWidth - 50) {
    display.innerHTML = calculatedResult.toPrecision(11).replace(/0+$/, "");
  }

  operatorHolder.innerHTML = "";
  display.classList.add("update");
};

clearButton.addEventListener("click", clear);
deleteButton.addEventListener("click", deleteLast);
addButton.addEventListener("click", () => operation("+"));
subtractButton.addEventListener("click", () => operation("-"));
multiplyButton.addEventListener("click", () => operation("×"));
divideButton.addEventListener("click", () => operation("÷"));
percentButton.addEventListener("click", percentage);
decimalButton.addEventListener("click", addDecimal);
equalsButton.addEventListener("click", getResult);
reverseSignButton.addEventListener("click", () => {
  display.innerHTML = -parseFloat(display.innerHTML);
});

document.addEventListener("keydown", (evt) => {
  if (display.innerHTML === "0" && evt.key === "0") {
    return;
  }

  if (evt.key >= "0" && evt.key <= "9") {
    if (display.classList.contains("update")) {
      display.innerHTML = evt.key;
      display.classList.remove("update");
    } else {
      if (display.clientWidth > display.parentElement.clientWidth - 50) {
        return;
      }
      display.innerHTML += evt.key;
    }
  } else if (evt.key === "Backspace") {
    deleteLast();
  } else if (evt.key === ".") {
    addDecimal();
  } else if (evt.key === "Enter") {
    getResult();
  }
});

numbers.forEach((num) => {
  num.addEventListener("click", () => {
    if (display.innerHTML === "0" && num === zero) {
      return;
    }

    if (display.classList.contains("update")) {
      display.innerHTML = num.innerHTML;
      display.classList.remove("update");
    } else {
      if (display.clientWidth > display.parentElement.clientWidth - 50) {
        return;
      }
      display.innerHTML += num.innerHTML;
    }
  });
});
