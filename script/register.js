// register.js

document.addEventListener("DOMContentLoaded", function () {
    const signUpForm = document.querySelector(".auth-form");
  
    signUpForm.addEventListener("submit", function (event) {
      event.preventDefault();
  
      const fullName = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
  
      const userData = {
        fullName,
        email,
        password,
      };
  
      localStorage.setItem("userData", JSON.stringify(userData));
      window.location.href = "./login.html";
    });
  });
  