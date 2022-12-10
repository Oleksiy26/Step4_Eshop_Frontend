import React from 'react';
import PropTypes from 'prop-types';

const MyInput = ({ value, changeValue, placeholder }) => {
    return (
        <div>
            <input
               type='text'
               placeholder={placeholder}
               value={value}
               onChange={changeValue}
            />
        </div>
    );
};

MyInput.propTypes = {
    value: PropTypes.string.isRequired,
    changeValue: PropTypes.func.isRequired,
}

export default MyInput;