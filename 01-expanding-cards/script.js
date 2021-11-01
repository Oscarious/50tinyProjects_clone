const panels = document.querySelectorAll('.panel');

panels.forEach(panel => panel.addEventListener('click', () => {
  removeActiveFromAllPanels();
  panel.classList.add('active');
}));

const removeActiveFromAllPanels = () => {
  panels.forEach(panel => {
    panel.classList.remove('active');
  })
};