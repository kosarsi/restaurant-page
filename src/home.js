import burgerImage from "./burger.jpg";

export default function showHome() {
    const container = document.querySelector("#content");
    const newContainer = document.createElement("div");
    newContainer.classList.add("container");
    const header = document.createElement("h1");
    header.textContent = "Home";
    const burger = document.createElement("img");
    burger.src = burgerImage;
    const description = document.createElement("span");
    description.textContent = "Burgers are great"; 
    newContainer.append(header);
    newContainer.append(burger);
    newContainer.append(description);
    container.append(newContainer);
};