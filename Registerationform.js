    var errorMessages = {
    usernameRequired: "Username is required*",
    usernameLength: "Username must be of 6-letters*",
    emailRequired: "Email is required*",
    invalidEmail: "Invalid email format*",
    passwordRequired: "Password is required*",
    passwordLength: "Password must be of 8-digits*",
    confirmPasswordRequired: "Confirm Password is required*",
    confirmPasswordLength: "Confirm Password must be of 8-digits*",
    passwordsMismatch: "Passwords do not match*"
}
    function validateForm() {
    clearErrors();
    var isValid = true;

    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    
    if (username === "") {
        displayError("usernameError", "Username is required*");
        isValid = false;
    }
    if (username.length < 6) {
        displayError("usernameError", "Username must be of 6-letters*");
        isValid = false;
    }

    if (email === "") {
        displayError("emailError", "Email is required*");
        isValid = false;
    } else if (!isValidEmail(email)) {
        displayError("emailError", "Invalid email format*");
        isValid = false;
    }

    if (password === "") {
        displayError("passwordError", "Password is required*");
        isValid = false;
    }
     else if (password.length < 8) {
        displayError("passwordError", "Password must be of 8-digits*");
        isValid = false;
    }

    if (confirmPassword === "") {
        displayError("confirmPasswordError", "Confirm Password is required*");
        isValid = false;
    }

    else if (confirmPassword.length < 8) {
        displayError("confirmPasswordError", "confirmPassword must be of 8-digits*");
        isValid = false;
    }

    else if (password !== confirmPassword) {
        displayError("confirmPasswordError", "Passwords do not match*");
        isValid = false;
    }

    return isValid;
}

function isValidEmail(email) {
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
}

function displayError(id, message) {
    var errorElement = document.getElementById(id);
    errorElement.textContent = message;
}

function clearErrors() {
    var errorElements = document.querySelectorAll(".error");
    errorElements.forEach(function (element) {
        element.textContent = "";
    });
}
document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault();

    if (validateForm()) {
        alert(" Thankyou! for your registeration.");
    }
});




