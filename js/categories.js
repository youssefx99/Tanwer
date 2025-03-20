// This script handles loading categories from JSON and setting up navigation

document.addEventListener('DOMContentLoaded', function() {
    // Load categories from JSON file
    fetch('../Data/categories.json')
      .then(response => response.json())
      .then(data => {
        // You can use the data to populate additional information if needed
        console.log('Categories loaded:', data);
        
        // Example: You could dynamically update the card text or add icons
        if (data && data.categories) {
          data.categories.forEach(category => {
            const categoryElement = document.querySelector(`.${category.id}`);
            if (categoryElement) {
              // Add icons or additional information if needed
              // categoryElement.innerHTML = `<i class="${category.icon}"></i> ${category.name}`;
            }
          });
        }
      })
      .catch(error => {
        console.error('Error loading categories:', error);
      });
  
    // Add click event listeners to each category card
    const categoryCards = document.querySelectorAll('.card');
    categoryCards.forEach(card => {
      card.addEventListener('click', function(e) {
        // This is optional if you want to do something before navigation
        // Get the category from the class list
        const classList = card.classList;
        let category = '';
        
        if (classList.contains('math')) category = 'math';
        else if (classList.contains('programming')) category = 'programming';
        else if (classList.contains('language')) category = 'language';
        else if (classList.contains('science')) category = 'science';
        
        // You could store the selected category in localStorage if needed
        localStorage.setItem('selectedCategory', category);
        
        // Navigation is already handled by the href attribute
      });
    });
  });