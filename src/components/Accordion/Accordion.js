const buttons = document.querySelectorAll(".faq-accordion");

buttons.forEach(button => {
    button.addEventListener("click", function() {
        const icon = this.querySelector("i"); // Find the icon within the button

        // Check if the icon is currently a down chevron
        const isChevronDown = icon.classList.contains("fa-chevron-down");

        // Toggle the icon class between down and up chevrons
        icon.classList.toggle("fa-chevron-down", !isChevronDown);
        icon.classList.toggle("fa-chevron-up", isChevronDown);

        // Toggle the background color based on the chevron state
        if (isChevronDown) {
            icon.style.backgroundColor = "#6366F1"; // Background color when chevron is up
        } else {
            icon.style.backgroundColor = ""; // Background color when chevron is down
        }

        // Optionally, toggle the active state for the button
        this.classList.toggle("active");
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const acc = document.querySelectorAll(".faq-accordion");
  
    acc.forEach(button => {
      button.addEventListener("click", function() {
        // Toggle active class on accordion
        this.classList.toggle("inactive");
  
        // Toggle the panel
        const panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
      });
    });
  });