let clearButton = document.querySelector(".clear");
let result = document.querySelector(".result");

clearButton.addEventListener("click", () => {
  result.innerHTML = "0";
});
