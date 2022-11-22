import React from 'react';
import DiscoverLink from '../../../components/DiscoverLink/DiscoverLink';
import ProductCard from '../../../components/ProductCard';
import Title from '../../../components/Title';
import './index.scss';

const Sales = () => {
  return (
    <div className="container">
      <Title title="Sales and promotions" subtitle="Catch the best price" />
      <section className="sales">
        <ProductCard
          price={65}
          photoUrl={'https://i.ibb.co/MDtGZQp/ard51.jpg'}
          subClass={'sales-item1'}
        />
        <ProductCard
          price={75}
          photoUrl={'https://i.ibb.co/FDvLLVq/ard70.jpg'}
          subClass={'sales-item2'}
        />
        <ProductCard
          price={55}
          photoUrl={'https://i.ibb.co/rdh8K3g/ard63.jpg'}
          subClass={'sales-item3'}
        />
        <ProductCard
          price={55}
          photoUrl={'https://i.ibb.co/zXkMHpH/ard9662.jpg'}
          subClass={'sales-item4'}
        />
        <DiscoverLink subClass={'sales-link '} />
      </section>
    </div>
  );
};
export default Sales;
