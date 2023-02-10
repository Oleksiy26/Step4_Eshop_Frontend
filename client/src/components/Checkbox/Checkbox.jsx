import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

const Checkbox = ({
  id,
  label,
  colorSquare,
  classForSquare,
  onChangeCheckbox,
  isActive
}) => {
  // const [isChecked, setIsChecked] = useState(false)

  // useEffect(() => {
  //   setIsChecked(isActive)
  // }, [isActive])
  console.log('checkbox', isActive)
  return (
    <>
      <div className='form-check'>
        <input
          className='form-check-input'
          type='checkbox'
          value={label}
          id={id}
          checked={isActive}
          onChange={onChangeCheckbox}
        />
        <label className='form-check-label' htmlFor={id}>
          {colorSquare && (
            <div className={'color-square ' + classForSquare}></div>
          )}
          {label}
        </label>
      </div>
    </>
  )
}

Checkbox.propTypes = {
  label: PropTypes.string,
  colorSquare: PropTypes.bool,
  isActive: PropTypes.bool,
  id: PropTypes.string,
  classForSquare: PropTypes.string,
  onChangeCheckbox: PropTypes.func
}

export default Checkbox
