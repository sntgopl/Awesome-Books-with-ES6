import {
  title,
  author,
  addButton,
  message,
  bookList,
} from './modules/selectors.js';

const Store = (books) => {
  localStorage.setItem('books', JSON.stringify(books));
};

const booksArray = JSON.parse(localStorage.getItem('books')) || [];

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  addBook() {
    booksArray.push(this);
  }

  static removeBooks(index) {
    booksArray.splice(index, 1);
  }
}
/* eslint-disable */
const removeUI = (index) => {
  Book.removeBooks(index);
  refreshList();
};

const refreshList = () => {
  Store(booksArray);
  bookList.innerHTML = booksArray
    .map((data, index) => `<li><div class="book-info"><p>"${data.title}"</p>by<p>${data.author}</p></div>
      <button onclick=removeUI(${index}) class="removeButton">Remove</button></li>`)
    .join('');
  const removeBtn = document.querySelectorAll('.removeButton');
  removeBtn.forEach((button, index) => button.addEventListener('click', () => {
    removeUI(index);
  }));
};

refreshList();

addButton.addEventListener('click', (e) => {
  e.preventDefault();
  if (title.value === '' && author.value === '') {
    return false;
  }
  const book = new Book(title.value, author.value);
  booksArray.push(book);
  refreshList();
  title.value = '';
  author.value = '';
  message.style.display = 'block';
  setTimeout(() => {
    message.style.display = 'none';
  }, 3000);
  return true;
});