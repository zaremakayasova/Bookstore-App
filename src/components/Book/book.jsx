import React from 'react';
import { connect } from 'react-redux';
import './book.styles.css';

import { deleteBook } from '../../redux/books/books.actions';

const Book = ({ name, author, price, category, id, deleteBook }) => (
    <div className='book'>
        <h1>{name}</h1>
        <p>{author}</p>
        <p>${price}</p>
        <p>{category}</p>
        <button type='button' onClick={() => deleteBook({ name, author, price, category, id })}>Delete Book</button>
    </div>
);

const mapDispatchToProps = dispatch => ({
    deleteBook: book => dispatch(deleteBook(book))
});

export default connect(null, mapDispatchToProps)(Book);