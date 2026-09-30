document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  document.querySelectorAll(".reveal").forEach((el, index) => {
    setTimeout(() => el.classList.add("visible"), 120 + index * 120);
  });

  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const data = new FormData(form);
      const name = data.get("name");
      const email = data.get("email");
      const subject = data.get("subject") || "SIGNY Website Enquiry";
      const message = data.get("message");
      const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
      window.location.href =
        `mailto:info@signyinternational.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    });
  }
});

// Rotate through the real product photographs for every category.
document.querySelectorAll(".category-slideshow").forEach((slideshow) => {
  const slides = slideshow.querySelectorAll(".category-slide");
  if (slides.length < 2) return;
  let index = 0;
  const interval = Number(slideshow.dataset.interval) || 3600;
  setInterval(() => {
    slides[index].classList.remove("active");
    index = (index + 1) % slides.length;
    slides[index].classList.add("active");
  }, interval);
});
