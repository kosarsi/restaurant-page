export default function showHome() {
    const content = document.querySelector("#content"); 
    content.textContent = "";
    const title = document.createElement("p");
    title.textContent = "Restaurant Page";
    const description = document.createElement("p");
    description.textContent = "We make the best food";
    content.appendChild(title);
    content.appendChild(description); 
};