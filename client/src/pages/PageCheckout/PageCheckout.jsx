import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Order from '../../components/Forms/Order'
import Title from '../../components/Title'
import { useForCart } from '../../hooks/useForCart'
import { fetchMakeOrder } from '../../store/order/order'
import SectionOrder from '../PageCart/SectionOrder'
import styles from './PageCheckout.module.scss'
import Button from '../../components/Button'
import AlsoLike from '../../components/AlsoLike'
import ThanksForOrder from './ThanksForOrder'

const PageCheckout = () => {
  const cardInCart = useSelector(state => state.cart.cart)
  const { totalPrice } = useForCart()
  const dispatch = useDispatch()
  const secuessOrder = useSelector(state => state.order.status)
  const cartCounter = useSelector(state => state.counter)
  const [orderDone, setOrderDone] = useState(false)

  const createOrder = async value => {
    dispatch(fetchMakeOrder({ value, cardInCart }))
    if (secuessOrder === 'resolved') {
      setOrderDone(true)
    }
  }
  return (
    <>
      {orderDone ? (
        <ThanksForOrder />
      ) : cartCounter.inCart ? (
        <div className='container'>
          <Title subtitle='Checkout' />
          <div className={styles.checkout}>
            <div className={styles.checkout_block}>
              <Order createOrder={createOrder} />
            </div>
            <div className={styles.checkout_block}>
              <Title title='your order' />
              <SectionOrder
                items={cardInCart.products}
                totalPrice={totalPrice()}
                check={cardInCart}
              />
            </div>
          </div>
        </div>
      ) : (
        <div className={'container ' + styles.block}>
          <Title subtitle='No items for order. Return to catalog' />
          <Button text='To catalot' to='/catalog' />
          <AlsoLike />
        </div>
      )}
    </>
  )
}

export default PageCheckout
