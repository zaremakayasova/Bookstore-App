import React, { useState } from 'react';
import { connect } from 'react-redux';
import './book.styles.css';

import { deleteBook, editBook } from '../../redux/books/books.actions';
import Form from '../Form/form';
import Input from '../Input/input';
import Button from '../Button/button';
import Select from '../Select/select';


const Book = ({ title, author, price, category, id, deleteBook, editBook }) => {
    const [bookDetails, setBookDetails] = useState({
        title: title,
        author: author,
        price: price,
        category: category
    });

    const [selected, setSelected] = useState(false);

    const handleChange = e => {
        e.stopPropagation();
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

    const handleEdit = () => {
        setSelected(!selected);
    };

    return (
        <div className='book'>
            <div className='book-title'>{title}</div>
            <div className='book-items'>{author}</div>
            <div className='book-items'>${price}</div>
            <div className='book-items'>{category}</div>
            <div className='book-buttons'>
                <Button handleClick={handleEdit}>Edit Book</Button>
                <Button handleClick={e => handleDelete(e, { title, author, price, category, id })} deleteBtn>Delete Book</Button>
            </div>

            {
                selected ? (
                    <Form handleSubmit={handleSubmit}>
                        <Input placeholder='Edit a book title' name='title' value={bookDetails.title} handleChange={handleChange} />
                        <Input placeholder='Edit a book author' name='author' value={bookDetails.author} handleChange={handleChange} />
                        <Input placeholder='Edit a book price' name='price' value={bookDetails.price} handleChange={handleChange} />
                        <Input placeholder='Edit a book category' name='category' value={bookDetails.category} handleChange={handleChange} />
                        <Input placeholder='Edit a book category' name='category' value={bookDetails.category} handleChange={handleChange} />
                        <button type='submit'>Edit Book</button>
                    </Form>
                ) : null
            }
        </div>
    )
};

const mapDispatchToProps = dispatch => ({
    deleteBook: book => dispatch(deleteBook(book)),
    editBook: book => dispatch(editBook(book))
});

export default connect(null,
    mapDispatchToProps)(Book);
