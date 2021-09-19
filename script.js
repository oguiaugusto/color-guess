const colorsSection = document.getElementById('colors');
const colorCode = document.getElementById('rgb-color');

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
    colorsSection.appendChild(colorOption);
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

window.onload = () => {
  generateColorOptions();
  setColorCode();
};
