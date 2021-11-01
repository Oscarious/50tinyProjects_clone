const next = document.getElementById('next');
const prev = document.getElementById('prev');
const circles = document.querySelectorAll('.circle');
const progress = document.getElementById('progress');
const maxSteps = 4;
let activeSteps = 1;

next.addEventListener('click', () => {
  if (activeSteps <= 3) {
    activeSteps++;
  }
  update();
});

prev.addEventListener('click', () => {
  if (activeSteps > 1) {
    activeSteps--;
  }
  update();
})

function update() {
  // set button status
  if (activeSteps > 1) {
    prev.disabled = false;
  } else {
    prev.disabled = true;
  }

  if (activeSteps >= maxSteps) {
    next.disabled = true;
  } else {
    next.disabled = false;
  }

  // update circle status
  for (let i = circles.length-1; i >= activeSteps; --i) {
    circles[i].classList.remove('active');
  }
  for (let i = 0; i < activeSteps; ++i) {
    circles[i].classList.add('active');
  }

  // update progress line
  progress.style.width = (activeSteps-1) / (maxSteps-1) * 100 + '%';

}
