const form = document.getElementById("contact-form");
const successMessage = document.getElementById("success-message");
// console.log(form);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // console.log(form);

  const firstName = document.getElementById("first-name").value.trim();
  const lastName = document.getElementById("last-name").value.trim();
  const email = document.getElementById("email").value.trim();
  const queryType = document.querySelector('input[name="query-type"]:checked');
  const message = document.getElementById("message").value.trim();
  const consent = document.getElementById("consent").checked;

  console.log(consent);

  const formAlert = document.querySelectorAll(".form-alert");

  // console.log(formAlert);

  let isValid = true;

  // firstName Validation
  if (firstName === "") {
    isValid = false;


    document.querySelector("#first-name + .form-alert").style.display = "block";
    document.querySelector("#first-name").style.border = "1px solid red";
  } else {
    document.querySelector("#first-name + .form-alert").style.display = "none";
    document.querySelector("#first-name").style.border =
      "1px solid hsl(187, 24%, 22%)";
  }

  // LastName validation
  if (lastName === "") {
    isValid = false;

    document.querySelector("#last-name + .form-alert").style.display = "block";
    document.querySelector("#last-name").style.border = "1px solid red";
  } else {
    document.querySelector("#last-name + .form-alert").style.display = "none";
    document.querySelector("#last-name").style.border =
      "1px solid hsl(187, 24%, 22%)";
  }

  // Email Validation
  if (!isValidEmail(email)) {
    document.querySelector("#email + .form-alert").style.display = "block";
    document.querySelector("#email").style.border = "1px solid red";
  } else {
    document.querySelector("#email + .form-alert").style.display = "none";
    document.querySelector("#email").style.border =
      "1px solid hsl(187, 24%, 22%)";
  }

  // Query Validation
  if (!queryType) {
    isValid = false;
    document.querySelector(".radio-input + .form-alert").style.display =
      "block";
  } else {
    document.querySelector(".radio-input + .form-alert").style.display = "none";
  }

  // Message Validation
  if (message === "") {
    isValid = false;

    document.querySelector("#message + .form-alert").style.display = "block";
    document.querySelector("#message").style.border = "1px solid red";
  } else {
    document.querySelector("#message + .form-alert").style.display = "none";
    document.querySelector("#message").style.border =
      "1px solid hsl(187, 24%, 22%)";
  }
  // console.log(message);

  // consent Validation
  if (!consent) {
    isValid = false;
    console.log(formAlert[5]);

    formAlert[5].classList.add("form-error");
  } else {
    formAlert[5].classList.remove("form-error");
  }
  // console.log(formAlert);

  // form is valid
  if (isValid) {
    successMessage.classList.add("active");
    form.reset();
  }
});

// Email Validation
function isValidEmail(email) {
  // const emailRegex = /^[^\s@]+@{^\s@}+\.[^\s@]+$/;
  const emailRegex =
    /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
  // console.log( emailRegex.test(email));

  return emailRegex.test(email);
}
