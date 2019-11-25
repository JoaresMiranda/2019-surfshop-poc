// Get Elements
const menuContainer = document.querySelector('.header__group__links');
const searchContainer = document.querySelector('.header__search__container');

// Function to toggleClass
const toggleOpen = element => element.classList.toggle('is-open');

// Menu open/close
const menuToggle = () => toggleOpen(menuContainer);

// Search open/close
const searchToggle = () => toggleOpen(searchContainer);