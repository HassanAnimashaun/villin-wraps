import {
  openCTA,
  formCTA,
  firstName,
  lastName,
  email,
  phone,
  service,
  year,
  make,
  model,
  inputFile,
  imgView,
  submitButton,
  nameError,
  emailError,
  phoneError,
  serviceError,
  yearError,
  makeError,
  modelError,
  emailRE,
} from "./elements.js";

window.addEventListener("DOMContentLoaded", () => {
  // Toggle visibility of the form
  openCTA.addEventListener("click", () => {
    openCTA.classList.add("d-none"); // Hide the button
    formCTA.classList.remove("d-none"); // Show the form
  });

  // Form Validation **POSSIBLE SEPERATE FILE**
  formCTA.addEventListener("input", () => {
    // Name
    if (firstName.value.length === 0 && lastName.value.length === 0) {
      nameError.textContent = "Enter your Name";
    } else {
      nameError.textContent = "";
    }
    // Email
    if(email.value.length === 0){
        emailError.textContent = "Enter your Email";
    } else {
        emailError.textContent = "";
    }
    // Phone Number
    if (phone.value.length !== 10) {
      phoneError.textContent = "Phone number must be 10 digits.";
    } else {
      phoneError.textContent = "";
    }
  });

  inputFile.addEventListener("change", () => {
    let imgLink = URL.createObjectURL(inputFile.files[0]);
    imgView.style.backgroundImage = `url(${imgLink})`;
    imgView.textContent = "";
    imgView.style.border = 0;
  });

  dropArea.addEventListener("dragover", (e) => {
    e.preventDefault();
    dropArea.classList.add("dragover");
  });
  dropArea.addEventListener("drop", (e) => {
    e.preventDefault();
    inputFile.e.dataTransfer.files;
    document.inputFile("input-file").dispatchEvent(new Event("change"));
  });
});
