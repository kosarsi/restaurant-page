import "./styles.css";
import showAbout from "./about.js";
import showHome from "./home.js";
import showMenu from "./menu.js";

console.log("Webpack works");

const root = document.querySelector("#content")
const aboutButton = document.querySelector(".about");
const homeButton = document.querySelector(".home");
const menuButton = document.querySelector(".menu");

showHome();

aboutButton.addEventListener("click", () => {
    root.innerHTML = "";
    showAbout();
});

homeButton.addEventListener("click", () => {
    root.innerHTML = "";
    showHome();
});

menuButton.addEventListener("click", () => {
    root.innerHTML = "";
    showMenu();
});