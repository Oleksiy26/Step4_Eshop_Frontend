import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import Slider from 'react-slick';
import AddCartFavorit from '../../components/AddCartFavorit';
import ProductCard from '../../components/ProductCard';
import './PageItem.scss';

export const PageItem = () => {
  const { itemNo } = useParams();

  const products = useSelector(state => state.products);
  const product = useSelector(state => state.products.products).find(obj => obj.itemNo === itemNo);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    adaptiveHeight: true,
    arrows: false,
  };

  console.log(product);

  return (
    <div className="container">
      <div className="my-5 d-flex flex-column flex-md-row gap-5 justify-content-center">
        <div className="slider">
          <Slider {...settings}>
            {product !== undefined ? (
              product.imageUrls.map(el => <img className="sliderImg img-fluid " src={el} alt="" />)
            ) : (
              <img
                className="sliderImg img-fluid "
                src={'https://bitsofco.de/content/images/2018/12/broken-1.png'}
                alt=""
              />
            )}
          </Slider>
        </div>
        <div>
          <h1>{(product !== undefined && product.name) || 'Unavailable'}</h1>
          <h3>{product !== undefined && product.enabled ? 'Available' : 'Out of stock'}</h3>
          <h4 className="my-4">{(product !== undefined && product.currentPrice) || '0'}$</h4>
          <div className="d-flex gap-4">
            <p>Available Sizes: </p>
            <div className="d-flex gap-4">
              {product !== undefined ? <p>{product.size}</p> : <p>No available sizes</p>}
            </div>
          </div>
          <div className="d-flex align-items-center">
            <p className="my-2">Color:</p>
            <span
              style={{
                backgroundColor: product !== undefined ? product.color : null,
              }}
              className={'colorSquare'}
            />
          </div>
          <AddCartFavorit />
        </div>
      </div>
      <div>
        <h1 className="pt-5">You may also like</h1>
        <div className="d-flex justify-content-around my-5">
          {products
            ? products.products
                .slice(0, 5)
                .map(item => (
                  <ProductCard
                    price={item.price}
                    photoUrl={item.imageUrls[0]}
                    subClass={'set-item'}
                    key={item._id}
                    id={item._id}
                    itemNo={item.itemNo}
                  />
                ))
            : null}
        </div>
      </div>
    </div>
  );
};
