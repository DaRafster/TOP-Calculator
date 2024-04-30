let clearButton = document.querySelector(".clear");
let addButton = document.querySelector(".add");
let equalsButton = document.querySelector(".enter");
let result = document.querySelector(".result");
let numbers = document.querySelectorAll(".number");
let numberHolder = document.querySelector(".number-holder");

clearButton.addEventListener("click", () => {
  result.innerHTML = "0";
  numberHolder.innerHTML = "";
  addButton.classList.remove("active");
});

addButton.addEventListener("click", () => {
  if (!addButton.classList.contains("active")) {
    addButton.classList.add("active");
    numberHolder.innerHTML += " ";
    return;
  }
  addButton.classList.remove("active");
});

equalsButton.addEventListener("click", () => {
  if (numberHolder.innerHTML.trim().split(" ").length <= 1) {
    return;
  }
  addButton.classList.remove("active");
  const [num1, num2] = numberHolder.innerHTML.split(" ");
  result.innerHTML = parseFloat(num1) + parseFloat(num2);
  numberHolder.innerHTML = result.innerHTML;
});

numbers.forEach((num) => {
  num.addEventListener("click", () => {
    if (result.innerHTML === "0") result.innerHTML = "";
    if (addButton.classList.contains("active")) {
      result.innerHTML = num.innerHTML;
    } else {
      result.innerHTML += num.innerHTML;
    }

    numberHolder.innerHTML += num.innerHTML;
  });
});
