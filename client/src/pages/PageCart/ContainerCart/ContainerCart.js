import React from 'react';
import ProductCard from '../../../components/ProductCard';
import styles from "./ContainerCart.module.scss"

const ContainerCart = ({ items }) => {
  return (
      <div className={styles.card}>
        {items &&
          items.map(item => (
            <ProductCard
              price={item.product.currentPrice}
              photoUrl={item.product.imageUrls[0]}
              subClass={''}
              key={item.product._id}
              id={item.product._id}
              nameCard={item.product.name}
              quantity={item.cartQuantity}
              viewForCart
            />
          ))
         }
      </div>
  );
};

export default ContainerCart;
