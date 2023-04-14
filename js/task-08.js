const loginForm = document.querySelector('.login-form'); 

loginForm.addEventListener('submit', onFormSubmit);

function onFormSubmit (event) {
    event.preventDefault();
    const formEl = event.currentTarget.elements
    const emailInput = formEl.email.value;
    const passwordInput = formEl.password.value;

    if(emailInput === "" || passwordInput === "") {
    window.alert(" All fields must be filled!")
    } else {

    const formData = new FormData(event.currentTarget);
    formData.forEach((value, name) => {
        console.log(name, ':', value);
    
    loginForm.reset()
    })
}
}