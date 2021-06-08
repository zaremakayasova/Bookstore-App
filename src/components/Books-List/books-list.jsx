import React from 'react';

import Book from '../Book/book';

import { connect } from 'react-redux';

const BooksList = ({ books, filterCategory }) => {
    const filteredBooks = books.books.filter(book => (
        book.category === filterCategory
    ));

    return (
        <div className='books-list'>
            {
                filterCategory === 'All' ? books.books.map(book => (
                    <Book key={book.id} book={book} />
                )) : filteredBooks.map(book => (
                    <Book key={book.id} book={book} />
                ))
            }
        </div>
    )
};

const mapStateToProps = state => ({
    books: state.books,
    filterCategory: state.books.filterCategory
});

export default connect(mapStateToProps)(BooksList);