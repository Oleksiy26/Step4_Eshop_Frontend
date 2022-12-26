import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from '../../components/ProductCard'
import Title from '../../components/Title/Title'
import ButtonCheckout from './ButtonCheckout/ButtonCheckout'
import ContainerCart from './ContainerCart'
import styles from './PageCart.module.scss'

const PageCart = () => {
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

  return (
    <div className='container py-5 page'>
      {token ? (
        !cardInCart ? (
          <Title subtitle='Your shopping cart is empty' />
        ) : (
          <Title subtitle='Your cart' />
        )
      ) : !cartCounter.inCart ? (
        <Title subtitle='Your shopping cart is empty' />
      ) : (
        <Title subtitle='Your cart' />
      )}
      <section className={styles.section}>
        <div className={styles.section_products}>
          <ContainerCart
            items={token ? cardInCart.products : findItemsInCart()}
          />
        </div>
        <div className={styles.section_totaly}>
          <div className={styles.section_totaly_content}>
            <Title subtitle='Total' />
            <div className={styles.section_totaly_content_price}>
              <p>Total price</p>
              <p>{totalPrice()} €</p>
            </div>
            <ButtonCheckout />
          </div>
        </div>
      </section>

      <Title subtitle='You may also like' />
      <section className='d-flex gap-4 flex-column flex-md-row'>
        {products
          ? products.products
              .slice(13, 17)
              .map(item => (
                <ProductCard
                  ident={item.itemNo}
                  price={item.currentPrice}
                  photoUrl={item.imageUrls[0]}
                  subClass={'set-item img-fluid overflow-auto flex-grow-1'}
                  key={item._id}
                  id={item._id}
                />
              ))
          : null}
      </section>
    </div>
  )
}

export default PageCart
