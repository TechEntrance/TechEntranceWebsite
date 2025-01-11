   // TOGGLER
 // JavaScript for menu toggle
  document.getElementById('menuToggle').addEventListener('click', function () {
    const menuItems = document.getElementById('menuItems');
    // Toggle the 'show' class on menu items to show or hide the menu
    menuItems.classList.toggle('show');
  });