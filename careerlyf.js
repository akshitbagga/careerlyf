// Simple demo behaviour for the hero search bar.
// You can replace this later with actual routing / filtering logic.

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("heroSearchForm");
  const input = document.getElementById("searchInput");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const query = input.value.trim();

    if (!query) {
      alert("Please enter a test or course name to search.");
      return;
    }

    // Placeholder behaviour:
    // In the future, redirect to a search results page or filter tests.
    alert(`You searched for: "${query}" (hook this to your search logic).`);
  });
});



// Accordion toggle for NIFT page (safe to include globally)
document.addEventListener("DOMContentLoaded", () => {
  const accButtons = document.querySelectorAll(".accordion-btn");

  accButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const content = btn.nextElementSibling;
      const isOpen = content.classList.contains("open");

      // close all
      document.querySelectorAll(".accordion-content").forEach((c) => c.classList.remove("open"));
      document.querySelectorAll(".accordion-btn").forEach((b) => b.setAttribute("aria-expanded", "false"));
      document.querySelectorAll(".acc-icon").forEach((i) => (i.textContent = "+"));

      // open current if it was closed
      if (!isOpen) {
        content.classList.add("open");
        btn.setAttribute("aria-expanded", "true");
        const icon = btn.querySelector(".acc-icon");
        if (icon) icon.textContent = "−";
      }
    });
  });
});
