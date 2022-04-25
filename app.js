// targeting the btns
const decrease = document.querySelector(".decrease");
const reset = document.querySelector(".reset");
const increase = document.querySelector(".increase");

// targeting all btns
const btns = document.querySelectorAll(".btn");
console.log(btns);

// targeting the counter value
const counterValue = document.querySelector(".value");
counterValue.textContent = 0;
let counter = 0;

// event listener function for btns
decrease.addEventListener("click", function () {
  counter--;
  counterValue.textContent = counter;
  counterValue.style.color = "#ef476f";
});

reset.addEventListener("click", function () {
  counter = 0;
  counterValue.textContent = counter;
  counterValue.style.color = "#ffd166";
});

increase.addEventListener("click", function () {
  counter++;
  counterValue.textContent = counter;
  counterValue.style.color = "#06d6a0";
});
