import React, { useState } from 'react';

import { v4 as uuidv4 } from 'uuid';
import { IoIosClose } from "react-icons/io";

import { connect } from 'react-redux';

import { toggleAddPopUp, addNewBook, setInitialCategory } from '../../redux/books/books.actions';

import Form from '../Form/form';
import Input from '../Input/input';
import Select from '../Select/select';
import SubmitButton from '../Submit-Button/submit-button';

const AddBookPopup = ({ hiddenAddPopUp, toggleAddPopUp, addNewBook, setInitialCategory }) => {
    const categories = ['Select Book Category', 'horror', 'history', 'biography', 'sci-fi', 'adventure', 'kids', 'other'];
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
        const book = {
            id: uuidv4(),
            title, author, price, category
        };
        addNewBook(book);
        setBookDetails({ title: '', author: '', price: '', category: '' });
        setInitialCategory();
        toggleAddPopUp();
    };

    const handleCloseClick = () => {
        toggleAddPopUp();
    };

    return (
        <div>
            {
                hiddenAddPopUp ? null :
                    (
                        <Form handleSubmit={handleSubmit}>
                            <IoIosClose size='2em' onClick={handleCloseClick} />
                            <Input placeholder='Enter a book title' name='title' value={title} handleChange={handleChange} />
                            <Input placeholder='Enter a book author' name='author' value={author} handleChange={handleChange} />
                            <Input placeholder='Enter a book price' name='price' value={price} handleChange={handleChange} />
                            <Select categories={categories} handleChange={handleChange} required />
                            <SubmitButton>Add Book</SubmitButton>
                        </Form>
                    )
            }
        </div>
    )
};

const mapStateToProps = state => ({
    hiddenAddPopUp: state.books.hiddenAddPopUp
});

const mapDispatchToProps = dispatch => ({
    addNewBook: newBook => dispatch(addNewBook(newBook)),
    toggleAddPopUp: () => dispatch(toggleAddPopUp()),
    setInitialCategory: () => dispatch(setInitialCategory())
});


export default connect(mapStateToProps,
    mapDispatchToProps)
    (AddBookPopup);

