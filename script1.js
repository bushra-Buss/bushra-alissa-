document.addEventListener('DOMContentLoaded', () => {
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
});
