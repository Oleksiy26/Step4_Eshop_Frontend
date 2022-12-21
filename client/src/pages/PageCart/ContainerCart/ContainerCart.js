import React from 'react';
import ProductCard from '../../../components/ProductCard';

const ContainerCart = ({ items }) => {
  return (
    <section className="container py-5">
      <div className="d-flex gap-4 flex-column flex-md-row">
        {items &&
          items.map(item => (
            <ProductCard
              currentPrice={item.product.currentPrice}
              photoUrl={item.product.imageUrls[0]}
              subClass={'set-item img-fluid overflow-auto flex-grow-1'}
              key={item.product._id}
              id={item.product._id}
            />
          )
          )}
      </div>
    </section>
  );
};

export default ContainerCart;
