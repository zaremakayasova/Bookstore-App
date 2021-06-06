import React from 'react';
import './App.css';

import { connect } from 'react-redux';

import { toggleAddPopUp } from './redux/books/books.actions';

import BooksList from './components/Books-List/books-list';
import Button from './components/Button/button';
import AddBookPopup from './components/Add-Book-Popup/add-book-popup';
import Filter from './components/Filter/filter';

import { ImBooks } from "react-icons/im";

const App = ({ toggleAddPopUp }) => (
  <div className='App'>
    <div className='header'>
      <h1>
        <ImBooks color='white' size='1.3em' />
          Bookstore App
          </h1>
      <Button handleClick={toggleAddPopUp} addBtn>Add New Book</Button>
      <Filter />
    </div>
    <AddBookPopup />
    <BooksList />
  </div>
);

const mapDispatchToProps = dispatch => ({
  toggleAddPopUp: () => dispatch(toggleAddPopUp())
});

export default connect(null, mapDispatchToProps)(App);
