"use strict";

const navMobile = document.querySelector(".nav-mobile");
const menuIcon = document.querySelector(".bx-menu");

menuIcon.addEventListener("click", (e) => {
  e.preventDefault();
  navMobile.classList.toggle("active");
});
