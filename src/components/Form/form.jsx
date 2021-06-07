import React from 'react';
import './form.styles.css';

const Form = ({ handleSubmit, children }) => (
    <form className='book-form' onSubmit={handleSubmit}>
        <div className='book-popup'>{children}</div>
    </form>
);

export default Form;