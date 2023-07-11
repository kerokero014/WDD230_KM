const toggleBtn = document.querySelector('.toggle_btn');
const toggleBTNIcon = document.querySelector('.toggle_btn i');
const dropdownMenu = document.querySelector('.dropdown_menu');

toggleBtn.onclick = function() {
  dropdownMenu.classList.toggle('open');
  
  const isOpen = dropdownMenu.classList.contains('open');
  
  toggleBTNIcon.classList = isOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars';
};
