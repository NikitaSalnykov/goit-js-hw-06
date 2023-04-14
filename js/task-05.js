const inputName = document.querySelector('#name-input')
const outputName = document.querySelector('#name-output')

inputName.addEventListener('input', onInputChangeName)

function onInputChangeName(event) {
  console.log(outputName.textContent);
  if (inputName.value !== "" && inputName.value.trim()) {
    outputName.textContent = inputName.value.trim()
  } else
    outputName.textContent = "Anonymous"
}