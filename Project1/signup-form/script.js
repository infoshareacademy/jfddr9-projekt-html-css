const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const lastName = document.getElementById("lastName");

form.addEventListener('submit', (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const lastNameValue = lastName.value.trim();

  if (usernameValue === "") {
    setErrorFor(username, "First Name cannot be empty");
  } else {
    setSuccessFor(username);
  }

  if (lastNameValue === "") {
    setErrorFor(lastName, "Last Name cannot be empty");
  } else {
    setSuccessFor(lastName);
  }

  if (emailValue === "") {
    setErrorFor(email, "Email cannot be empty");
  } else {
    setSuccessFor(email);
  }

  if (passwordValue === "") {
    setErrorFor(password, "Password cannot be empty");
  } else {
    setSuccessFor(password);
  }

  
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const warning = formControl.querySelector(".warning");
  formControl.className = "form-control error";
  warning.innerText = message;
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

