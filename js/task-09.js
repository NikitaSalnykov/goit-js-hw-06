function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector('body')
const colorButton = body.querySelector('.change-color')
const colorName = body.querySelector('.color')

colorButton.addEventListener ('click', onButtonColor) 

function onButtonColor (event) {
  body.style.backgroundColor = `${getRandomHexColor()}`;
  colorName.textContent = `${getRandomHexColor()}`
  console.log(`The color changed to ${getRandomHexColor()}`);
}

