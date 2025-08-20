document.addEventListener('DOMContentLoaded', function() {
    const accordionItems = document.querySelectorAll('.ps-item');
    
    accordionItems.forEach(item => {
        const header = item.querySelector('.ps-header');
        
        header.addEventListener('click', function() {
            item.classList.toggle('active');
            
            accordionItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
        });
    }); 
});


