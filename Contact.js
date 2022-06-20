import { menuTab } from "./Menu.js";
import { aboutTab } from "./About.js";

const contactTab = function () {
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

  address = document.createElement("h1");
  address.innerText = "1234 Tucker Lane, Tucker City, US";

  contactText = document.createElement("h1");
  contactText.innerText = "Contact";

  mrTuckerText = document.createElement("h2");
  mrTuckerText.innerText = "Mr. Tucker";
  mrTuckerPhone = document.createElement("h3");
  mrTuckerPhone.innerText = "Phone: 555-555-5555";
  mrTuckerEmail = document.createElement("h3");
  mrTuckerEmail.innerText = "Email: MrTuckerTuckerTucker@mail.com";

  mrsTuckerText = document.createElement("h2");
  mrsTuckerText.innerText = "Mrs. Tucker";
  mrsTuckerPhone = document.createElement("h3");
  mrsTuckerPhone.innerText = "Phone: 555-555-5554";
  mrsTuckerEmail = document.createElement("h3");
  mrsTuckerEmail.innerText = "Email: MrsTuckerTuckerTucker@mail.com";

  document.body.appendChild(content);
  document.getElementById("content").appendChild(navList);
  document.getElementById("navList").appendChild(menu);
  document.getElementById("navList").appendChild(about);
  document.getElementById("navList").appendChild(contact);
  document.getElementById("content").appendChild(address);
  document.getElementById("content").appendChild(contactText);
  document.getElementById("content").appendChild(mrTuckerText);
  document.getElementById("content").appendChild(mrTuckerPhone);
  document.getElementById("content").appendChild(mrTuckerEmail);
  document.getElementById("content").appendChild(mrsTuckerText);
  document.getElementById("content").appendChild(mrsTuckerPhone);
  document.getElementById("content").appendChild(mrsTuckerEmail);

  menu.addEventListener("click", menuTab);

  about.addEventListener("click", aboutTab);

  contact.addEventListener("click", contactTab);
};

export { contactTab };
