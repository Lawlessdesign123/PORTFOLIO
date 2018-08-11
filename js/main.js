// Select DOM Items
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item");

// Set initial state of the menu
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);
function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    navItems.forEach(item => item.classList.add("show"));

    // Set Menu state
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    navItems.forEach(item => item.classList.remove("show"));

    // Set Menu state
    showMenu = false;
  }
}

const blur = document.querySelector(".text-secondary");

function blub() {
  blur.classList.add("bob");
}

function reBlub() {
  blur.classList.remove("bob");
}

function reVeal() {
  document.getElementById("work").style.display = "block";
  document.getElementById("sales").style.display = "block";
  document.getElementById("account").style.display = "none";
  document.getElementById("design").style.display = "none";
}

function reVeal2() {
  document.getElementById("work").style.display = "block";
  document.getElementById("sales").style.display = "none";
  document.getElementById("account").style.display = "block";
  document.getElementById("design").style.display = "none";
}

function reVeal3() {
  document.getElementById("work").style.display = "block";
  document.getElementById("sales").style.display = "none";
  document.getElementById("account").style.display = "none";
  document.getElementById("design").style.display = "block";
}

const light1 = document.querySelector(".job-1");
const light2 = document.querySelector(".job-2");
const light3 = document.querySelector(".job-3");

function lit() {
  light1.classList.remove("pulsate");
  light1.classList.add("lighten1");
  light2.classList.remove("lighten1");
  light3.classList.remove("lighten1");
}

function lit2() {
  light1.classList.remove("pulsate");
  light1.classList.remove("lighten1");
  light2.classList.add("lighten1");
  light3.classList.remove("lighten1");
}

function lit3() {
  light1.classList.remove("pulsate");
  light1.classList.remove("lighten1");
  light2.classList.remove("lighten1");
  light3.classList.add("lighten1");
}
