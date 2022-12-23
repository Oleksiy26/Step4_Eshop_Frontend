import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../../../components/ProductCard';
import styles from "./ContainerCart.module.scss"

const ContainerCart = ({ items }) => {
  const token = useSelector((state) => state.auth.token);
  const path = token ? 'item.product' : 'item'

  const localQuantity = () => {
    const itemsinCart = JSON.parse(localStorage.getItem('cart'));
   const res = itemsinCart.map((name) => {
      return {count: 1, name: name}
    })
    .reduce((a, b) => {
      a[b.name] = (a[b.name] || 0) + b.count
    
      return a
    }, {})


    // console.log(Object.keys(res).find((vsl) => {res.vsl === "2" }));

  }

  return (
      <div className={styles.card}>
        { token ? (
          items && 
            items.map(item => (
              <ProductCard
                price={item.product.currentPrice}
                photoUrl={item.product.imageUrls[0]}
                subClass={''}
                key={item.product._id}
                id={item.product._id}
                nameCard={item.product.name}
                quantity={item.cartQuantity}
                color={item.product.color}
                selectSize
                viewForCart
              />
            ))
        ) : (
          //  localQuantity()
          items && 
            items.map((item) => (
              <>
             
              <ProductCard
                price={item.currentPrice}
                photoUrl={item.imageUrls[0]}
                subClass={''}
                key={item._id}
                id={item._id}
                nameCard={item.name}
                // quantity={item.cartQuantity}
                color={item.color}
                viewForCart
              />  
              </>
            
            ))
        )}
      </div>
  );
};

export default ContainerCart;
