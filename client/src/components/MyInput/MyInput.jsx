import React from 'react';
import PropTypes from 'prop-types';
import "./MyInput.scss"

const MyInput = ({ value, changeValue, placeholder, name }) => {
    return (
        <input
           className="my-input"
           type='text'
           name={name}
           placeholder={placeholder}
           defaultValue={value}
           onChange={changeValue}
        />
    );
};

MyInput.propTypes = {
    value: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    changeValue: PropTypes.func.isRequired,
    placeholder: PropTypes.string.isRequired,
}

export default MyInput;