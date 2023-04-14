const input = document.querySelector('input[data-length="6"]')
input.addEventListener('blur', onBlurInput)

function onBlurInput(event) {
  console.log(input.value.length);
  if (input.value.length === 6) {
    input.classList.add('valid')
    input.classList.remove('invalid')
  } else if (input.value.length === 0) {
    input.classList.remove('valid')
    input.classList.remove('invalid')
  } else {
    input.classList.add('invalid')
    input.classList.remove('valid')
  }
}
