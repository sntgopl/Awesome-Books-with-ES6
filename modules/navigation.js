import {
  list,
  addBook,
  contact,
  listPage,
  addPage,
  contactPage,
} from './selectors.js';

list.addEventListener('click', () => {
  listPage.style.display = 'flex';
  list.classList.add('active');
  addBook.classList.remove('active');
  contact.classList.remove('active');
  addPage.style.display = 'none';
  contactPage.style.display = 'none';
});

addBook.addEventListener('click', () => {
  addPage.style.display = 'flex';
  addBook.classList.add('active');
  list.classList.remove('active');
  contact.classList.remove('active');
  contactPage.style.display = 'none';
  listPage.style.display = 'none';
});

contact.addEventListener('click', () => {
  contactPage.style.display = 'flex';
  contact.classList.add('active');
  list.classList.remove('active');
  addBook.classList.remove('active');
  listPage.style.display = 'none';
  addPage.style.display = 'none';
});