const colorPicker = document.getElementById('base');
const blurPicker = document.getElementById('blur');
const spacingPicker = document.getElementById('spacing');

colorPicker.addEventListener('change', (e) => {
  document.body.style.setProperty('--color', e.target.value);
})
blurPicker.addEventListener('change', (e) => {
  document.body.style.setProperty('--blur', e.target.value);
})
spacingPicker.addEventListener('change', (e) => {
  document.body.style.setProperty('--spacing', e.target.value);
})
