let clearButton = document.querySelector(".clear");
let addButton = document.querySelector(".add");
let subtractButton = document.querySelector(".subtract");
let divideButton = document.querySelector(".divide");
let multiplyButton = document.querySelector(".multiply");
let equalsButton = document.querySelector(".enter");
let deleteButton = document.querySelector(".delete");
let percentButton = document.querySelector(".percent");
let decimalButton = document.querySelector(".decimal");
let display = document.querySelector(".result-display");
let numbers = document.querySelectorAll(".number");
let operatorHolder = document.querySelector(".operator-holder");
let reverseSignButton = document.querySelector(".plus-minus");
let previousNumber = document.querySelector(".prev-number");

clearButton.addEventListener("click", () => {
  display.innerHTML = "0";
  display.classList.add("update");
  operatorHolder.innerHTML = "";
  previousNumber.innerHTML = "";
  decimalButton.disabled = false;
});

deleteButton.addEventListener("click", () => {
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
});

addButton.addEventListener("click", () => {
  operatorHolder.innerHTML = `+`;
  previousNumber.innerHTML = display.innerHTML;
  decimalButton.disabled = false;
  display.classList.add("update");
});

subtractButton.addEventListener("click", () => {
  operatorHolder.innerHTML = `-`;
  previousNumber.innerHTML = display.innerHTML;
  decimalButton.disabled = false;
  display.classList.add("update");
});

multiplyButton.addEventListener("click", () => {
  operatorHolder.innerHTML = "×";
  previousNumber.innerHTML = display.innerHTML;
  decimalButton.disabled = false;
  display.classList.add("update");
});

divideButton.addEventListener("click", () => {
  operatorHolder.innerHTML = "÷";
  previousNumber.innerHTML = display.innerHTML;
  decimalButton.disabled = false;
  display.classList.add("update");
});

percentButton.addEventListener("click", () => {
  let calculatedResult = parseFloat(display.innerHTML) / 100;
  display.innerHTML = calculatedResult;
  previousNumber.innerHTML = calculatedResult;
  display.classList.add("update");

  if (display.clientWidth > display.parentElement.clientWidth - 50) {
    display.innerHTML = calculatedResult.toPrecision(2);
  }
});

decimalButton.addEventListener("click", () => {
  if (display.innerHTML === "") {
    return;
  } else if (display.classList.contains("update")) {
    display.innerHTML = "0";
  }

  display.innerHTML += ".";
  decimalButton.disabled = true;
  display.classList.remove("update");
});

equalsButton.addEventListener("click", () => {
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
});

reverseSignButton.addEventListener("click", () => {
  display.innerHTML = parseFloat(display.innerHTML) * -1;
});

numbers.forEach((num) => {
  num.addEventListener("click", () => {
    if (display.classList.contains("update")) {
      display.innerHTML = num.innerHTML;
      display.classList.remove("update");
    } else {
      if (display.innerHTML.length >= 14) {
        return;
      }
      display.innerHTML += num.innerHTML;
    }
  });
});
