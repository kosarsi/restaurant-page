import burger from "./burger.jpg";
import soda from "./soda.jpg";
import frenchfries from "./frenchfries.jpg";
import mac_n_cheese from "./mac-n-cheese.jpg";

export default function showMenu() {
    const container = document.querySelector("#content");
    const newContainer = document.createElement("div");
    newContainer.classList.add("container");
    const header = document.createElement("h1");
    header.textContent = "Menu";

    const menu = document.createElement("div");
    menu.classList.add("menuItems");

    const burgerDiv = document.createElement("div");
    const burgerImg = document.createElement("img");
    burgerImg.src = burger;
    const burgerText = document.createElement("span");
    burgerText.textContent = "Burger - $6.99";
    burgerDiv.append(burgerImg);
    burgerDiv.append(burgerText);

    const friesDiv = document.createElement("div");
    const friesImg = document.createElement("img");
    friesImg.src = frenchfries;
    const friesText = document.createElement("span");
    friesText.textContent = "French Fries - $3.99";
    friesDiv.append(friesImg);
    friesDiv.append(friesText);

    const sodaDiv = document.createElement("div");
    const sodaImg = document.createElement("img");
    sodaImg.src = soda; 
    const sodaText = document.createElement("span");
    sodaText.textContent = "Soda - $2.99";
    sodaDiv.append(sodaImg);
    sodaDiv.append(sodaText);

    const macDiv = document.createElement("div");
    const macImg = document.createElement("img");
    macImg.src = mac_n_cheese;
    const macText = document.createElement("span");
    macText.textContent = "Mac and Cheese - $4.99";    
    macDiv.append(macImg);
    macDiv.append(macText);

    menu.append(burgerDiv);
    menu.append(friesDiv);
    menu.append(sodaDiv);
    menu.append(macDiv);

    newContainer.append(header)
    newContainer.append(menu);

    container.append(newContainer);


}