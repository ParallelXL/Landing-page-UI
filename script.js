"use strict";

const navMobile = document.querySelector(".nav-mobile");
const menuIcon = document.querySelector(".menu");

menuIcon.addEventListener("click", (e) => {
  e.preventDefault();
  navMobile.classList.toggle("active");
  menuIcon.classList.toggle("active");
});

const switchBtn = document.querySelector(".switch");
const toggler = document.getElementById("toggler");
let darkMode = 0;

switchBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
