import React from 'react';
import './submit-button.styles.css';

const SubmitButton = ({ children }) => (
    <button className='submit-button' type='submit'>{children}</button>
);

export default SubmitButton;