const hamburger = document.querySelector('.hamburger-menu');
const navIcons = document.querySelector('.nav-icons');

hamburger.addEventListener('click', () => {
    navIcons.classList.toggle('active');
});


let menu = document.querySelector(".menu");
let list = document.querySelector("#list");
const bars = document.querySelector(".fa-bars");

menu.addEventListener("click", () => {
    list.classList.toggle("navlist-active");
    bars.classList.toggle("fa-xmark");
});