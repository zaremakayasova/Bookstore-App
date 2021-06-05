import { BooksActionTypes } from './books.types';

export const toggleHidden = () => ({
    type: BooksActionTypes.TOGGLE_POPUP_HIDDEN
});

export const addNewBook = ({ id, title, author, price, category }) => ({
    type: BooksActionTypes.ADD_NEW_BOOK,
    payload: { id, title, author, price, category }
});

export const editBook = ({ title, author, price, category }) => ({
    type: BooksActionTypes.EDIT_BOOK,
    payload: { title, author, price, category }
});

export const deleteBook = book => ({
    type: BooksActionTypes.DELETE_BOOK,
    payload: book
});

export const changeFilter = category => ({
    type: BooksActionTypes.CHANGE_FILTER,
    payload: category
});

export const setInitialCategory = () => ({
    type: BooksActionTypes.SET_INITIAL_CATEGORY,
});