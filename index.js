import UI from './modules/ui.js';

document.addEventListener('DOMContentLoaded', UI.displayBooks);

document.querySelector('#addButton').addEventListener('click', (event) => UI.addNewBook(event));

document.querySelector('.menuList').addEventListener('click', (event) => UI.showSection(event.target.id));

UI.displayDate();