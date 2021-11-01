const button = document.getElementsByClassName('btn');
const search = document.getElementsByClassName('search');

let active = true;

button[0].addEventListener('click', () => {
  if (active) {
    search[0].classList.remove('active');
  } else {
    search[0].classList.add('active');
  }
  active = !active;
});