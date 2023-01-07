import React from 'react'
import './Pagination.scss'

const Pagination = () => {
  const pages = [1, 2, 3, 4, 5]
  return (
    <div className='pages'>
      {pages.map((page, index) => (
        <span key={index} className='page'>
          {page}
        </span>
      ))}
    </div>
  )
}
export default Pagination
