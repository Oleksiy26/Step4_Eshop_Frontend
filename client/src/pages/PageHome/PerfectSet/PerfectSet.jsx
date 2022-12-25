import React from 'react'
import { useSelector } from 'react-redux'
import DiscoverLink from '../../../components/DiscoverLink/DiscoverLink'
import ProductCard from '../../../components/ProductCard'
import Title from '../../../components/Title'
import './index.scss'

const PerfectSet = () => {
  const products = useSelector((state) => state.products)
  return (
    <div className="container">
      <Title title="new arrivals" subtitle="Choose your perfect set" />
      <section className="set">
        {products
          ? products.products
              .slice(0, 3)
              .map((item) => (
                <ProductCard
                  ident={item.itemNo}
                  price={item.currentPrice}
                  photoUrl={item.imageUrls[0]}
                  subClass={'set-item'}
                  key={item._id}
                  id={item._id}
                  nameCard={item.name}
                  color={item.color}
                  size={item.size}
                />
              ))
          : null}
        <DiscoverLink subClass={'set-link set-item'} />
      </section>
    </div>
  )
}
export default PerfectSet
