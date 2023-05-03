"use strict";

const menuBar = document.querySelector("#menu-bar");
const navbar = document.querySelector(".navbar");

//* animation load when page load
window.addEventListener("DOMContentLoaded", () => {
  anime({
    targets: `.logo`,
    translateX: [-250, 0],
    easing: "easeOutExpo",
    duration: 1000,
    delay: 1000,
    opacity: [0, 1],
  });
  anime({
    targets: `.navbar a`,
    translateY: [-50, 0],
    easing: "easeOutExpo",
    duration: 1500,
    delay: (el, i) => {
      return 1100 + 100 * i;
    },
    opacity: [0, 1],
  });
  anime({
    targets: `.home__text`,
    translateY: [0, -15],
    easing: "easeOutExpo",
    duration: 1300,
    delay: (el, i) => {
      return 1100 + 100 * i;
    },
    opacity: [0, 1],
  });
  anime({
    targets: `.home__img`,
    translateY: [0, 15],
    easing: "easeOutExpo",
    duration: 1300,
    delay: (el, i) => {
      return 1100 + 100 * i;
    },
    opacity: [0, 1],
  });
});

menuBar.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

window.addEventListener("scroll", () => {
  navbar.classList.remove("active");
});

//* smoth scrolling
