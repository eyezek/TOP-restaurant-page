const menuTab = function () {
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
  cheeseSteakFriesPhoto.alt = "Cheesesteak and Fries";

  document.body.appendChild(content);
  document.getElementById("content").appendChild(navList);
  document.getElementById("navList").appendChild(menu);
  document.getElementById("navList").appendChild(about);
  document.getElementById("navList").appendChild(contact);
  document.getElementById("content").appendChild(menuText);
  document.getElementById("content").appendChild(steakAndFriesText);
  document.getElementById("content").appendChild(steakAndFriesPhoto);
  document.getElementById("content").appendChild(salmonText);
  document.getElementById("content").appendChild(salmonPhoto);
  document.getElementById("content").appendChild(chickenWafflesText);
  document.getElementById("content").appendChild(chickenWafflesPhoto);
  document.getElementById("content").appendChild(cheeseSteakFriesText);
  document.getElementById("content").appendChild(cheeseSteakFriesPhoto);
};

export { menuTab };
