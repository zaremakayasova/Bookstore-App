import React from 'react';
import { connect } from 'react-redux';
import './add-book-button.styles.css';

import { toggleHidden } from '../../redux/books/books.actions';

const AddBookButton = ({ toggleButton }) => (
  <div className='add-book-button'>
    <button type='button' onClick={toggleButton}>Add New Book</button>
  </div>
);

const mapDispatchToProps = dispatch => ({
  toggleButton: () => dispatch(toggleHidden())
});

export default connect(null, mapDispatchToProps)(AddBookButton);