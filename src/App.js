import React from 'react';
import './App.css';

import BooksList from './components/Books-List/books-list';
import PopUpButton from './components/Button-PopUp/button-popup';
import PopUpPage from './components/PopUp-Page/popUp-page';

const App = () => {


  return (
    <div className="App">
      <h1>Bookstore App</h1>
      <PopUpButton />
      <PopUpPage />
      <BooksList />
    </div>
  );
}

export default App;
