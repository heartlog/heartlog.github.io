// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function() {
  // Get the dark mode toggle button
  var darkModeToggle = document.getElementById('darkModeToggle');

  // Check if dark mode preference is saved in localStorage
  var isDarkMode = localStorage.getItem('darkMode');
  if (isDarkMode) {
    document.body.classList.add('dark-mode');
  }

  // Add click event listener to the toggle button
  darkModeToggle.addEventListener('click', function() {
    // Toggle the dark mode class on the body element
    document.body.classList.toggle('dark-mode');

    // Update the dark mode preference in localStorage
    if (document.body.classList.contains('dark-mode')) {
      localStorage.setItem('darkMode', true);
    } else {
      localStorage.removeItem('darkMode');
    }
  });
});
