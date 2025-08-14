
document.addEventListener('DOMContentLoaded', function() {
    const accordionItems = document.querySelectorAll('.ps-item');
    
    accordionItems.forEach(item => {
        const header = item.querySelector('.ps-header');
        
        header.addEventListener('click', function() {
            // Toggle active class on clicked item
            item.classList.toggle('active');
            
            // Close other items
            accordionItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
        });
    });
});