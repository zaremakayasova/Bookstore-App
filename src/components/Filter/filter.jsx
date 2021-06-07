import React from 'react';
import './filter.styles.css';

import { connect } from 'react-redux';

import { changeFilter } from '../../redux/books/books.actions';
import Select from '../Select/select';

const Filter = ({ changeFilter }) => {
    const categories = ['All', 'horror', 'history', 'biography', 'sci-fi', 'adventure', 'kids', 'other'];

    const handleChange = e => {
        const { value } = e.target;
        changeFilter(value);
    };
    return (
        <div className='filter'>
            <Select name='category' categories={categories} handleChange={handleChange} />
        </div>
    )
};

const mapDispatchToProps = dispatch => ({
    changeFilter: (category) => dispatch(changeFilter(category))
});

export default connect(null,
    mapDispatchToProps)(Filter);
