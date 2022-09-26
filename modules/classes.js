import { booksArray } from './data&storage.js';

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

export default Book;