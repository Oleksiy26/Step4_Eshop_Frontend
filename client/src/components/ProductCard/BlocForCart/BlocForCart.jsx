import React from 'react'
import { ReactComponent as Delete } from '../svg/delete.svg'
import { ReactComponent as Add } from '../svg/add.svg'

const BlockForCart = ({ clickDelete, clickAdd, quantity }) => {
  return (
    <div className='quantity'>
      <Delete onClick={clickDelete} />
      <span>{quantity}</span>
      <Add onClick={clickAdd} />
    </div>
  )
}

export default BlockForCart
