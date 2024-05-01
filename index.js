let clearButton = document.querySelector(".clear");
let addButton = document.querySelector(".add");
let subtractButton = document.querySelector(".subtract");
let multiplyButton = document.querySelector(".multiply");
let equalsButton = document.querySelector(".enter");
let result = document.querySelector(".result");
let numbers = document.querySelectorAll(".number");
let numberHolder = document.querySelector(".number-holder");

clearButton.addEventListener("click", () => {
  result.innerHTML = "0";
  numberHolder.innerHTML = "";
  addButton.classList.remove("active");
  subtractButton.classList.remove("active");
  multiplyButton.classList.remove("active");
});

addButton.addEventListener("click", () => {
  if (!addButton.classList.contains("active")) {
    subtractButton.classList.remove("active");
    multiplyButton.classList.remove("active");
    addButton.classList.add("active");

    if (
      numberHolder.innerHTML.charAt(numberHolder.innerHTML.length - 1) != " "
    ) {
      numberHolder.innerHTML += " ";
    }

    return;
  }
});

subtractButton.addEventListener("click", () => {
  if (!subtractButton.classList.contains("active")) {
    addButton.classList.remove("active");
    multiplyButton.classList.remove("active");
    subtractButton.classList.add("active");

    if (
      numberHolder.innerHTML.charAt(numberHolder.innerHTML.length - 1) != " "
    ) {
      numberHolder.innerHTML += " ";
    }

    return;
  }
});

multiplyButton.addEventListener("click", () => {
  if (!multiplyButton.classList.contains("active")) {
    addButton.classList.remove("active");
    subtractButton.classList.remove("active");
    multiplyButton.classList.add("active");
    if (
      numberHolder.innerHTML.charAt(numberHolder.innerHTML.length - 1) != " "
    ) {
      numberHolder.innerHTML += " ";
    }
  }
});

equalsButton.addEventListener("click", () => {
  if (numberHolder.innerHTML.trim().split(" ").length <= 1) {
    return;
  }
  const [num1, num2] = numberHolder.innerHTML.split(" ");
  if (addButton.classList.contains("active")) {
    result.innerHTML = parseFloat(num1) + parseFloat(num2);
    addButton.classList.remove("active");
    result.classList.add("total");
  } else if (subtractButton.classList.contains("active")) {
    result.innerHTML = parseFloat(num1) - parseFloat(num2);
    subtractButton.classList.remove("active");
    result.classList.add("total");
  } else if (multiplyButton.classList.contains("active")) {
    result.innerHTML = parseFloat(num1) * parseFloat(num2);
    multiplyButton.classList.remove("active");
    result.classList.add("total");
  }

  numberHolder.innerHTML = result.innerHTML;
});

numbers.forEach((num) => {
  num.addEventListener("click", () => {
    if (result.innerHTML === "0") result.innerHTML = "";

    if (
      result.classList.contains("total") &&
      !addButton.classList.contains("active") &&
      !subtractButton.classList.contains("active")
    ) {
      result.innerHTML = num.innerHTML;
      result.classList.remove("total");
      numberHolder.innerHTML = "";
      result.innerHTML = "";
    }

    if (
      (addButton.classList.contains("active") ||
        subtractButton.classList.contains("active") ||
        multiplyButton.classList.contains("active")) &&
      numberHolder.innerHTML.charAt(numberHolder.innerHTML.length - 1) == " "
    ) {
      result.innerHTML = num.innerHTML;
    } else {
      result.innerHTML += num.innerHTML;
    }

    numberHolder.innerHTML += num.innerHTML;
  });
});
