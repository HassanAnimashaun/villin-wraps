// Select elements using querySelector
const openCTA = document.querySelector('#open-cta');
const formCTA = document.querySelector('#form-cta');
const firstName = document.querySelector('#first-name');
const lastName = document.querySelector('#last-name');
const email = document.querySelector('#email');
const phone = document.querySelector('#phone');
const service = document.querySelector('#service');
const year = document.querySelector('#year');
const make = document.querySelector('#make');
const model = document.querySelector('#model');
const inputFile = document.querySelector('#input-file');
const imgView = document.querySelector('#img-view');
const submitButton = document.querySelector('#submit-cta');

// Error message elements
const nameError = document.querySelector('#name-error');
const emailError = document.querySelector('#email-error');
const phoneError = document.querySelector('#phone-error');
const serviceError = document.querySelector('#service-error');
const yearError = document.querySelector('#year-error');
const makeError = document.querySelector('#make-error');
const modelError = document.querySelector('#model-error');

// Regular expression
var emailRE =  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


// Export all the variables to use them in other files
export {
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
    emailRE
};
