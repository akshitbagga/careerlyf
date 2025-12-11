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
