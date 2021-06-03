import React from 'react';
import './button.styles.css';

const Button = ({ handleClick, children, deleteBtn, addBtn }) => (
  <button className={
    `${deleteBtn ? 'delete-btn' : ''}
    ${addBtn ? 'add-btn' : ''}
    btn` }
    type='button'
    onClick={handleClick}>{children}</button>
);

export default Button;