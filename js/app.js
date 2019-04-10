// ---> Constants <---

let display = document.querySelector(".count-display");
let inputField = document.querySelector(".input-field");
let addBtn = document.querySelector(".add-btn");
let subBtn = document.querySelector(".sub-btn");

// ---> Event Listeners <--

// + button click listen

addBtn.addEventListener("click", () => {
  console.log("+ button clicked");
  let sum = 0;
  let displayNum = display.innerHTML;
  let input = inputField.value;
  console.log(displayNum);
  displayNum = parseInt(displayNum, 10);
  input = parseInt(input, 10);
  console.log(displayNum, input);
  sum = displayNum + input;
  display.innerText = sum;
  if (sum < 0) {
    display.style.color = "red";
  }
});

// - button click listen

subBtn.addEventListener("click", () => {
  console.log("- button is clicked");
  let sum = 0;
  let displayNum = display.innerHTML;
  let input = inputField.value;
  console.log(displayNum);
  displayNum = parseInt(displayNum, 10);
  input = parseInt(input, 10);
  console.log(displayNum, input);
  sum = displayNum - input;
  display.innerText = sum;
  if (sum < 0) {
    display.style.color = "red";
  }
});
