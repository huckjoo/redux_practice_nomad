const plus = document.querySelector('#plus');
const minus = document.querySelector('#minus');
const number = document.querySelector('span');

let count = 0;

number.innerText = count;

plus.addEventListener('click', handlePlus);
minus.addEventListener('click', handleMinus);

function handlePlus() {
  count += 1;
  updateText();
}

function handleMinus() {
  count -= 1;
  updateText();
}

const updateText = () => {
  number.innerText = count;
};
