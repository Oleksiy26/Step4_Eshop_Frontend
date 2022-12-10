import React from "react";
import { useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import Slider from "react-slick";
import ProductCard from "../../components/ProductCard";
import "./PageItem.scss";

export const PageItem = () => {
  const { id } = useParams();

  const products = useSelector((state) => state.products);
  const product = useSelector((state) => state.products.products[id]);

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
      <div className="my-5 d-flex gap-5 justify-content-center">
        <div className="sliderImg">
          <Slider {...settings}>
            {product !== undefined
              ? product.imageUrls.map((el) => (
                  <img className="sliderImg" src={el} alt="" />
                ))
              : null}
          </Slider>
        </div>
        <div>
          <h1>{product !== undefined && product.setName}</h1>
          <h3>Available</h3>
          <h4 className="my-4">{product !== undefined && product.price}$</h4>
          <div className="d-flex gap-4">
            <p>Available Sizes: </p>
            <div className="d-flex gap-4">
              {product !== undefined &&
                product.size.map((el) => <p key={el + id}>{el}</p>)}
            </div>
          </div>
          <div className="d-flex align-items-center">
            <p className="my-2">Color:</p>{" "}
            <span
              style={{
                backgroundColor: product !== undefined ? product.color : null,
              }}
              className={"colorSquare"}
            />
          </div>
        </div>
      </div>
      <div>
        <h1 className="pt-5">You may also like</h1>
        <div className="d-flex justify-content-around my-5">
          {products
            ? products.products
                .slice(0, 5)
                .map((item) => (
                  <ProductCard
                    price={item.price}
                    photoUrl={item.imageUrls[0]}
                    subClass={"set-item"}
                    key={item._id}
                    id={item._id}
                  />
                ))
            : null}
        </div>
      </div>
    </div>
  );
};
