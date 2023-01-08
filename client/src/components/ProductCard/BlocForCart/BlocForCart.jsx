import React from 'react'
import { ReactComponent as Delete } from '../svg/delete.svg'
import { ReactComponent as Add } from '../svg/add.svg'
import { useSelector } from 'react-redux'

const BlockForCart = ({ clickDelete, clickAdd, quantity }) => {
  const locationCart = useSelector(state => state.location.locationCart)

  return (
    <div className='quantity'>
      {locationCart ? <Delete onClick={clickDelete} /> : null}
      <span>{quantity}</span>
      {locationCart ? <Add onClick={clickAdd} /> : null}
    </div>
  )
}

export default BlockForCart
