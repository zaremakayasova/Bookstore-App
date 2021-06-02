import React, { useState } from 'react';
import './add-book-popup.styles.css';

import { connect } from 'react-redux';

import { addNewBook } from '../../redux/books/books.actions';

import Form from '../Form/form';
import Input from '../Input/input';

const AddBookPopup = ({ hidden, addNewBook }) => {
    const [bookDetails, setBookDetails] = useState({
        title: '',
        author: '',
        price: '',
        category: ''
    });

    const { title, author, price, category } = bookDetails;

    const handleChange = e => {
        const { name, value } = e.target;
        setBookDetails({ ...bookDetails, [name]: value });
    };

    const handleSubmit = e => {
        e.preventDefault();
        addNewBook({ title, author, price, category });
        setBookDetails({ title: '', author: '', price: '', category: '' });
    };

    return (
        <div className='add-book-popup'>
            {
                hidden ? null :
                    (
                        <Form handleSubmit={handleSubmit}>
                            <Input placeholder='Enter a book title' name='title' value={title} handleChange={handleChange} />
                            <Input placeholder='Enter a book author' name='author' value={author} handleChange={handleChange} />
                            <Input placeholder='Enter a book price' name='price' value={price} handleChange={handleChange} />
                            <Input placeholder='Enter a book category' name='category' value={category} handleChange={handleChange} />
                            <button type='submit'>Add Book</button>
                        </Form>
                    )
            }
        </div>
    )
};


const mapStateToProps = state => ({
    hidden: state.books.hidden
});

const mapDispatchToProps = dispatch => ({
    addNewBook: bookDetails => dispatch(addNewBook(bookDetails))
});


export default connect(mapStateToProps,
    mapDispatchToProps)
    (AddBookPopup);

