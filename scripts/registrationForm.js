let form = document.getElementById("form");
let successMessage = document.getElementById("success-message");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let errors = {};

  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  const usernameRegex = /^[a-zA-Z0-9_-]{3,16}$/;
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/; 
  if (!usernameRegex.test(username)) {
    errors.username = "Username must be 3 to 16 characters long and contain only alphanumeric characters, underscore, or hyphen";
  }

  if (!passwordRegex.test(password)) {
    errors.password = "Password must be between 6 to 20 characters and include at least one lowercase letter, one uppercase letter, and one digit";
  }

  document.querySelectorAll(".error-text").forEach((element) => {
    element.textContent = "";
  });

  for (let item in errors) {
    let errorText = document.getElementById("error-" + item);
    if (errorText) {
      errorText.innerText = errors[item];
    }
  }

  if (Object.keys(errors).length === 0) {
    let person = { username, password };

    let regUsers = localStorage.getItem("regUsers");

    if (regUsers === null) {
      localStorage.setItem("regUsers", JSON.stringify([person]));
    } else {
      let oldRegUsers = JSON.parse(regUsers);
      oldRegUsers.push(person);
      localStorage.setItem("regUsers", JSON.stringify(oldRegUsers));
    }

    window.location.href = 'login.html';
  }
});
