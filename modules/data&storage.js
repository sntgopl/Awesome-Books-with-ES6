const Store = (books) => {
  localStorage.setItem('books', JSON.stringify(books));
};

const booksArray = JSON.parse(localStorage.getItem('books')) || [];

export { Store, booksArray };