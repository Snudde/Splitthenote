const form = document.querySelector("form");

const numOfFriends = document.getElementById("friends");
const billSum = document.getElementById("billsum");
const tips = document.getElementById("tips");
const button = document.getElementById("btn");

const result = document.getElementById("result");
const charityAmount = document.getElementById("charity");

const mainView = document.getElementById("form-container");
const resultView = document.getElementById("result-container");

function calculateResult(e) {
  e.preventDefault();
  const finalResult = Math.ceil(
    (parseInt(billSum.value) + parseInt(tips.value)) /
      parseInt(numOfFriends.value)
  );

  const preCharity =
    (parseInt(billSum.value) + parseInt(tips.value)) /
    parseInt(numOfFriends.value);
  console.log(preCharity);

  result.innerText = finalResult;

  const charity = Math.ceil(finalResult - preCharity);
  console.log(charity);

  charityAmount.innerText = charity;

  mainView.classList.add("hidden");
  mainView.classList.remove("active");

  resultView.classList.add("active");
  resultView.classList.remove("hidden");
}

form.addEventListener("submit", calculateResult);

const resetButton = document.getElementById("reset-btn");

function reset() {
  window.location.reload();
}

resetButton.addEventListener("click", reset);
