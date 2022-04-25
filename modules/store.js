import Book from './book.js';

export default class Store {
  static #idKey = 'idKey';

  static #booksKey = 'books';

  static getBooks = () => {
    const booksString = localStorage.getItem(Store.#booksKey);
    const bookList = JSON.parse(booksString || '[]');
    return bookList.map((book) => new Book(book.id, book.title, book.author));
  }

  static setBooks = (books) => localStorage.setItem(Store.#booksKey, JSON.stringify(books));

  static nextId = () => {
    const id = parseInt(localStorage.getItem(Store.#idKey) || '0', 10) + 1;
    localStorage.setItem(Store.#idKey, id);
    return id.toString();
  }
}