
//MAIN PAGE STARTING SECTION AFTER HEADER 

window.onload = function() {
  let words = document.querySelectorAll('.word');
  let currentIndex = 0;

  function showNextWord() {
    // Hide the current word immediately by setting opacity to 0
    words.forEach((word, index) => {
      word.style.opacity = '0';
      word.style.transform = 'translateY(50px)';
    });

    // Show the next word
    words[currentIndex].style.opacity = '1';
    words[currentIndex].style.transform = 'translateY(0)';

    // Update the current word index
    currentIndex = (currentIndex + 1) % words.length;
  }

  setInterval(showNextWord, 3000); // Change the word every 3 seconds
  showNextWord(); // Initialize the first word immediately
};


// OUR SERVICE SECTION

   window.addEventListener('scroll', function () {
        const serviceContainers = document.querySelectorAll('.service-container');
        const windowHeight = window.innerHeight;

        serviceContainers.forEach((container) => {
            const containerTop = container.getBoundingClientRect().top;

            // Add 'visible' class when the container enters the viewport
            if (containerTop < windowHeight && containerTop > -container.offsetHeight) {
                container.classList.add('visible');
            } else {
                container.classList.remove('visible');
            }
        });
    });


   // TOGGLER
 // JavaScript for menu toggle
  document.getElementById('menuToggle').addEventListener('click', function () {
    const menuItems = document.getElementById('menuItems');
    // Toggle the 'show' class on menu items to show or hide the menu
    menuItems.classList.toggle('show');
  });
