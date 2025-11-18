// Menu Toggle Functionality
const menuToggle = document.getElementById("menu-toggle");
const navOverlay = document.getElementById("nav-overlay");
const menuIcon = menuToggle.querySelector(".material-symbols-outlined");

menuToggle.addEventListener("click", () => {
  const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";

  // Toggle aria-expanded attribute
  menuToggle.setAttribute("aria-expanded", !isExpanded);

  // Toggle navigation overlay visibility
  navOverlay.classList.toggle("active");

  // Toggle body overflow
  document.body.classList.toggle("overflow-hidden");

  // Change menu icon
  if (!isExpanded) {
    menuIcon.textContent = "close";
  } else {
    menuIcon.textContent = "menu";
  }
});

// Close menu when clicking navigation links
navOverlay.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menuToggle.setAttribute("aria-expanded", "false");
    navOverlay.classList.remove("active");
    document.body.classList.remove("overflow-hidden");
    menuIcon.textContent = "menu";
  });
});
