const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.textContent = isOpen ? "×" : "☰";
});

navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "☰";
    });
});

const messages = [
    "Small steps still move you forward.",
    "Start where you are. Use what you have.",
    "Your pace is allowed to be your own.",
    "Progress over perfection — every time."
];

let messageIndex = 0;

const inspireButton = document.getElementById("inspireButton");
const inspirationMessage = document.getElementById("inspirationMessage");

inspireButton.addEventListener("click", () => {
    messageIndex = (messageIndex + 1) % messages.length;

    inspirationMessage.textContent = messages[messageIndex];
});