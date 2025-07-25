// reference inputs
const firstName = document.querySelector("#first-name-input");
const lastName = document.querySelector("#last-name-input");
const email = document.querySelector("#email-input");
const password = document.querySelector("#password-input");
const confirmPassword = document.querySelector("#password-confirm-input");

// reference buttons
const submitBtn = document.querySelector("#submit-btn");
const resetBtn = document.querySelector("#reset-btn");

// Validate email function
function validateEmail(email) {
  const at = email.indexOf("@");
  const dot = email.lastIndexOf(".");
  return at > 0 && dot > at + 1 && dot < email.length - 1;
}

// Helpers
function resetInput(input) {
  input.classList.remove("is-valid", "is-invalid");
  input.classList.add("border", "border-secondary");
}
function markValid(input) {
  input.classList.remove("is-invalid", "border-secondary");
  input.classList.add("is-valid");
}
function markInvalid(input) {
  input.classList.remove("is-valid", "border-secondary");
  input.classList.add("is-invalid");
}

// Main validate function
function validateForm() {
  let valid = true;

  if (firstName.value.trim() === "") {
    markInvalid(firstName);
    valid = false;
  } else {
    markValid(firstName);
  }

  if (lastName.value.trim() === "") {
    markInvalid(lastName);
    valid = false;
  } else {
    markValid(lastName);
  }

  if (!validateEmail(email.value.trim())) {
    markInvalid(email);
    valid = false;
  } else {
    markValid(email);
  }

  if (password.value.length < 6) {
    markInvalid(password);
    valid = false;
  } else {
    markValid(password);
  }

  if (confirmPassword.value !== password.value || confirmPassword.value.length < 6) {
    markInvalid(confirmPassword);
    valid = false;
  } else {
    markValid(confirmPassword);
  }

  return valid;
}

// On register click
submitBtn.addEventListener("click", () => {
  if (validateForm()) {
    alert("Registered successfully");
  }
});

// On reset click
resetBtn.addEventListener("click", () => {
  [firstName, lastName, email, password, confirmPassword].forEach((input) => {
    input.value = "";
    resetInput(input);
  });
});

// When typing: return to gray border
[firstName, lastName, email, password, confirmPassword].forEach((input) => {
  input.addEventListener("input", () => {
    resetInput(input);
  });
});
