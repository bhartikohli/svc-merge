// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", () => {
    const primaryBtn = document.querySelector(".primary-btn");
    const secondaryBtn = document.querySelector(".secondary-btn");

    // Event listener for the primary button
    primaryBtn.addEventListener("click", () => {
        alert("YOU'RE BEING REDIRECTED TO my github");
        window.location.href = "https://github.com/"; 
    });

    // Event listener for the secondary button
    secondaryBtn.addEventListener("click", () => {
        alert("YOU'RE BEING REDIRECTED TO the git repo");
        window.location.href = "https://github.com/Sarvesh223/svc"; 
    });

    // Responsive navbar functionality
    const navLinks = document.querySelector(".nav-links");
    const toggleNav = document.createElement("button");
    toggleNav.textContent = "☰";
    toggleNav.style.fontSize = "1.5rem";
    toggleNav.style.background = "none";
    toggleNav.style.border = "none";
    toggleNav.style.cursor = "pointer";
    toggleNav.style.display = "none";
    toggleNav.style.color = "var(--text-color)";
    document.querySelector("nav").prepend(toggleNav);

    // Show/hide nav links on smaller screens
    toggleNav.addEventListener("click", () => {
        navLinks.style.display = navLinks.style.display === "flex" ? "none" : "flex";
    });

    // Make the toggle button visible on smaller screens
    const resizeHandler = () => {
        if (window.innerWidth <= 768) {
            toggleNav.style.display = "block";
            navLinks.style.display = "none";
        } else {
            toggleNav.style.display = "none";
            navLinks.style.display = "flex";
        }
    };
    window.addEventListener("resize", resizeHandler);
    resizeHandler(); // Initialize
});
