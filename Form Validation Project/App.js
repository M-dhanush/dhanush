
const form = document.querySelector('#form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const cpassword = document.querySelector('#cpassword');
form.addEventListener('submit', (e) => {

    if (!validateInputs()) {
        e.preventDefault();
    }

})
function validateInputs() {
    const usernameVal = username.value.trim();
    const emailVal = email.value.trim();
    const passwordVal = password.value.trim();
    const cpasswordVal = cpassword.value.trim();
    let success = true

    if (usernameVal === '') {
        setError(username, "username is required")
        success = false
    }
    else {
        setSuccess(username)
    };
    if (emailVal === '') {
        setError(email, 'Email is required')
        success = false
    }
    else if (!validateEmail(emailVal)) {
        setError(email, "Enter valid email")
    }
    else {
        setSuccess(email)
    };
    if (passwordVal === '') {
        setError(password, "please enter password")
        success = false
    }
    else if (passwordVal.length < 8) {
        setError(password, "enter password atleast 8 characters")
    }
    else {
        setSuccess(password)
    };
    if (cpasswordVal === '') {
        setError(cpassword, 'please enter password')
        success = false
    }
    else if (cpassword !== passwordVal) {
        setError(cpassword, 'password does not match')
    }
    else {
        setSuccess(cpassword)
    }
    return success
};

function setError(element, message) {
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error');

    errorElement.innerText = message;
    inputGroup.classList.add('error');
    inputGroup.classList.remove('success');

}
function setSuccess(element) {
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error');

    errorElement.innerText = '';
    inputGroup.classList.add('success');
    inputGroup.classList.remove('error');

}

function validateEmail(email) {
    var pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return pattern.test(email);
}

