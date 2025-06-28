export default function showAbout() {
    const content = document.querySelector("#content"); 
    content.textContent = "";
    const about = document.createElement("span");
    about.textContent = "Founded in 1994";
    content.appendChild(about);
};