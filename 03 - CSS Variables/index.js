const colorPicker = document.getElementById('base');
const blurPicker = document.getElementById('blur');
const spacingPicker = document.getElementById('spacing');
const inputs = [colorPicker, blurPicker, spacingPicker];

const handleChange = (e) => {
  const property = e.target.name;
  const suffix = e.target.dataset.sizing || '';
  document.body.style.setProperty(`--${property}`, e.target.value + suffix);
}

inputs.forEach(input => {
  input.addEventListener('change', handleChange);
})
