// login
const btnLogin = document.getElementById("btn-login");
const emailFieldLogin = document.getElementById("user-email-login");
const errorMessageEmailLogin = document.getElementById("error-email1-message");
// register
const btnRegister = document.getElementById("btn-register");
const emailFieldRegister = document.getElementById("user-email");
const errorMessageEmailRegister = document.getElementById(
  "error-email2-message"
);
function validateEmail(email) {
  let validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
  if (validEmail.test(email.value)) {
    return true;
  } else {
    return false;
  }
}
function usernameValidate() {
  let usernamefield = document.getElementById("user-name");
  let fieldLength = usernamefield.value.length;
  let displayError1 = document.getElementById("username-min-alert");
  let displayError2 = document.getElementById("username-max-alert");

  if (fieldLength < 3) {
    displayError1.style.display = "block";
    return;
  } else if (fieldLength > 12) {
    displayError2.style.display = "block";
    return;
  } else {
    displayError1.style.display = "none";
    displayError2.style.display = "none";
  }
  if (fieldLength < 3) {
    displayError1.style.display = "block";
  } else if (fieldLength > 10) {
    alert("El nombre de usuario debe tener máximo 10 carácteres");
  }
}
btnLogin.addEventListener("click", () => {
  if (!validateEmail(emailFieldLogin)) {
    errorMessageEmailLogin.style.display = "block";
    return;
  } else {
    errorMessageEmailLogin.style.display = "none";
  }
});
btnRegister.addEventListener("click", () => {
  usernameValidate();
  if (!validateEmail(emailFieldRegister)) {
    errorMessageEmailRegister.style.display = "block";
    return;
  } else {
    errorMessageEmailRegister.style.display = "none";
  }
});
