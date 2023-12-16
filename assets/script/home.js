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

const options = {
  method: "GET",
  headers: {
    "Content-Type": "application/json; charset=UTF-8",
  },
  mode: "cors",
};

async function getUsers() {
  const url = `https://randomuser.me/api/?results=10&seed=same`;

  try {
    const result = await fetch(url, options);

    if (!result.ok) {
      throw new Error(`${result.statusText} status: ${result.status}`);
    }
    const users = await result.json();
    const list = users.results;
    print(list);
    list.forEach((user) => {
      displayUsers(user);
    });
  } catch (error) {
    print(error.message);
  }
}

function displayUsers(user) {
  // Create elements
  const profileSuggestion = create("div");
  profileSuggestion.className = "profile-suggestion";

  const profileSuggestionCard = create("div");
  profileSuggestionCard.className = "profile-suggestion-card";

  const img = create("img");
  img.className = "profile-suggestion-img";
  img.src = user.picture.large;
  img.alt = "profile";

  const profileSuggestionCardInfo = create("div");
  profileSuggestionCardInfo.className = "profile-suggestion-card-info";

  const name = create("h3");
  name.className = "profile-suggestion-card-name";
  name.textContent = `${user.name.first} ${user.name.last}`;

  const location = create("p");
  location.className = "profile-suggestion-card-location";
  location.textContent = `${user.location.city}, ${user.location.state}, ${user.location.country}`;

  const addConnection = create("div");
  addConnection.className = "add-connection";

  const button = create("button");
  button.className = "add-connection-btn";
  button.title = "Add Connection";

  const icon = create("i");
  icon.className = "fas fa-user-plus";

  // Append elements
  button.appendChild(icon);
  addConnection.appendChild(button);
  profileSuggestionCardInfo.append(name, location);
  profileSuggestionCard.append(img, profileSuggestionCardInfo);
  profileSuggestion.append(profileSuggestionCard, addConnection);

  // Append to document
  const rightSection = select(".right-section .profile-connection-suggestion");
  rightSection.appendChild(profileSuggestion);
}

getUsers();