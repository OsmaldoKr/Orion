document.addEventListener('DOMContentLoaded', function() {
    const sortSelect = document.getElementById('sortSelect');
    const cards = document.querySelectorAll('.product');

    sortSelect.addEventListener('change', function() {
        const selectedCategory = sortSelect.value;
        filterCardsByCategory(selectedCategory);
    });

    function filterCardsByCategory(category) {
        cards.forEach(card => {
            const cardCategory = card.getAttribute('data-category');

            if (category === 'all' || category === cardCategory) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }
});
