const rangeFontSize = document.querySelector('#font-size-control')
const text = document.querySelector('#text')



rangeFontSize.addEventListener('input', onRangeInput)

function onRangeInput(event) {
        console.log(rangeFontSize.value);
  if (rangeFontSize.value === rangeFontSize.max) {
    console.log("Ну все досить, це максимум");
  }
  text.style.fontSize = `${rangeFontSize.value}px`
}
