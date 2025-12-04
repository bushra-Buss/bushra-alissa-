 const searchInput = document.getElementById('product-search');
  const filterButtons = document.querySelectorAll('.filter-btn');
  const items = document.querySelectorAll('.grid-item');

  function filterItems() {
    const searchText = searchInput.value.trim().toLowerCase();
    const activeCategory = document.querySelector('.filter-btn.active').dataset.category;

    items.forEach(item => {
      const name = item.dataset.name.toLowerCase();
      const category = item.dataset.category;

      const matchesSearch = name.includes(searchText);
      const matchesCategory = (activeCategory === 'all' || category === activeCategory);

      if (matchesSearch && matchesCategory) {
        item.style.display = '';
      } else {
        item.style.display = 'none';
      }
    });
  }

  searchInput.addEventListener('input', filterItems);

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      filterItems();
    });
  });


function showMessage() {
  // Retrieve input values
  
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const messageContent = document.getElementById('message').value;

  // Display the message container
  document.getElementById('messageContainer').classList.remove('hidden');

  // Set the message content
  const message = `Thanks for your interest, ${name}! We will get in touch with you as soon as possible.<br>
                    by Email: ${email}`;

  // Scroll to the top of the page
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Set the message content after scrolling to the top
  document.getElementById('messageContainer').innerHTML = message;

  // Prevent the default form submission
  event.preventDefault();
}

// open nav bar function
function openNavbar() {
  const navMenu = document.getElementById('nav-menu');
  navMenu.classList.toggle('active');
}
function openNavbar() {
  const navMenu = document.getElementById('nav-menu');
  navMenu.classList.toggle('active');
}
// script.js

// Function to toggle the search button visibility and position based on scroll
function toggleSearchButtonVisibility() {
  var searchButton = document.getElementById('searchButton');

  // Check the scroll position
  if (window.scrollY > 100) {
    searchButton.style.display = 'block';

    // Calculate the top position based on the scroll position
    var topPosition = window.scrollY - 150 + 'px';
    searchButton.style.top = topPosition;
  } else {
    searchButton.style.display = 'none';
  }
}

// Event listener to call the function on scroll
window.addEventListener('scroll', toggleSearchButtonVisibility);