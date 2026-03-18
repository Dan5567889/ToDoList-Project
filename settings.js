const toggleDarkMode = () => {
    const body = document.body;
    
    const nav = document.querySelector("nav");
    const container = document.querySelector(".container");
    const loginContainer = document.querySelector(".login-container");
    body.classList.toggle("dark-mode");
    nav.classList.toggle("dark-mode");
    container.classList.toggle("dark-mode");
    loginContainer.classList.toggle("dark-mode");
    console.log("Dark mode toggled");

if (body.classList.contains("dark-mode") && nav.classList.contains("dark-mode") && container.classList.contains("dark-mode") && loginContainer.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
};

document.addEventListener("DOMContentLoaded", (event) => {
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
        const nav = document.querySelector("nav");
        nav.classList.add("dark-mode");
        const container = document.querySelector(".container");
        container.classList.add("dark-mode");
        const loginContainer = document.querySelector(".login-container");
        loginContainer.classList.add("dark-mode");
    }
});
