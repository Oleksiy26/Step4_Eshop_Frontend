import React from 'react';
import DiscoverLink from '../../../components/DiscoverLink/DiscoverLink';
import ProductCard from '../../../components/ProductCard';
import Title from '../../../components/Title';
import './index.scss';

const PerfectSet = () => {
  return (
    <div className="container">
      <Title title="new arrivals" subtitle="Choose your perfect set" />
      <section className="set">
        <ProductCard
          price={65}
          photoUrl={'https://i.ibb.co/R2yyqRN/ard9681.jpg'}
          subClass={'set-item1'}
        />
        <ProductCard
          price={75}
          photoUrl={'https://i.ibb.co/Yp8Vktn/ard9661.jpg'}
          subClass={'set-item2'}
        />
        <ProductCard
          price={55}
          photoUrl={'https://i.ibb.co/V2tyvtL/ard53.jpg'}
          subClass={'set-item3'}
        />
        <DiscoverLink subClass={'set-link '} />
      </section>
    </div>
  );
};
export default PerfectSet;
