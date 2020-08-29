// add this to all pages (currently only home page)

const trigger = document.querySelector("#swipeTrigger");
const menuList = document.querySelector(".menu__list");
const menuToggle = document.querySelector(".menu__label");
const menuCheckbox = document.querySelector("#toggleMenu");

let touchStartX;
let touchmoveX;
let dragDist = null;

let menuOpen = false;
let menuWidth = menuList.offsetWidth;

const menuOpenDrag = 80;

menuList.style.transform = `translateX(${menuWidth + 32}px)`;

// Get and update window width

let windowWidth =
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;

window.onresize = () => {
  windowWidth =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  console.log(`windowWidth: ${windowWidth}`);

  menuWidth = menuList.offsetWidth;
};

// Menu toggle
menuToggle.addEventListener("click", () => {
  if (menuOpen) {
    menuOpen = false;
    menuCheckbox.checked = true;
    menuList.style.transform = `translateX(${menuWidth + 32}px)`;
  } else {
    menuOpen = true;
    menuCheckbox.checked = false;
    menuList.style.transform = `translateX(0)`;
  }
});

// Touch start
trigger.addEventListener(
  "touchstart",
  (e) => {
    const firstTouch = e.touches[0] || e.originalEvent.touches[0]; // browser API
    touchStartX = firstTouch.clientX;
  },
  false
);

// Dragging
trigger.addEventListener(
  "touchmove",
  (e) => {
    e.preventDefault();
    touchmoveX = e.changedTouches[0].clientX;

    dragDist = touchStartX - touchmoveX;

    if (dragDist > 0 && dragDist < menuOpenDrag) {
      menuOpen = false;
      menuCheckbox.checked = false;
      menuList.style.transform = `translateX(${menuWidth - dragDist + 32}px)`;
    }
  },
  false
);

// Swipe end
trigger.addEventListener("touchend", (e) => {
  console.log("touch end");
  console.log(e);
  if (dragDist < menuOpenDrag) {
    // close menu
    menuOpen = false;
    menuCheckbox.checked = false;
    menuList.style.transform = `translateX(${menuWidth + 32}px)`;
  } else {
    // open menu
    menuOpen = true;
    menuCheckbox.checked = true;
    menuList.style.transform = `translateX(0)`;
  }
});
