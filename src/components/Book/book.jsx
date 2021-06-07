import React, { useState } from 'react';
import { connect } from 'react-redux';
import './book.styles.css';

import { deleteBook, editBook } from '../../redux/books/books.actions';
import Form from '../Form/form';
import Input from '../Input/input';
import Button from '../Button/button';
import SubmitButton from '../Submit-Button/submit-button';

import { IoIosClose } from "react-icons/io";

const Book = ({ book, deleteBook, editBook }) => {
    const { id, title, author, price, category } = book;
    const [bookDetails, setBookDetails] = useState({
        id: id,
        title: title,
        author: author,
        price: price,
        category: category
    });

    const [selected, setSelected] = useState(false);

    const handleClick = () => {
        setSelected(!selected);
    };

    const handleChange = e => {
        const { name, value } = e.target;
        setBookDetails({ ...bookDetails, [name]: value.toLowerCase() });
    };

    const handleEdit = e => {
        e.preventDefault();
        editBook(bookDetails);
        setSelected(!selected);
    };

    const handleDelete = book => {
        if (window.confirm('Are you sure you wish to delete this book?')) deleteBook(book);
    };

    return (
        <div className='book'>
            <div className='book-title'>{title}</div>
            <div className='book-items'>{author}</div>
            <div className='book-items'>${price}</div>
            <div className='book-items'>{category}</div>
            <div className='book-buttons'>
                <Button handleClick={handleClick}>Edit Book</Button>
                <Button handleClick={() => handleDelete({ title, author, price, category, id })} deleteBtn>Delete Book</Button>
            </div>

            {
                selected ? (
                    <Form handleSubmit={handleEdit}>
                        <IoIosClose size='2em' onClick={handleClick} />
                        <Input placeholder='Edit a book title' name='title' value={bookDetails.title} handleChange={handleChange} />
                        <Input placeholder='Edit a book author' name='author' value={bookDetails.author} handleChange={handleChange} />
                        <Input placeholder='Edit a book price' name='price' value={bookDetails.price} handleChange={handleChange} />
                        <Input placeholder='Edit a book category' name='category' value={bookDetails.category} handleChange={handleChange} />
                        <SubmitButton>Edit Book</SubmitButton>
                    </Form>
                ) : null
            }
        </div>
    )
};

const mapDispatchToProps = dispatch => ({
    deleteBook: bookToDelete => dispatch(deleteBook(bookToDelete)),
    editBook: editedBook => dispatch(editBook(editedBook))
});

export default connect(null,
    mapDispatchToProps)(Book);
