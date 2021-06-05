import React from 'react';
import './books-list.styles.css';

import Book from '../Book/book';

import { connect } from 'react-redux';

const BooksList = ({ books, filterCategory }) => {
    const filteredBooks = books.filter(book => (
        book.category === filterCategory
    ));

    return (
        <div className='books-list'>
            {
                filterCategory === 'All' ? books.map(({ id, ...otherBooksProps }) => (
                    <Book key={id} id={id} {...otherBooksProps} />
                )) : filteredBooks.map(({ id, ...otherBooksProps }) => (
                    <Book key={id} id={id} {...otherBooksProps} />
                ))
            }
        </div>
    )
};

const mapStateToProps = state => ({
    books: state.books.books,
    filterCategory: state.books.filterCategory
});

export default connect(mapStateToProps)(BooksList);