const rangeFontSize = document.querySelector('#font-size-control')
const text = document.querySelector('#text')



rangeFontSize.addEventListener('input', onRangeInput)

function onRangeInput(event) {
        console.log(rangeFontSize.value);
  if (rangeFontSize.value === rangeFontSize.max) {
    console.log("Досить тягнути, це максимум");
  } else if (rangeFontSize.value === rangeFontSize.min) {
    console.log("Менше вже не буде");
  }
  text.style.fontSize = `${rangeFontSize.value}px`
}
