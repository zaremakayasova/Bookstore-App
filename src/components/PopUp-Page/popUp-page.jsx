import React, { useState } from 'react';
import './popUp-page.styles.css';

import { connect } from 'react-redux';

import { addNewBook } from '../../redux/books/books.actions';

const PopUpPage = ({ hidden, addNewBook }) => {
    const [bookDetails, setBookDetails] = useState({
        name: '',
        author: '',
        price: '',
        category: ''
    });

    const { name, author, price, category } = bookDetails;

    const handleChange = e => {
        const { name, value } = e.target;
        setBookDetails({ ...bookDetails, [name]: value });
    };

    const handleSubmit = e => {
        e.preventDefault();
        addNewBook({ name, author, price, category });
        setBookDetails({ name: '', author: '', price: '', category: '' });
    };

    return (
        <div className='popup-page'>
            {
                hidden ? null :
                    (
                        <form onSubmit={handleSubmit}>
                            <input placeholder='Enter a book name' name='name' type='text' value={name} onChange={handleChange} required />
                            <input placeholder='Enter a book author' name='author' type='text' value={author} id={name} onChange={handleChange} required />
                            <input placeholder='Enter a book price' name='price' type='text' value={price} id={name} onChange={handleChange} required />
                            <input placeholder='Enter a book category' name='category' type='text' value={category} id={name} onChange={handleChange} required />
                            <button type='submit'>Add Book</button>
                        </form>
                    )
            }
        </div>
    )
}

const mapStateToProps = state => ({
    hidden: state.books.hidden
});

const mapDispatchToProps = dispatch => ({
    addNewBook: bookDetails => dispatch(addNewBook(bookDetails))
});


export default connect(mapStateToProps,
    mapDispatchToProps)
    (PopUpPage);

