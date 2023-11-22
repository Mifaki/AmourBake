document.addEventListener("DOMContentLoaded", function () {
  const buttonContaienr = document.querySelector(".header-btn-container");
  const profileContainer = document.querySelector(".user-container");
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const userData = JSON.parse(localStorage.getItem("userData"));
  const userName = userData.fullName

  if (isLoggedIn) {
    
    profileContainer.style.display = "flex";
    buttonContaienr.style.display = "none";

    const userNameElement = profileContainer.querySelector(".text-b");
    userNameElement.textContent = userName;
  } else {
    profileContainer.style.display = "none";
    buttonContaienr.style.display = "flex";
  }
});
