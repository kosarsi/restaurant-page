console.log("Running"); 

import showMenu from "./menu.js";
import showAbout from "./about.js"; 
import showHome from "./home.js"

const homeButton = document.querySelector("#home");
const menuButton = document.querySelector("#menu");
const aboutButton = document.querySelector("#about");

showHome(); 

homeButton.addEventListener("click", showHome);

menuButton.addEventListener("click", showMenu);

aboutButton.addEventListener("click", showAbout);