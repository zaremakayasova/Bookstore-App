import React from 'react';
import './App.css';

import BooksList from './components/Books-List/books-list';

const App = () => {


  return (
    <div className="App">
      <h1>Bookstore App</h1>
      <button className='add-button' type='button'>Add New Book</button>
      <BooksList />
    </div>
  );
}

export default App;
