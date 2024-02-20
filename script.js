const navIcon = document.querySelector('.nav-icon');
const dropdownNav = document.querySelector('.dropdown-nav');

navIcon.addEventListener('click', function () {
  dropdownNav.classList.toggle('hidden');
});
