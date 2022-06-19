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

tuckers = document.createElement("h1");

restaurantPhoto = document.createElement("img");
restaurantPhoto.src = "/images/restaurant-photo.jpeg";
restaurantPhoto.alt = "Restaurant Photo";

aboutText = document.createElement("h2");
aboutText.innerText =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil impedit quae sunt sint velit magnam quia est, veritatis explicabo? Nemo nesciunt possimus ad eaque eligendi vero repellat. Aperiam, quis ipsa.";

menuText = document.createElement("h1");
menuText.innerText = "Menu";

steakAndFriesText = document.createElement("h2");
steakAndFriesText.innerText = "Steak and Fries";
steakAndFriesPhoto = document.createElement("img");
steakAndFriesPhoto.classList.add("menuphotos");
steakAndFriesPhoto.src =
  "/images/Wagyu_DenverSteakWithFries_1200x628_Salad.jpg";
steakAndFriesPhoto.alt = "Steak and Fries";

salmonText = document.createElement("h2");
salmonText.innerText = "Salmon, Asparagus and Rice";
salmonPhoto = document.createElement("img");
salmonPhoto.classList.add("menuphotos");
salmonPhoto.src =
  "/images/salmon-on-a-plate-with-rice-and-asparagus-scaled.jpg";
salmonPhoto.alt = "Salmon Asparagus and Rice";

chickenWafflesText = document.createElement("h2");
chickenWafflesText.innerText = "Chicken and Waffles";
chickenWafflesPhoto = document.createElement("img");
chickenWafflesPhoto.classList.add("menuphotos");
chickenWafflesPhoto.src =
  "/images/america-best-breakfast-fried-chicken-waffles_0-2000.jpg";
chickenWafflesPhoto.alt = "Chicken and Waffles";

cheeseSteakFriesText = document.createElement("h2");
cheeseSteakFriesText.innerText = "Cheesesteak and Fries";
cheeseSteakFriesPhoto = document.createElement("img");
cheeseSteakFriesPhoto.classList.add("menuphotos");
cheeseSteakFriesPhoto.src =
  "/images/closeup-of-philly-cheesesteak-sandwich-made-with-steak-cheese-and-onions-on-a-toasted-hoagie-roll-with-french-fries-2J6P1F5.jpg";
chickenWafflesPhoto.alt = "Cheesesteak and Fries";

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

window.onload = function () {
  document.body.appendChild(content);
  document.getElementById("content").appendChild(navList);
  document.getElementById("navList").appendChild(menu);
  document.getElementById("navList").appendChild(about);
  document.getElementById("navList").appendChild(contact);
  document.getElementById("content").appendChild(tuckers);
  document.getElementById("content").appendChild(restaurantPhoto);
  document.getElementById("content").appendChild(aboutText);
  document.getElementById("content").appendChild(menuText);
  document.getElementById("content").appendChild(steakAndFriesText);
  document.getElementById("content").appendChild(steakAndFriesPhoto);
  document.getElementById("content").appendChild(salmonText);
  document.getElementById("content").appendChild(salmonPhoto);
  document.getElementById("content").appendChild(chickenWafflesText);
  document.getElementById("content").appendChild(chickenWafflesPhoto);
  document.getElementById("content").appendChild(cheeseSteakFriesText);
  document.getElementById("content").appendChild(cheeseSteakFriesPhoto);
  document.getElementById("content").appendChild(address);
  document.getElementById("content").appendChild(contactText);
  document.getElementById("content").appendChild(mrTuckerText);
  document.getElementById("content").appendChild(mrTuckerPhone);
  document.getElementById("content").appendChild(mrTuckerEmail);
  document.getElementById("content").appendChild(mrsTuckerText);
  document.getElementById("content").appendChild(mrsTuckerPhone);
  document.getElementById("content").appendChild(mrsTuckerEmail);
};
