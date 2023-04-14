function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const controls = document.querySelector('#controls')
const input = controls.firstElementChild
const buttonCreate = document.querySelector('button[data-create]')
const buttonDesroy = document.querySelector('button[data-destroy]')
const boxes = document.querySelector('#boxes')

buttonCreate.addEventListener('click', onButtonCreate);
buttonDesroy.addEventListener('click', onButtonDestroy);


function onButtonCreate (event) {
 for (let i = 0; i < input.value; i+=1){
  const box = document.createElement('div');
  box.style.width=`${10 * i + 30}px`;
  box.style.height=`${10 * i + 30}px`;
  box.style.backgroundColor=`${getRandomHexColor()}`;
  box.classList.add('box--el')
  boxes.appendChild(box)
  console.log(boxes.childElementCount);
}}


function onButtonDestroy (event) {
  const sumBox = boxes.childElementCount
  for (let i = 0; i < sumBox; i+=1) {
    const boxEl = boxes.querySelector('.box--el')
    console.log(boxEl);
    boxEl.remove()
  } 
}