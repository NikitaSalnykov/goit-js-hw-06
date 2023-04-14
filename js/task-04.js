const incrementBtn = document.querySelector('button[data-action="increment"]');
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const counterValue = document.querySelector('#value');

decrementBtn.addEventListener('click', onDecrementBtn);
incrementBtn.addEventListener('click', onIncrementBtn);

function onDecrementBtn(event) {
    console.log('Decrement operation:', counterValue.textContent,'- 1')
counterValue.textContent = Number(counterValue.textContent) - 1 
  console.log('Result:', counterValue.textContent)
}

function onIncrementBtn(event) {
      console.log('Increment operation:', counterValue.textContent,'+ 1')
  counterValue.textContent = Number(counterValue.textContent) + 1 
  console.log('Result:', counterValue.textContent)
}

