import React, { useState } from 'react';
import { connect } from 'react-redux';
import './book.styles.css';

import { deleteBook, editBook, toggleExpanded } from '../../redux/books/books.actions';
import Form from '../Form/form';
import Input from '../Input/input';


const Book = ({ title, author, price, category, id, deleteBook, editBook, expanded, toggleExpanded }) => {
    const [bookDetails, setBookDetails] = useState({
        title: title,
        author: author,
        price: price,
        category: category
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setBookDetails({ ...bookDetails, [name]: value });
    };

    const handleSubmit = e => {
        e.preventDefault();
        const { title, author, price, category } = bookDetails;
        editBook({ title, author, price, category });
    };

    const handleDelete = (e, book) => {
        e.stopPropagation();
        if (window.confirm('Are you sure you wish to delete this book?')) deleteBook(book);
    };

    return (
        <div className='book' onClick={toggleExpanded}>
            <div className='book-title'>{title}</div>
            <div className='book-items'>{author}</div>
            <div className='book-items'>${price}</div>
            <div className='book-items'>{category}</div>
            <button className='book-delete-button'
                type='button'
                onClick={e => handleDelete(e, { title, author, price, category, id })}
            >Delete Book
            </button>

            {
                expanded ? (
                    <div>
                        <Form handleSubmit={handleSubmit}>
                            <Input placeholder='Edit a book title' name='title' value={bookDetails.title} handleChange={handleChange} />
                            <Input placeholder='Edit a book author' name='author' value={bookDetails.author} handleChange={handleChange} />
                            <Input placeholder='Edit a book price' name='price' value={bookDetails.price} handleChange={handleChange} />
                            <Input placeholder='Edit a book category' name='category' value={bookDetails.category} handleChange={handleChange} />
                            <button type='submit'>Edit Book</button>
                        </Form>
                    </div>
                ) : null
            }
        </div>
    )
};

const mapStateToProps = state => ({
    expanded: state.books.expanded
});

const mapDispatchToProps = dispatch => ({
    deleteBook: book => dispatch(deleteBook(book)),
    toggleExpanded: () => dispatch(toggleExpanded()),
    editBook: book => dispatch(editBook(book))
});

export default connect(mapStateToProps,
    mapDispatchToProps)(Book);

