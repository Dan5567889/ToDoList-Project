const toggleDarkMode = () => {
    const body = document.body;
    const nav = document.querySelector("nav");
    body.classList.toggle("dark-mode");
    nav.classList.toggle("dark-mode");
    console.log("Dark mode toggled");

if (body.classList.contains("dark-mode") && nav.classList.contains("dark-mode")) {
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
    }
});
