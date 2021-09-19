const body = document.querySelector('body');
const colorsSection = document.getElementById('colors');
const colorCode = document.getElementById('rgb-color');
const answer = document.getElementById('answer');

function getRandomColor() {
  const rNumber = Math.floor(Math.random() * 255) + 1;
  const gNumber = Math.floor(Math.random() * 255) + 1;
  const bNumber = Math.floor(Math.random() * 255) + 1;

  const rgbColor = `rgb(${rNumber}, ${gNumber}, ${bNumber})`;
  return rgbColor;
}

function generateColorOptions() {
  for (let i = 1; i <= 6; i += 1) {
    const colorOption = document.createElement('div');
    colorOption.style.backgroundColor = getRandomColor();
    colorOption.className = 'ball';
    colorsSection.insertBefore(colorOption, answer);
  }
}

function setColorCode() {
  const index = Math.round(Math.random() * 5);
  const element = colorsSection.children[index];
  const eStyles = window.getComputedStyle(element);
  const bgColor = eStyles.getPropertyValue('background-color');
  const colorNumber = bgColor.substring(3, bgColor.length);
  colorCode.innerText = `${colorNumber}`;
}

function setBgColor(color) {
  const bgColor = colorCode.previousElementSibling;
  bgColor.style.opacity = '100%';
  bgColor.style.backgroundImage = 'none';
  bgColor.style.backgroundSize = '';
  bgColor.style.backgroundColor = `${color}`;
}

function checkIfItsCorrect(e) {
  const clicked = e.target.style.backgroundColor;
  const color = `rgb${colorCode.innerText}`;
  if (clicked === color) {
    answer.innerText = 'Acertou!';
  } else {
    answer.innerText = 'Errou! Tente novamente!';
  }
  colorsSection.appendChild(answer);
  setBgColor(color);
}

body.addEventListener('click', (e) => {
  if (e.target.classList.contains('ball') && answer.innerText === 'Escolha uma cor') {
    e.preventDefault();
    checkIfItsCorrect(e);
  }
});

window.onload = () => {
  generateColorOptions();
  setColorCode();
};
