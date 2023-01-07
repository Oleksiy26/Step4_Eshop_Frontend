import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Order from '../../components/Forms/Order'
import Title from '../../components/Title'
import { useForCart } from '../../hooks/useForCart'
import { fetchMakeOrder } from '../../store/order/order'
import SectionOrder from '../PageCart/SectionOrder'
import styles from './PageCheckout.module.scss'

const PageCheckout = () => {
  const cardInCart = useSelector(state => state.cart.cart)
  const { totalPrice } = useForCart()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const secuessOrder = useSelector(state => state.order.status)

  const createOrder = async value => {
    dispatch(fetchMakeOrder({ value, cardInCart }))
    // if (secuessOrder === 'resolved') navigate('/thanksfororder')
    // navigate('/thanksfororder')
  }
  return (
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
  )
}

export default PageCheckout
