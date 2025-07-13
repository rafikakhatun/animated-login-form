const email = document.getElementById("email");
const password = document.getElementById("password");
const emailError = document.getElementById("email-error");
const passwordError = document.getElementById("password-error");
const loginBtn = document.getElementById("btn");

loginBtn.addEventListener("click", function () {
     // Step 1: clear old messages
  emailError.textContent = "";
  passwordError.textContent = "";

  let valid = true;

  // Step 2: email validation
  if (email.value.trim() === "") {
    emailError.textContent = "Email is required.";
    valid = false;
  } else if (!/^\S+@\S+\.\S+$/.test(email.value.trim())) {
    emailError.textContent = "Enter a valid email.";
    valid = false;
  }

  // Step 3: password validation
  if (password.value.trim() === "") {
    passwordError.textContent = "Password is required.";
    valid = false;
  } else if (password.value.length < 6) {
    passwordError.textContent = "Minimum 6 characters.";
    valid = false;
  }
  


  
});
