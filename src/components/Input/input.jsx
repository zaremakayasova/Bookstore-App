import React from 'react';
import './input.styles.css';

const Input = ({ placeholder, name, value, handleChange }) => (
    <input className='book-input' placeholder={placeholder} name={name} type='text' value={value} onChange={handleChange} required />
);

export default Input;