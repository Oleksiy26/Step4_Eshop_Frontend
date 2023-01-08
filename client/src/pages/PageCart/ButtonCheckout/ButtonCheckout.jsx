import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Button from '../../../components/Button/Button'

const ButtonCheckout = () => {
  const token = useSelector(state => state.auth.token)
  const navigate = useNavigate()
  const locationCheckout = useSelector(state => state.location.locationCheckout)

  const cleck = () => {
    console.log('ok')
  }

  const navigateInCart = () => {
    locationCheckout ? cleck() : navigate(token ? '/checkout' : '/login')
  }

  return (
    <Button
      onClick={navigateInCart}
      text={locationCheckout ? 'Make an order' : 'Proceed to checkout'}
    />
  )
}

export default ButtonCheckout
