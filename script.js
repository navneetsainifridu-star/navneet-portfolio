// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", function (event) {
    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      event.preventDefault();

      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});

// Add active effect while scrolling
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 150;
    const sectionHeight = section.offsetHeight;

    if (
      window.scrollY >= sectionTop &&
      window.scrollY < sectionTop + sectionHeight
    ) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.style.color = "";

    if (link.getAttribute("href") === `#${currentSection}`) {
      link.style.color = "#62e6a5";
    }
  });
});