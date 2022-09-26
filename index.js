import {
  addButton, list, addBook, contact, listPage,
  addPage, contactPage, title, author, message,
} from './modules/selectors.js';
import {
  refreshList, newbook,
} from './modules/functions.js';

// load screen
refreshList();

// Add book to list
addButton.addEventListener('click', (e) => {
  e.preventDefault();
  if (title.value === '' && author.value === '') return false;
  newbook(title.value, author.value);
  refreshList();
  title.value = '';
  author.value = '';
  message.style.display = 'block';
  setTimeout(() => {
    message.style.display = 'none';
  }, 3000);
  return true;
});

// navigation Events for nav-bar
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