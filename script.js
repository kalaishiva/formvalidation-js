let userInput = document.querySelector(".userInput");
let emailInput = document.querySelector(".emailInput");
let passwordInput = document.querySelector(".passwordInput");
let confirmPasswordInput = document.querySelector(".confirmPasswordInput");
let signBtn = document.querySelector(".signBtn");
let error = document.getElementById("error");
console.log(error);

signBtn.addEventListener('click', Submit);

function Submit(event) {
    event.preventDefault();

    if (userInput.value === "" || userInput == null || userInput.value.length <= 6) {
        userInput.style.background = "rgb(255 237 213)";
        userInput.style.color = "rgb(255 237 213)";
        return error.innerText = "Username should not be empty less than 6 character";
    }
    if (emailInput.value === "" || emailInput == null || emailInput.value.length <= 6) {
        emailInput.style.background = "rgb(255 237 213)";
        return error.innerText = "email should not be empty less than 6 character";
    }
    if (passwordInput.value === "" || passwordInput == null || passwordInput.value.length <= 6) {
        passwordInput.style.background = "rgb(255 237 213)";
        return error.innerText = "password should not be empty less than 6 character";
    }
    if (confirmPasswordInput.value === "" || confirmPasswordInput == null || confirmPasswordInput.value.length <= 6) {
        confirmPasswordInput.style.background = "rgb(255 237 213)";
        return error.innerText = "confirm password should not be empty less than 6 character";
    }

}