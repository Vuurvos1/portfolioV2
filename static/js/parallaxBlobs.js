const blob1 = document.querySelector(".svg1");
const blob2 = document.querySelector(".svg2");
const blob3 = document.querySelector(".svg3");
const blob4 = document.querySelector(".svg4");

let value = 0;

window.addEventListener("scroll", () => {
  value = window.scrollY;

  blob1.style.transform = `translateY(${value * 0.45}px)`;
  blob2.style.transform = `translateY(${value * 0.4}px)`;
  blob3.style.transform = `translateY(${Math.min(
    (value - 200) * 0.1 - 25,
    120
  )}px)`;
  blob4.style.transform = `translateY(${Math.min(
    (value - 700) * 0.15 - 100,
    125
  )}px)`;
});
