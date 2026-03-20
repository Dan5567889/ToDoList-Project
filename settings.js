const toggleDarkMode = () => {
    const body = document.body;
    // Select BOTH nav bars
    const navs = document.querySelectorAll("nav");
    const containers = document.querySelectorAll(".container, .login-container, .taskCreate, .taskDisplay, .taskManager");

    body.classList.toggle("dark-mode");
    
    // Apply dark mode to every nav found
    navs.forEach(nav => nav.classList.toggle("dark-mode"));
    containers.forEach(el => el.classList.toggle("dark-mode"));

    localStorage.setItem("theme", body.classList.contains("dark-mode") ? "dark" : "light");
};

document.addEventListener("DOMContentLoaded", () => {
    // Apply saved theme
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
        document.querySelectorAll("nav").forEach(nav => nav.classList.add("dark-mode"));
        document.querySelectorAll(".container, .login-container, .taskCreate, .taskDisplay, .taskManager")
                .forEach(el => el.classList.add("dark-mode"));
    }

    // --- MOBILE MENU LOGIC ---
    const dropBtn = document.querySelector(".dropbtn");
    const dropContent = document.querySelector(".dropdown-content");

    if (dropBtn && dropContent) {
        dropBtn.addEventListener("click", (e) => {
            e.stopPropagation(); // Prevents the window click from firing immediately
            dropContent.classList.toggle("show");
        });

        // Close the menu if you click anywhere else
        window.addEventListener("click", () => {
            dropContent.classList.remove("show");
        });
    }
});