import React from 'react'
import { useSelector } from 'react-redux'
import DiscoverLink from '../../../components/DiscoverLink/DiscoverLink'
import Loader from '../../../components/Loader'
import ProductCard from '../../../components/ProductCard'
import { getRandomRange } from '../../../components/RandomRange/randomRange'
import Title from '../../../components/Title'
import './index.scss'

const Sales = () => {
  const products = useSelector(state => state.products)

  let arrayofProducts = products.products.length
  let res = getRandomRange(0, arrayofProducts, 5)

  return (
    <div className='container'>
      <Title title='Sales and promotions' subtitle='Catch the best price' />
      {products.products ? (
        products.status === 'loading' ? (
          <Loader />
        ) : (
          <section className='sales'>
            {products.products.slice(res.start, res.end).map(item => (
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
