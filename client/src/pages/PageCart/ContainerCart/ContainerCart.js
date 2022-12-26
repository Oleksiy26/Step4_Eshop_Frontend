import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from '../../../components/ProductCard'
import PropTypes from 'prop-types'
import styles from './ContainerCart.module.scss'

const ContainerCart = ({ items }) => {
  const token = useSelector(state => state.auth.token)
  const path = token ? 'item.product' : 'item'

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

  return (
    <div className={styles.card}>
      {token
        ? items &&
          items.map(item => (
            <ProductCard
              price={item.product.currentPrice}
              photoUrl={item.product.imageUrls[0]}
              subClass={''}
              key={item.product._id}
              id={item.product._id}
              nameCard={item.product.name}
              quantity={item.cartQuantity}
              color={item.product.color}
              size={item.product.size}
              viewForCart
            />
          ))
        : items &&
          items.map(item => (
            <ProductCard
              price={item.currentPrice}
              photoUrl={item.imageUrls[0]}
              subClass={''}
              key={item._id}
              id={item._id}
              nameCard={item.name}
              quantity={localQuantity(`${item._id}`)}
              color={item.color}
              size={item.size}
              viewForCart
            />
          ))}
    </div>
  )
}

ContainerCart.propTypes = {
  items: PropTypes.oneOfType([
    PropTypes.array.isRequired,
    PropTypes.object.isRequired
  ])
}

export default ContainerCart
