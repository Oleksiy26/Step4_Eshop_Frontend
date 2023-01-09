import React from 'react'
import { useSelector } from 'react-redux'
import Loader from '../Loader'
import ProductCard from '../ProductCard'
import { getRandomRange } from '../RandomRange/randomRange'
import Title from '../Title'

const AlsoLike = () => {
  const products = useSelector(state => state.products)

  let arrayofProducts = products.products.length
  let res = getRandomRange(0, arrayofProducts, 5)

  return (
    <>
      <Title subtitle='You may also like' />
      {products.products ? (
        products.status === 'loading' ? (
          <Loader />
        ) : (
          <section className='sales'>
            {products
              ? products.products
                  .slice(res.start, res.end)
                  .map(item => (
                    <ProductCard
                      ident={item.itemNo}
                      price={item.currentPrice}
                      photoUrl={item.imageUrls[0]}
                      key={item._id}
                      id={item._id}
                      nameCard={item.name}
                      color={item.color}
                      size={item.size}
                    />
                  ))
              : null}
          </section>
        )
      ) : null}
    </>
  )
}

export default AlsoLike
