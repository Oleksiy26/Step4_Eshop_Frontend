import React from 'react'
import { useSelector } from 'react-redux'
import Title from '../../components/Title'
import { useForCart } from '../../hooks/useForCart'
import SectionOrder from '../PageCart/SectionOrder'
import styles from './PageCheckout.module.scss'

const PageCheckout = () => {
  const cardInCart = useSelector(state => state.cart.cart)
  const { totalPrice } = useForCart()
  return (
    <div className='container'>
      <Title subtitle='Checkout' />
      <div className={styles.checkout}>
        <div className={styles.checkout_block}>
          <Title title='personal details' />
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
