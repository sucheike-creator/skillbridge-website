/* =====================================
   SKILLBRIDGE — WEBSITE INTERACTIONS
===================================== */

// MOBILE NAVIGATION
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

// Open and close the mobile menu
if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");

    const isOpen = navMenu.classList.contains("active");

    menuToggle.setAttribute("aria-expanded", isOpen);

    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Close navigation menu" : "Open navigation menu",
    );
  });
}

// CLOSE MENU WHEN A NAVIGATION LINK IS CLICKED
if (navMenu) {
  const navLinks = navMenu.querySelectorAll("a");

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");

      if (menuToggle) {
        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.setAttribute("aria-label", "Open navigation menu");
      }
    });
  });
}

// AUTOMATIC FOOTER YEAR
const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}
