const body = document.querySelector('body');
const colorsSection = document.getElementById('colors');
const colorCode = document.getElementById('rgb-color');
const answer = document.getElementById('answer');
const resetButton = document.getElementById('reset-game');
const score = document.getElementById('score');

const getRandomNumber = (n) => Math.round(Math.random() * n);

const generateColorOptions = () => {
  for (let i = 1; i <= 6; i += 1) {
    const colorOption = document.createElement('div');
    const color = `rgb(${getRandomNumber(255)}, ${getRandomNumber(255)}, ${getRandomNumber(255)})`;

    colorOption.style.backgroundColor = color;
    colorOption.className = 'ball';
    colorsSection.insertBefore(colorOption, answer);
  }
};

const setColorCode = () => {
  const element = colorsSection.children[getRandomNumber(5)];
  const bgColor = window.getComputedStyle(element).getPropertyValue('background-color');
  colorCode.innerText = bgColor.substring(3, bgColor.length);
};

const revealColor = (color) => {
  const bgColor = document.getElementById('color-to-guess');
  bgColor.style.opacity = '100%';
  bgColor.style.backgroundImage = 'none';
  bgColor.style.backgroundSize = '';
  bgColor.style.backgroundColor = `${color}`;
};

body.addEventListener('click', ({ target }) => {
  if (target.classList.contains('ball') && answer.innerText === 'Escolha uma cor') {
    const color = target.style.backgroundColor;
    if (color === `rgb${colorCode.innerText}`) {
      answer.innerText = 'Acertou!';
      score.innerText = `${parseInt(score.innerText, 10) + 3}`;
    } else {
      answer.innerText = 'Errou! Tente novamente!';
    }

    revealColor(color);
  }
});

resetButton.addEventListener('click', () => {
  const bgColor = document.getElementById('color-to-guess');
  const image = 'question-mark.png';

  bgColor.style.opacity = '20%';
  bgColor.style.backgroundImage = `url('/${image}')`;
  bgColor.style.backgroundSize = 'cover';
  bgColor.style.backgroundColor = '';

  while (colorsSection.children.length > 1) colorsSection.removeChild(colorsSection.firstChild);

  generateColorOptions();
  setColorCode();
  answer.innerText = 'Escolha uma cor';
});

window.onload = () => {
  generateColorOptions();
  setColorCode();
};
