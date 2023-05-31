document.addEventListener("DOMContentLoaded", function () {
  let form = document.querySelector("form");
  let signIn = document.getElementById("first");
  let successMessage = document.getElementById("second");
  let emailBox = document.getElementById("input");
  let userEmail = document.getElementById("user-email");
  let dismissButton = document.getElementById("dismiss-btn");

  successMessage.style.display = "none";

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    let email = emailBox.value;
    if (!validateEmail(email)) {
      emailBox.classList.add("invalid");
      emailBox.style.border = "2px solid red";
      return;
    }

    signIn.style.display = "none";
    successMessage.style.display = "block";

    userEmail.textContent = email;
    userEmail.style.fontWeight = "700";


    emailBox.value = "";
    emailBox.style.border = "1px solid grey";
  });

  dismissButton.addEventListener("click", function () {
    successMessage.style.display = "none";
    signIn.style.display = "flex";
  });

  function validateEmail(email) {
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
});