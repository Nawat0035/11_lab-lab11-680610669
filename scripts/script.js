// create reference for input fields.
const firstNameInput = document.querySelector("#first-name-input");
const lastNameInput = document.querySelector("#last-name-input");
const emailInput = document.querySelector("#email-input");
const passwordInput = document.querySelector("#password-input");
const passwordConfirmInput = document.querySelector("#password-confirm-input");

// create reference for buttons.
const submitBtn = document.querySelector("#submit-btn");
const resetBtn = document.querySelector("#reset-btn");

// simple email validation
function validateEmail(email) {
  var atPos = email.indexOf("@");
  var dotPos = email.lastIndexOf(".");
  return atPos > 0 && dotPos > atPos + 1 && dotPos < email.length - 1;
}

function clearStatus(input) {
  input.classList.remove("is-valid");
  input.classList.remove("is-invalid");
}
// add callback function for firstNameInput.onkeyup event
firstNameInput.onkeyup = () => {
  clearStatus(firstNameInput);
};

lastNameInput.onkeyup = () => {
  clearStatus(lastNameInput);
};

emailInput.onkeyup = () => {
  clearStatus(emailInput);
};

passwordInput.onkeyup = () => {
  clearStatus(passwordInput);
  clearStatus(passwordConfirmInput);
};

passwordConfirmInput.onkeyup = () => {
  clearStatus(passwordConfirmInput);
};


// add callback functions for other input events.
// (lastname, email, password, confirm password)

// add callback function for submit button.
submitBtn.onclick = () => {

  let isFirstNameOk = false;
  let isLastNameOk = false;
  let isEmailOk = false;
  let isPasswordOk = false;
  let isPasswordConfirmOk = false;

  // validate first name
  if (firstNameInput.value.trim() === "") {
    firstNameInput.classList.add("is-invalid");
  } else {
    firstNameInput.classList.add("is-valid");
    isFirstNameOk = true;
  }

  // validate last name
  if (lastNameInput.value.trim() === "") {
    lastNameInput.classList.add("is-invalid");
  } else {
    lastNameInput.classList.add("is-valid");
    isLastNameOk = true;
  }

  // validate email
  if (!validateEmail(emailInput.value)) {
    emailInput.classList.add("is-invalid");
  } else {
    emailInput.classList.add("is-valid");
    isEmailOk = true;
  }

  // validate password
  if (passwordInput.value.length < 6) {
    passwordInput.classList.add("is-invalid");
  } else {
    passwordInput.classList.add("is-valid");
    isPasswordOk = true;
  }

  // validate confirm password
  if (
    passwordConfirmInput.value !== passwordInput.value ||
    passwordConfirmInput.value.length < 6
  ) {
    passwordConfirmInput.classList.add("is-invalid");
  } else {
    passwordConfirmInput.classList.add("is-valid");
    isPasswordConfirmOk = true;
  }

  if (
    isFirstNameOk &&
    isLastNameOk &&
    isEmailOk &&
    isPasswordOk &&
    isPasswordConfirmOk
  ) 
  {
    alert("Registered successfully");
  }
};

// add callback function for Reset button.
resetBtn.onclick = () => {
  
  firstNameInput.value = "";
  lastNameInput.value = "";
  emailInput.value = "";
  passwordInput.value = "";
  passwordConfirmInput.value = "";

  clearStatus(firstNameInput);
  clearStatus(lastNameInput);
  clearStatus(emailInput);
  clearStatus(passwordInput);
  clearStatus(passwordConfirmInput);
  
};
