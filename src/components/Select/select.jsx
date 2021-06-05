import React from 'react';
import './select.styles.css';

const Select = ({ categories, handleChange}) => (
    <select className='select-category' name='category' onChange={handleChange}>
        {
            categories.map(category => (
                <option className='select-option' key={category} value={category}>
                    {category}
                </option>
            ))
        }
    </select>
);

export default Select;