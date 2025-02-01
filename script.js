const button = document.getElementById('useless-button');
const body = document.body;
const clickSound = document.getElementById('click-sound');

button.addEventListener('click', () => {
  // Play the button click sound
  clickSound.play();

  // Toggle between light and dark themes
  body.classList.toggle('dark');

  // Change button text for fun
  button.textContent = body.classList.contains('dark') ? 'Click Again' : 'Click Me';
});