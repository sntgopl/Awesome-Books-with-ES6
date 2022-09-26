import { bookList } from './selectors.js';
import { Store, booksArray } from './data&storage.js';
import Book from './classes.js';

const refreshList = () => {
  Store(booksArray);
  bookList.innerHTML = booksArray
    .map((data) => `<li><div class="book-info"><p>"${data.title}"</p>by<p>${data.author}</p></div>
      <button class="removeButton">Remove</button></li>`)
    .join('');
  const removeBtn = document.querySelectorAll('.removeButton');
  removeBtn.forEach((button, index) => button.addEventListener('click', () => {
    // eslint-disable-next-line no-use-before-define
    removeUI(index);
  }));
};

/* eslint-disable */
const removeUI = (index) => {
  Book.removeBooks(index);
  refreshList();
};

const newbook = (title, author) => {
  const b = new Book(title, author);
  b.addBook();
  console.log(b);
};

export { refreshList, newbook, removeUI };