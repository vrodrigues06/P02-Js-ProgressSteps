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
    if (steps <= allSteps.length) {
      allSteps[steps].classList.add("active");
      steps++;
      progress = progressBar.style.width = ((steps - 1) * 30).toString() + "%";
    }
    if (steps > 1) {
      btnPrev.removeAttribute("disabled");
    }
    if (steps === allSteps.length) {
      btnNext.setAttribute("disabled", "");
    }
  }
  function stepBack() {
    if (steps <= allSteps.length) {
      allSteps[steps - 1].classList.remove("active");
      steps--;
      progress = progressBar.style.width = ((steps - 1) * 30).toString() + "%";
    }
    if (steps === 1) {
      btnPrev.setAttribute("disabled", "");
    }
    if (steps < allSteps.length) {
      btnNext.removeAttribute("disabled");
    }
  }
  btnNext.addEventListener("click", stepProgress);
  btnPrev.addEventListener("click", stepBack);
}

initProgressBar();

// !!!!Logic use by the Course (above is my own logic to reach the same goal)!!!!!

// const progress = document.getElementById('progress')
// const prev = document.getElementById('prev')
// const next = document.getElementById('next')
// const circles = document.querySelectorAll('.circle')

// let currentActive = 1

// next.addEventListener('click', () => {
//     currentActive++

//     if(currentActive > circles.length) {
//         currentActive = circles.length
//     }

//     update()
// })

// prev.addEventListener('click', () => {
//     currentActive--

//     if(currentActive < 1) {
//         currentActive = 1
//     }

//     update()
// })

// function update() {
//     circles.forEach((circle, idx) => {
//         if(idx < currentActive) {
//             circle.classList.add('active')
//         } else {
//             circle.classList.remove('active')
//         }
//     })

//     const actives = document.querySelectorAll('.active')

//     progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'

//     if(currentActive === 1) {
//         prev.disabled = true
//     } else if(currentActive === circles.length) {
//         next.disabled = true
//     } else {
//         prev.disabled = false
//         next.disabled = false
//     }
// }
