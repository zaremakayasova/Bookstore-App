import React from 'react';
import './books-list.styles.css';

import Book from '../Book/book';

import { connect } from 'react-redux';

const BooksList = ({ books, filterCategory }) => {
    const filteredBooks = books.filter(book => (
        book.category === filterCategory
    ));

    return (

        // {/* {
        //     filterCategory === 'All' ? books.map(({ id, ...otherBooksProps }) => (
        //         <Book key={id} id={id} {...otherBooksProps} />
        //     )) : filteredBooks.map(({ id, ...otherBooksProps }) => (
        //         <Book key={id} id={id} {...otherBooksProps} />
        //     ))
        // }  */}

        <div className='books-list'>
            {
                filterCategory === 'All' ? books.map(book => (
                    <Book key={book.id} book={book} />
                )) : filteredBooks.map(book => (
                    <Book key={book.id} book={book} />
                ))
            }
        </div>
    )
}


const mapStateToProps = state => ({
    books: state.books.books,
    filterCategory: state.books.filterCategory
});

export default connect(mapStateToProps)(BooksList);