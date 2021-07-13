const inputBox = document.getElementById("email");
const invalid = document.getElementById("invalid");
const errorIcon = document.getElementById("error-icon")
const email = inputBox.value; 


//Change image src on breakpoint
function changeImageSrc(matchMedia) {
    if (matchMedia.matches) { // If media query matches
        document.querySelector('.hero-image').src = './images/hero-desktop.jpg';
      } else {
        document.querySelector('.hero-image').src = './images/hero-mobile.jpg';
      }
}

var matchMedia = window.matchMedia("(min-width: 768px)");
changeImageSrc(matchMedia); // Call listener function at run time
matchMedia.addListener(changeImageSrc); // Attach listener function on state changes 


// '.content-signin' => '.form-input'
//var form = document.querySelector('.content__signin');
var form = document.querySelector('.form-input');

function ValidateEmail(input) {

    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
    if (input.value.match(validRegex)) {
      return true;
    } else {
      return false;
    }
}



function emailValid(form) {
    if (form.classList.contains('email')) {
        form.classList.remove('email');
    }
}

function emailInvalid(form) {
    if (!form.classList.contains('email')) {
        form.classList.add('email');
        invalid.style.visibility = "visible";
        errorIcon.style.visibility = "visible";

    }
    return false;
}

form.querySelector('.email').addEventListener('blur', (event) => {
    if(!ValidateEmail(form.querySelector('.email'))) {
        event.preventDefault();
        emailInvalid(form);
      } else {
        emailValid(form);
      }
})
form.addEventListener('submit', (event) => {
  if(!ValidateEmail(form.querySelector('.email'))) {
    event.preventDefault();
    emailInvalid(form);
  } else {
    emailValid(form);
  }
})