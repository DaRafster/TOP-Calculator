let clearButton = document.querySelector(".clear");
let result = document.querySelector(".result");
let numbers = document.querySelectorAll(".number");

clearButton.addEventListener("click", () => {
  result.innerHTML = "0";
});

numbers.forEach((num) => {
  num.addEventListener("click", () => {
    if (result.innerHTML === "0") result.innerHTML = "";
    result.innerHTML += num.innerHTML;
  });
});
