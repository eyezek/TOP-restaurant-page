import { menuTab } from "./Menu.js";
import { contactTab } from "./Contact.js";

const aboutTab = function () {
  document.body.innerHTML = "";
  content = document.createElement("div");
  content.setAttribute("id", "content");
  navList = document.createElement("ul");
  navList.setAttribute("id", "navList");
  menu = document.createElement("li");
  menu.innerText = "Menu";
  about = document.createElement("li");
  about.innerText = "About";
  contact = document.createElement("li");
  contact.innerText = "Contact";
  menuText = document.createElement("h1");
  menuText.innerText = "Menu";

  tuckers = document.createElement("h1");

  restaurantPhoto = document.createElement("img");
  restaurantPhoto.src = "/images/restaurant-photo.jpeg";
  restaurantPhoto.alt = "Restaurant Photo";

  aboutText = document.createElement("h2");
  aboutText.innerText =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil impedit quae sunt sint velit magnam quia est, veritatis explicabo? Nemo nesciunt possimus ad eaque eligendi vero repellat. Aperiam, quis ipsa.";

  document.body.appendChild(content);
  document.getElementById("content").appendChild(navList);
  document.getElementById("navList").appendChild(menu);
  document.getElementById("navList").appendChild(about);
  document.getElementById("navList").appendChild(contact);
  document.getElementById("content").appendChild(tuckers);
  document.getElementById("content").appendChild(restaurantPhoto);
  document.getElementById("content").appendChild(aboutText);

  menu.addEventListener("click", menuTab);

  about.addEventListener("click", aboutTab);

  contact.addEventListener("click", contactTab);
};

export { aboutTab };
