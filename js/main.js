// Создаем переменную, в которую положим кнопку Меню
let menuToggle = document.querySelector('#menu-toggle');
// Создаем переменную, в которую положим Меню
let menu = document.querySelector('.sidebar');
// Отслеживаем клик по кнопке Меню и запускаем функцию
menuToggle.addEventListener('click', function (event) {
  // Отменяем стандартное поведение ссылки
  event.preventDefault();
  // Вешаем класс но меню, когда кликнули по кнопке
  menu.classList.toggle('visible');
})