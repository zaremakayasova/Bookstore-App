import React from 'react';
import './App.css';

import BooksList from './components/Books-List/books-list';
import AddBookButton from './components/Add-Book-Button/add-book-button';
import AddBookPopup from './components/Add-Book-Popup/add-book-popup';

import { ImBooks } from "react-icons/im";

const App = () => {


  return (
    <div className='App'>
      <div className='header'>
        <h1>
          <ImBooks color='red' size='1.3em' />
          Bookstore App
          </h1>
      </div>
      <AddBookButton />
      <AddBookPopup />
      <BooksList />
    </div>
  );
}

export default App;
