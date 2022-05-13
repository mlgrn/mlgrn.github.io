gsap.from("#loader-area", { duration: 1, opacity: 0 });
gsap.from(".loader", { duration: 1, opacity: 0 });

//this function changes CSS opacity for content area to make it visible

function pageVisible() {
  const ele = document.getElementById("entire-page");
  ele.style.opacity = "1";
}

window.addEventListener("load", (event) => {
  pageVisible();

  //fades out loader
  gsap.to(".loader", { duration: 1, opacity: 0 });
  gsap.to("#loader-area", { duration: 1, opacity: 0 });
  gsap.to("#loader-area h3", { duration: 1, opacity: 0 });
});

// Nav Menu controls

const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".nav__link");

// this function toggles the nav-open class to the body
navToggle.addEventListener("click", () => {
  document.body.classList.toggle("nav-open");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("nav-open");
  });
});
