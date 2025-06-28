export default function showMenu() {
    const content = document.querySelector("#content"); 
    content.textContent = "";
    const sandwich = document.createElement("p");
    sandwich.textContent = "Sandwich";
    const tacos = document.createElement("p");
    tacos.textContent = "Tacos";
    content.appendChild(sandwich);
    content.appendChild(tacos); 
};