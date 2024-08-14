export default function showAbout() {
    const container = document.querySelector("#content");
    const newContainer = document.createElement("div");
    newContainer.classList.add("container");
    const header = document.createElement("h1");
    header.textContent = "About";
    const phone = document.createElement("span");
    phone.textContent = "Phone: 123-456-7890"; 
    const email = document.createElement("span");
    email.textContent = "Email: notfake@gmail.com"; 
    newContainer.append(header);
    newContainer.append(phone);
    newContainer.append(email);
    container.append(newContainer);
};