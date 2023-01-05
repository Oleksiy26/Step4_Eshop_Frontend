import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductCard from '../../components/ProductCard'
import Title from '../../components/Title/Title'
import { useForCart } from '../../hooks/useForCart'
import SectionOrder from './SectionOrder'
import './Other.scss'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { checkLocation } from '../../store/location/location'

const PageCart = () => {
  const products = useSelector(state => state.products)
  const cardInCart = useSelector(state => state.cart.cart)
  const cartCounter = useSelector(state => state.counter)
  const token = useSelector(state => state.auth.token)
  const { totalPrice, findItemsInCart } = useForCart()

  return (
    <div className='container py-5 page'>
      {(token ? !cardInCart : !cartCounter.inCart) ? (
        <Title subtitle='Your shopping cart is empty' />
      ) : (
        <Title subtitle='Your cart' />
      )}
      <SectionOrder
        items={token ? cardInCart.products : findItemsInCart()}
        totalPrice={totalPrice}
        check={token ? cardInCart : cartCounter.inCart}
      />
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
