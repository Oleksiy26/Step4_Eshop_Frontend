import React from 'react';
import PropTypes from 'prop-types';

const MyInput = ({ value, changeValue, placeholder, name }) => {
    return (
        <div>
            <input
               type='text'
               name={name}
               placeholder={placeholder}
               defaultValue={value}
               onChange={changeValue}
            />
        </div>
    );
};

MyInput.propTypes = {
    value: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    changeValue: PropTypes.func.isRequired,
    placeholder: PropTypes.string.isRequired,
}

export default MyInput;