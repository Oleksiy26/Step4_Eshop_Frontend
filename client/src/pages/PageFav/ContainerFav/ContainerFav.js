import React from 'react';
import ProductCard from '../../../components/ProductCard';

const ContainerFav = ({ items }) => {
  return (
    <section className="container py-5">
      <div className="d-flex gap-4 flex-column flex-md-row">
        {items &&
          items.map(item => (
            <ProductCard
              currentPrice={item.currentPrice}
              photoUrl={item.imageUrls[0]}
              subClass={'set-item img-fluid overflow-auto flex-grow-1'}
              key={item._id}
              id={item._id}
            />
          ))}
      </div>
    </section>
  );
};

export default ContainerFav;
