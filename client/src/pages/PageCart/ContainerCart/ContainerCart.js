import React from 'react';
import ProductCard from '../../../components/ProductCard';
import styles from "./ContainerCart.module.scss"

const ContainerCart = ({ items }) => {
  return (
      <div className={styles.card}>
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
  );
};

export default ContainerCart;
