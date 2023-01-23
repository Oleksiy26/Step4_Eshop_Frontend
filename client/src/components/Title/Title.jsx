import React from 'react'
import PropTypes from 'prop-types'
import './Title.scss'

const Title = ({ title, subtitle, showContent }) => {
  return (
    <>
      {title && (
        <div className='row mt-5 active'>
          <div className='col text-uppercase secondaryColor'>
            <h5> {title}</h5>
          </div>
        </div>
      )}
      {subtitle && (
        <div className='row my-5'>
          <div className='col'>
            <h2 className='fs-1'>{subtitle}</h2>
          </div>
        </div>
      )}
    </>
  )
}

Title.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
}

export default Title
