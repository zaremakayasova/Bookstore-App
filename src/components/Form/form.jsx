import React from 'react';
import './form.styles.css';

const Form = ({ handleSubmit, children }) => (
    <form onSubmit={handleSubmit}>
        {children}
    </form>
);

export default Form;