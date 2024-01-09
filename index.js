"use strict";

const menuBar = document.querySelector("#menu-bar");
const navbar = document.querySelector(".navbar");
const headingEl = document.querySelector(".heading");
const homeEl = document.querySelector(".home");

menuBar.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

window.addEventListener("scroll", () => {
  navbar.classList.remove("active");
});

//* this is animation library called anime
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

//* smoth scrolling
document.querySelector(".heading").addEventListener("click", (e) => {
  e.preventDefault();
  const id = e.target.getAttribute("href");
  document.querySelector(id).scrollIntoView({ behavior: "smooth" });
});

//*nav-sticky
const callBack = (entries) => {
  const [entry] = entries;
  !entry.isIntersecting
    ? headingEl.classList.add("sticky")
    : headingEl.classList.remove("sticky");
};

const option = {
  root: null,
  threshold: 0,
  rootMargin: "-120px",
};
const observer = new IntersectionObserver(callBack, option);

observer.observe(homeEl);
