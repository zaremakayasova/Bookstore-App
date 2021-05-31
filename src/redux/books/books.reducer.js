// import { BooksActionTypes } from './books.types';
import BOOKS_DATA from './books.data';

const INITIAL_STATE = {
    books: BOOKS_DATA
};

const booksReducer = (state = INITIAL_STATE, action) => {

  switch (action.type) {
    // case BooksActionTypes.FETCH_BOOKS_LIST:
    //   return {
    //     ...state,
    //     currentUser: action.payload
    //   };
    default:
      return state;
  }
};

export default booksReducer;