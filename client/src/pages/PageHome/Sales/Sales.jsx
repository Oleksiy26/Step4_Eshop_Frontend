import React from 'react'
import { useSelector } from 'react-redux'
import DiscoverLink from '../../../components/DiscoverLink/DiscoverLink'
import Loader from '../../../components/Loader'
import ProductCard from '../../../components/ProductCard'
import Title from '../../../components/Title'
import './index.scss'

const Sales = () => {
  const products = useSelector(state => state.products)

  return (
    <div className='container'>
      <Title title='Sales and promotions' subtitle='Catch the best price' />
      {products.products ? (
        products.status === 'loading' ? (
          <Loader />
        ) : (
          <section className='sales'>
            {products.products.slice(12, 16).map(item => (
              <ProductCard
                ident={item.itemNo}
                price={item.currentPrice}
                photoUrl={item.imageUrls[0]}
                subClass={'sales-item'}
                key={item._id}
                id={item._id}
                nameCard={item.name}
                color={item.color}
                size={item.size}
              />
            ))}
            <DiscoverLink subClass={'sales-link '} />
          </section>
        )
      ) : null}
    </div>
  )
}
export default Sales
