const navToggle = document.querySelector(".nav__toggle");
const navMenu = document.querySelector(".nav__menu");

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("menu__visible")
})
navMenu.addEventListener("click", () => {
    navMenu.classList.remove("menu__visible")
 })

