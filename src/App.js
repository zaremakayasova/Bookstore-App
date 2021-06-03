import React from 'react';
import './App.css';

import { connect } from 'react-redux';

import { toggleHidden } from './redux/books/books.actions';

import BooksList from './components/Books-List/books-list';
import Button from './components/Button/button';
import AddBookPopup from './components/Add-Book-Popup/add-book-popup';

import { ImBooks } from "react-icons/im";

const App = ({ toggleButton }) => {


  return (
    <div className='App'>
      <div className='header'>
        <h1>
          <ImBooks color='white' size='1.3em' />
          Bookstore App
          </h1>
          <Button handleClick={toggleButton} addBtn>Add New Book</Button>
      </div>
      <AddBookPopup />
      <BooksList />
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  toggleButton: () => dispatch(toggleHidden())
});

export default connect(null, mapDispatchToProps)(App);
