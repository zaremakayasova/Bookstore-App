import { BooksActionTypes } from './books.types';

export const toggleHidden = () => ({
    type: BooksActionTypes.TOGGLE_POPUP_HIDDEN
});

export const toggleExpanded = () => ({
    type: BooksActionTypes.TOGGLE_POPUP_EXPANDED
});

export const addNewBook = ({ title, author, price, category }) => ({
    type: BooksActionTypes.ADD_NEW_BOOK,
    payload: { title, author, price, category }
});

export const editBook = ({ title, author, price, category }) => ({
    type: BooksActionTypes.EDIT_BOOK,
    payload: { title, author, price, category }
});

export const deleteBook = book => ({
    type: BooksActionTypes.DELETE_BOOK,
    payload: book
});