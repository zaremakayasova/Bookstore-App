import { BooksActionTypes } from './books.types';
import BOOKS_DATA from './books.data';

const INITIAL_STATE = {
  books: BOOKS_DATA,
  hidden: true,
  filterCategory: 'All'
};

const booksReducer = (state = INITIAL_STATE, action) => {

  switch (action.type) {
    case BooksActionTypes.TOGGLE_POPUP_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };
    case BooksActionTypes.ADD_NEW_BOOK:
      return {
        ...state,
        books: [...state.books, action.payload]
      };
    case BooksActionTypes.DELETE_BOOK:
      return {
        ...state,
        books: state.books.filter(book => book.id !== action.payload.id)
      };
    // case BooksActionTypes.EDIT_BOOK:
    //   return {
    //     ...state,
    //     books: [...state.books, editBook(state.books,action.payload)]
    //   };
    case BooksActionTypes.CHANGE_FILTER:
      return {
        ...state,
        filterCategory: action.payload
      };
      case BooksActionTypes.SET_INITIAL_CATEGORY:
        return {
          ...state,
          filterCategory: 'All'
        };
    default:
      return state;
  }
};

export default booksReducer;