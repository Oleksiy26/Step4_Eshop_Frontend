import React from 'react';
import PropTypes from 'prop-types';
import styles from "./Input.module.scss"

const Input = ({ value, placeholder, name, id, field }) => {
    return (
        <input
           className={styles.input}
           type='text'
           name={name}
           placeholder={placeholder}
           defaultValue={value}
           id={id}
           onChange={field.onChange}
           onBlur={field.onBlur}
        />
    );
};

Input.propTypes = {
    value: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
}

export default Input;