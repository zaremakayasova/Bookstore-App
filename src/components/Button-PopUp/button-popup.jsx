import React from 'react';
import { connect } from 'react-redux';
import './button-popup.styles.css';

import { togglePopupHidden } from '../../redux/books/books.actions';

const PopUpButton = ({ toggleButton }) => (
  <div className='add-book-popup'>
    <button className='add-button' type='button' onClick={toggleButton}>Add New Book</button>
  </div>
);

const mapDispatchToProps = dispatch => ({
  toggleButton: () => dispatch(togglePopupHidden())
});

export default connect(null, mapDispatchToProps)(PopUpButton);