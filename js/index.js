let submit = document.querySelector("#submit");
let rateAgain = document.querySelector("#rate-again");
let card1 = document.querySelector(".card__1");
let card2 = document.querySelector(".card__2");
let rating = document.querySelectorAll(".rating");
let rates = document.querySelector(".rates");

submit.addEventListener("click", () => {
  card2.classList.remove("hidden");
  card1.classList.add("hidden");
});

rateAgain.addEventListener("click", () => {
  card2.classList.add("hidden");
  card1.classList.remove("hidden");
});

rating.forEach((rate) => {
  rate.addEventListener("click", () => {
    rates.textContent = rate.textContent;
  });
});
