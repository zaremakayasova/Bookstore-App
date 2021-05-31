import React from 'react';
import './book.styles.css';

const Book = ({ name, author, price, category }) => (
    <div className='book'>
        <h1>{name}</h1>
        <p>{author}</p>
        <p>{price}</p>
        <p>{category}</p>
    </div>
);

export default Book;