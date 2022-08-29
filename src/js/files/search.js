//header search открывание/скрывание
const search = document.querySelector('.search');
const bodyClick = document.querySelector('body');
search.addEventListener('click', function (e) {
   e.stopPropagation();
   this.classList.add('active');
});
bodyClick.addEventListener('click', function () {
   search.classList.remove('active');
});