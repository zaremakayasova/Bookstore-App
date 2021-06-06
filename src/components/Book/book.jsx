import React, { useState } from 'react';
import { connect } from 'react-redux';
import './book.styles.css';

import { deleteBook, editBook } from '../../redux/books/books.actions';
import Form from '../Form/form';
import Input from '../Input/input';
import Button from '../Button/button';

import { IoIosClose } from "react-icons/io";

// const Book = ({ title, author, price, category, id, deleteBook, editBook }) => {
//     const [bookDetails, setBookDetails] = useState({
//         title: title,
//         author: author,
//         price: price,
//         category: category
//     });

//     const [selected, setSelected] = useState(false);

//     const handleCloseClick = () => {
//         setSelected(!selected);
//     };

//     const handleChange = e => {
//         const { name, value } = e.target;
//         setBookDetails({ ...bookDetails, [name]: value });
//     };

//     const handleEdit = () => {
//         setSelected(!selected);
//     };

//     const handleSubmit = e => {
//         e.preventDefault();
//         bookDetails.id = uuidv4();
//         const { id, title, author, price, category } = bookDetails;
//         editBook({ title, author, price, category, id }, bookDetails);
//     };

//     const handleDelete = book => {
//         if (window.confirm('Are you sure you wish to delete this book?')) deleteBook(book);
//     };

//     return (
//         <div className='book'>
//             <div className='book-title'>{title}</div>
//             <div className='book-items'>{author}</div>
//             <div className='book-items'>${price}</div>
//             <div className='book-items'>{category}</div>
//             <div className='book-buttons'>
//                 <Button handleClick={handleEdit}>Edit Book</Button>
//                 <Button handleClick={() => handleDelete({ title, author, price, category, id })} deleteBtn>Delete Book</Button>
//             </div>

//             {
//                 selected ? (
//                     <Form handleSubmit={handleSubmit}>
//                         <Input placeholder='Edit a book title' name='title' value={bookDetails.title} handleChange={handleChange} />
//                         <IoIosClose size='1.5em' onClick={handleCloseClick} />
//                         <Input placeholder='Edit a book author' name='author' value={bookDetails.author} handleChange={handleChange} />
//                         <Input placeholder='Edit a book price' name='price' value={bookDetails.price} handleChange={handleChange} />
//                         <Input placeholder='Edit a book category' name='category' value={bookDetails.category} handleChange={handleChange} />
//                         <button type='submit'>Edit Book</button>
//                     </Form>
//                 ) : null
//             }
//         </div>
//     )
// };



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

    const handleCloseClick = () => {
        setSelected(!selected);
    };

    const handleChange = e => {
        const { name, value } = e.target;
        setBookDetails({ ...bookDetails, [name]: value });
    };

    const handleEdit = () => {
        setSelected(!selected);
    };

    const handleSubmit = e => {
        e.preventDefault();
        editBook(book, bookDetails);
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
                <Button handleClick={handleEdit}>Edit Book</Button>
                <Button handleClick={() => handleDelete({ title, author, price, category, id })} deleteBtn>Delete Book</Button>
            </div>

            {
                selected ? (
                    <Form handleSubmit={handleSubmit}>
                        <Input placeholder='Edit a book title' name='title' value={bookDetails.title} handleChange={handleChange} />
                        <IoIosClose size='1.5em' onClick={handleCloseClick} />
                        <Input placeholder='Edit a book author' name='author' value={bookDetails.author} handleChange={handleChange} />
                        <Input placeholder='Edit a book price' name='price' value={bookDetails.price} handleChange={handleChange} />
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
    editBook: (oldBook, editedBook) => dispatch(editBook(oldBook, editedBook))
});

export default connect(null,
    mapDispatchToProps)(Book);
