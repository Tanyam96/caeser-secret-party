const encryptBtn = document.getElementById('encrypt-btn');
const decryptBtn = document.getElementById('decrypt-btn');
const clearBtn = document.getElementById('clear-btn');
const inputText = document.getElementById('input-text');
const inputNumber = document.getElementById('input-number');
const resultText = document.getElementById('result-text');

encryptBtn.addEventListener('click', (e) => {
  if (!inputText.value) return (resultText.innerText = 'No Text Provided!');
  if (!inputNumber.value)
    return (resultText.innerText = 'No Shift Value Provided!');
  let result = encryptMessage(inputText.value, Number(inputNumber.value));
  resultText.innerText = result;
});

decryptBtn.addEventListener('click', (e) => {
  if (!inputText.value) return (resultText.innerText = 'No Text Provided!');
  if (!inputNumber.value)
    return (resultText.innerText = 'No Shift Value Provided!');
  let result = decryptMessage(inputText.value, Number(inputNumber.value));
  resultText.innerText = result;
});

clearBtn.addEventListener('click', (e) => {
  inputText.value = '';
  resultText.innerText = '';
});
