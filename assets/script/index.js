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
