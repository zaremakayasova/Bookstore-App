import { BooksActionTypes } from './books.types';

export const togglePopupHidden = () => ({
    type: BooksActionTypes.TOGGLE_POPUP_HIDDEN
});

export const addNewBook = ({ name, author, price, category }) => ({
    type: BooksActionTypes.ADD_NEW_BOOK,
    payload: { name, author, price, category }
});

export const deleteBook = book => ({
    type: BooksActionTypes.DELETE_BOOK,
    payload: book
});