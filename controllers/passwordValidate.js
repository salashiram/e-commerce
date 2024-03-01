const btnSubmit = document.getElementById("btn-register");
const password1 = document.getElementById("pass1");
const password2 = document.getElementById("pass2");
// validate same password
function repeatPassValidate(pass1, pass2) {
  const errorMessage = document.getElementById("error-message");
  if (pass1.value !== pass2.value) {
    errorMessage.style.display = "block";
    return;
  } else {
    errorMessage.style.display = "none";
  }
}
// validate correct password format
function passwordValidate(inputPass) {
  const errorMessage = document.getElementById("error-pass-message");
  let pass = inputPass.value;
  let regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!\"#\$%&\/\='?\¡¿:;,.\-_+\*{\]\[\}\(\)])(?=.{8,})/;
  if (!regex.test(pass)) {
    errorMessage.style.display = "block";
    return;
  } else {
    errorMessage.style.display = "none";
  }
}
btnSubmit.addEventListener("click", () => {
  repeatPassValidate(password1, password2);
  passwordValidate(password1);
});
