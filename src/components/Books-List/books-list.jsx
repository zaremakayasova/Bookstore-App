import React from 'react';
import './books-list.styles.css';

import Book from '../Book/book';

import { connect } from 'react-redux';

const BooksList = ({ books }) => (
    <div className='books-list'>
        {books.books.map(({ id, ...otherBooksProps }) => (
            <Book key={id} {...otherBooksProps} />
        ))}
    </div>
);



const mapStateToProps = state => ({
    books: state.books
});

export default connect(mapStateToProps)(BooksList);