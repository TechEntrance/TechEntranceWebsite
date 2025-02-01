 // Count animation functionality
        const counters = document.querySelectorAll('.counter');

        counters.forEach(counter => {
            const target = +counter.getAttribute('data-count');
            const numberElement = counter.querySelector('.number');
            const title = counter.querySelector('.title').textContent;

            let count = 0;
            const increment = Math.ceil(target / 100); // Increment step

            function updateCounter() {
                if (count < target) {
                    count += increment;
                    numberElement.textContent = count;
                    setTimeout(updateCounter, 20);
                } else {
                    // Handle specific suffixes for counters
                    if (title === 'HAPPY CLIENTS' || title === 'TECHNOLOGISTS') {
                        numberElement.textContent = count + '+';
                    } else if (title === 'COMPLETED PROJECTS') {
                        numberElement.textContent = toFixed(1) ; // Adding K for 'Clients'
                    } else {
                        numberElement.textContent = target; // For other counters, just set the target value
                    }
                }
            }

            updateCounter();
        });



    // TOGGLER
 // JavaScript for menu toggle
  document.getElementById('menuToggle').addEventListener('click', function () {
    const menuItems = document.getElementById('menuItems');
    // Toggle the 'show' class on menu items to show or hide the menu
    menuItems.classList.toggle('show');
  });
        