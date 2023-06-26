const URL_API = "https://api.adviceslip.com/advice";

const diceBtn = document.querySelector("#diceBtn");
const advice = document.querySelector("#advice");
const adviceId = document.querySelector("#adviceId");

getAdvice();

diceBtn.addEventListener("click", () => {
  // llamar a al API
  getAdvice();
});

function getAdvice() {
  fetch(URL_API)
    .then((response) => response.json())
    .then((data) => {
      advice.innerText = data.slip.advice;
      adviceId.innerHTML = data.slip.id;
    })
    .catch((err) => getAdvice());
}
