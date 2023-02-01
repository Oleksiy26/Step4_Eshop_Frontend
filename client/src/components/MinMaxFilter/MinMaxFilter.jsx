import React from 'react'
import PropTypes from 'prop-types'
import RangeSlider from 'react-range-slider-input'
import 'react-range-slider-input/dist/style.css'

import './MinMaxFilter.scss'

const MinMaxFilter = ({
  minPrice,
  maxPrice,
  onChange,
  onChangeInputMin,
  onChangeInputMax
}) => {
  return (
    <div className='price-wrapper'>
      <div className='price-input'>
        <input type='text' value={minPrice} onChange={onChangeInputMin} />
        <input type='text' value={maxPrice} onChange={onChangeInputMax} />
      </div>
      <RangeSlider
        min={0}
        max={100}
        step={5}
        defaultValue={[minPrice, maxPrice]}
        value={[minPrice, maxPrice]}
        onInput={onChange}
      />
    </div>
  )
}

MinMaxFilter.propTypes = {
  minPrice: PropTypes.number,
  maxPrice: PropTypes.number,
  onChange: PropTypes.func,
  onChangeInputMin: PropTypes.func,
  onChangeInputMax: PropTypes.func
}

export default MinMaxFilter
