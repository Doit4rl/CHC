const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

const modal = document.getElementById("contactModal");
const openButton = document.getElementById("contactButton");
const closeButton = document.getElementById("closeModal");

if (openButton && modal) {
  openButton.addEventListener("click", () => {
    modal.classList.add("open");
    closeButton?.focus();
  });
  closeButton?.addEventListener("click", () => modal.classList.remove("open"));
  modal.addEventListener("click", e => {
    if (e.target === modal) modal.classList.remove("open");
  });
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") modal.classList.remove("open");
  });
}

// Gentle parallax for the hero on pointer movement.
const hero = document.querySelector(".hero");
if (hero && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  hero.addEventListener("pointermove", e => {
    const x = (e.clientX / window.innerWidth - .5) * 10;
    const y = (e.clientY / window.innerHeight - .5) * 6;
    hero.querySelector(".hero-content").style.transform = `translate(${x}px, ${y}px)`;
  });
  hero.addEventListener("pointerleave", () => {
    hero.querySelector(".hero-content").style.transform = "";
  });
}