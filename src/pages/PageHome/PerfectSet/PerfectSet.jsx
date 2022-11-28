import React from 'react';
import { useSelector } from 'react-redux';
import DiscoverLink from '../../../components/DiscoverLink/DiscoverLink';
import ProductCard from '../../../components/ProductCard';
import Title from '../../../components/Title';
import './index.scss';

const PerfectSet = () => {
  const products = useSelector((state) => state.products);

  return (
    <div className="container">
      <Title title="new arrivals" subtitle="Choose your perfect set" />
      <section className="set">
        {products.length !== 0 ? (
          <>
            {products.slice(0, 3).map((item, index) => (
              <>
                <ProductCard
                  price={item.price}
                  photoUrl={item.imageUrls[0]}
                  subClass={'set-item'}
                  key={index}
                  id={item._id}
                />
                {/* {console.log(item._id)} */}
              </>
            ))}
          </>
        ) : null}
        <DiscoverLink subClass={'set-link set-item'} />
      </section>
    </div>
  );
};
export default PerfectSet;
