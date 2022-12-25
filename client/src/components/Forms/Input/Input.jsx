import React from 'react'
import PropTypes from 'prop-types'
import styles from './Input.module.scss'

const Input = ({ value, placeholder, name, id, field }) => {
  return (
    <input
      className={styles.input}
      type="text"
      name={name}
      placeholder={placeholder}
      defaultValue={value}
      id={id}
      onChange={field.onChange}
      onBlur={field.onBlur}
    />
  )
}

Input.defaultProps = {
  placeholder: 'placeholder',
}

Input.propTypes = {
  value: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  field: PropTypes.object,
}

export default Input
