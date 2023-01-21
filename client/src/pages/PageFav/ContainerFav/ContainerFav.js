import React from 'react'
import ProductCard from '../../../components/ProductCard'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'

const ContainerFav = ({ items }) => {
  const token = useSelector(state => state.auth.token)

  return (
    <section className='container py-5'>
      <div className='d-flex gap-4 flex-column flex-md-row'>
        {console.log(items)}
        {(token
          ? items.products.products && items.products.products
          : items && items
        ).map(product => (
          <ProductCard
            item={product}
            ident={product.itemNo}
            price={product.currentPrice}
            photoUrl={product.imageUrls[1]}
            subClass={'set-item img-fluid overflow-auto flex-grow-1'}
            key={product._id}
            id={product._id}
            nameCard={product.name}
            size={product.size}
            color={product.color}
          />
        ))}
      </div>
    </section>
  )
}

ContainerFav.propTypes = {
  items: PropTypes.oneOfType([
    PropTypes.array.isRequired,
    PropTypes.object.isRequired
  ])
}

export default ContainerFav
