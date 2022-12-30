import React from 'react'
import { useSelector } from 'react-redux'

export const useForCart = () => {
  const products = useSelector(state => state.products)
  const cardInCart = useSelector(state => state.cart.cart)
  const cartCounter = useSelector(state => state.counter)
  const token = useSelector(state => state.auth.token)

  const totalPrice = () => {
    const totalPrice = 0

    if (token) {
      if (cardInCart) {
        const prices = cardInCart.products.map(item => {
          return item.product.currentPrice * item.cartQuantity
        })
        const calculatePrice = prices.reduce(
          (accumulator, currentValue) => accumulator + currentValue,
          totalPrice
        )
        return calculatePrice
      }
    } else {
      if (JSON.parse(localStorage.getItem('cart'))) {
        const itemsInCart = findItemsInCart()
        const prices = itemsInCart.map(item => {
          return item.currentPrice
        })
        const calculatePrice = prices.reduce(
          (accumulator, currentValue) => accumulator + currentValue,
          totalPrice
        )
        return calculatePrice
      }
    }
  }

  const findItemsInCart = () => {
    const itemsinCart = JSON.parse(localStorage.getItem('cart'))
    if (itemsinCart) {
      return products.products.filter(item => itemsinCart.includes(item._id))
    }
  }

  const localQuantity = value => {
    const itemsinCart = JSON.parse(localStorage.getItem('cart'))
    let counter = 0

    console.log(itemsinCart)

    for (let elem of itemsinCart) {
      if (elem == value) {
        counter++
      }
    }
    return counter
  }

  return { totalPrice, findItemsInCart, localQuantity }
}
