let bars = document.getElementById("bars"),
    menu = document.getElementById("menu");

bars.addEventListener("click", () => {
    menu.classList.toggle("hidden");
})