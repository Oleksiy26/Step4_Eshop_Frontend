import React from 'react';
import DiscoverLink from '../../../components/DiscoverLink/DiscoverLink';
import ProductCard from '../../../components/ProductCard';
import Title from '../../../components/Title';
import './index.scss';

const Sales = products => {
  return (
    <div className="container">
      <Title title="Sales and promotions" subtitle="Catch the best price" />
      <section className="sales">
        {products.products.length !== 0
          ? products.products
              .slice(12, 16)
              .map(item => (
                <ProductCard
                  currentPrice={item.currentPrice}
                  photoUrl={item.imageUrls[0]}
                  subClass={'sales-item'}
                  key={item._id}
                  id={item._id}
                  itemNo={item.itemNo}
                />
              ))
          : null}
        <DiscoverLink subClass={'sales-link '} />
      </section>
    </div>
  );
};
export default Sales;
