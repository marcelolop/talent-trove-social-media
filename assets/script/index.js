"use strict";

import {
  onEvent,
  getElement,
  select,
  selectAll,
  print,
  sleep,
  randomNumber,
  filterArray,
  create,
} from "./utils/general.js";

/*
Directions and requirements
• The application consists of two pages: one for user login (index) and one for the main page 
(home). Ensure that the login section occupies an entire page rather than appearing as a
dialog.
• The home page should have a header, a footer, and a 3-column layout. Base your design on 
one or more examples provided. Responsive design is optional.
• Store login information (username and password) in localStorage. Upon clicking the login 
button, the system will access this stored data, comparing it with the provided credentials. If 
the comparison is successful, your code will redirect the user to the homepage. Otherwise, 
display an error message ('Incorrect username or password').
• Remember: you need to provide the credentials your application will store, so I can test it. 
Add this information to your comment on MyLeaning.
• You, as the main user, may add your own picture and data manually.
• Include other users (at least 10), such as your connections or 'people you may know,' retrieved 
from the Random User API. Display only their profile pictures, full names, and cities.
* Check examples online. Avoid creating things that make no sense.
* Maintain consistency throughout the project's pages, ensuring uniformity in colours, fonts, 
* margins, and other design elements.
* Host your application on GitHub and provide a link to the repository.
* Again, check the examples provided (and others) to create pages that look professional
*/

/*
!_______________________
!  User Login Page     |
!_______________________
*/

/*
 *LOGIN DOM ELEMENTS
 */

const emailInput = select(".email-input");
const passwordInput = select(".password-input");
const loginButton = select(".login-btn");
const feedbackText = select(".feedback-text");

//Validations for the login inputs

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

function validateEmail(email) {
  if (emailRegex.test(email)) {
    return true;
  } else {
    feedbackText.textContent =
      "Invalid email address. Please enter a valid email address.";
    return false;
  }
}

function validatePassword(password) {
  if (passwordRegex.test(password)) {
    return true;
  } else {
    feedbackText.textContent =
      "Invalid password. Please enter a valid password.";
    return false;
  }
}

// Saving on localStorage

localStorage.setItem("email", "marcelolop@example.com");
localStorage.setItem("password", "abc12345");

function login(event) {
  event.preventDefault();

  let username = emailInput.value;
  let password = passwordInput.value;

  if (!validateEmail(username) || !validatePassword(password)) {
    return;
  }

  if (
    username === localStorage.getItem("email") &&
    password === localStorage.getItem("password")
  ) {
    window.location.href = "home.html";
  } else {
    feedbackText.textContent = "Incorrect username or password";
  }
}

onEvent("click", loginButton, login);
