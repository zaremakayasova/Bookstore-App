import { BooksActionTypes } from './books.types';

export const toggleAddPopUp = () => ({
    type: BooksActionTypes.TOGGLE_ADD_POPUP
});

export const addNewBook = newBook => ({
    type: BooksActionTypes.ADD_NEW_BOOK,
    payload: newBook
});

export const editBook = editedBook => ({
    type: BooksActionTypes.EDIT_BOOK,
    payload: editedBook
});

export const deleteBook = bookToDelete => ({
    type: BooksActionTypes.DELETE_BOOK,
    payload: bookToDelete
});

export const changeFilter = category => ({
    type: BooksActionTypes.CHANGE_FILTER,
    payload: category
});

export const setInitialCategory = () => ({
    type: BooksActionTypes.SET_INITIAL_CATEGORY,
});


