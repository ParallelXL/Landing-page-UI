"use strict";

const navMobile = document.querySelector(".nav-mobile");
const menuIcon = document.querySelector(".menu");

menuIcon.addEventListener("click", (e) => {
  e.preventDefault();
  navMobile.classList.toggle("active");
  menuIcon.classList.toggle("active");
});

const switchBtn = document.querySelector(".switch");
const moon = document.getElementById("moonIcon");
const sun = document.getElementById("sunIcon");
let darkMode = false;

switchBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  darkMode = 1 - darkMode;

  if (darkMode) {
    moon.style.display = "none";
    sun.style.display = "block";
  } else {
    moon.style.display = "block";
    sun.style.display = "none";
  }
});
