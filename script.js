const btnNext = document.getElementById("next");
const btnPrev = document.getElementById("prev");
const stepOne = document.querySelector(".circle");
const allSteps = document.querySelectorAll(".circle");
const progressBar = document.getElementById("progress");
let steps = 1;
let progress = progressBar.style.width;

function initProgressBar() {
  stepOne.classList.add("active");
  function stepProgress() {
    if (steps <= 3) {
      allSteps[steps].classList.add("active");
      steps++;
      progress = progressBar.style.width = ((steps - 1) * 30).toString() + "%";
    }
    if (steps === 2) {
      btnPrev.removeAttribute("disabled");
    }
    if (steps === 4) {
      btnNext.setAttribute("disabled", "");
    }
  }
  function stepBack() {
    if (steps <= 4) {
      allSteps[steps - 1].classList.remove("active");
      steps--;
      progress = progressBar.style.width = ((steps - 1) * 30).toString() + "%";
    }
    if (steps === 1) {
      btnPrev.setAttribute("disabled", "");
    }
    if (steps < 4) {
      btnNext.removeAttribute("disabled");
    }
  }
  btnNext.addEventListener("click", stepProgress);
  btnPrev.addEventListener("click", stepBack);
}

initProgressBar();
