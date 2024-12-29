const inputField = document.getElementById('inputField');
const output = document.getElementById('output');

inputField.addEventListener('input', function() {
  output.textContent = `You typed: ${inputField.value}`;
});
