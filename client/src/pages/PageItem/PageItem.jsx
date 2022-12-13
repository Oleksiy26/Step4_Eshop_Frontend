import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Slider from "react-slick";
import ProductCard from "../../components/ProductCard";
import "./PageItem.scss";
import {fetchCard} from "../../store/card/ActionCreator";
import {logDOM} from "@testing-library/react";

export const PageItem = () => {
  const { itemNo } = useParams();
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const products = useSelector((state) => state.products);
  // // const product = useSelector((state) => state.products.products[id]);

  // console.log(products)
  const { card, isCardLoading, cardError } = useSelector((state) => state.card)

  const { imageUrls, name, currentPrice, sizes, color } = card
  // console.log(card)
  // console.log('sizes: ', sizes)


  useEffect(() => {
    dispatch(fetchCard(itemNo))
  }, [])

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

  return (
    <div className="container">
      { isCardLoading && <h1>Loading...</h1>}
      { cardError && <h1>Smth wrong happened</h1> }
      <div className="my-5 d-flex gap-5 justify-content-center">
        <div className="sliderImg">
          <Slider {...settings}>
            {card !== undefined
              ? imageUrls?.map((el) => (
                  <img key={el} className="sliderImg" src={el} alt="" />
                ))
              : null}
          </Slider>
        </div>
        <div>
          <h1>{card !== undefined && name}</h1>
          <h3>Available</h3>
          <h4 className="my-4">{card !== undefined && currentPrice}$</h4>
          <div className="d-flex gap-4">
            <p>Available Sizes: </p>
            <div className="d-flex gap-4">
              {/*{card !== undefined &&*/}
              {/*  sizes?.map((el) => <p key={el + itemNo}>{el}</p>)}*/}
              {sizes}
            </div>
          </div>
          <div className="d-flex align-items-center">
            <p className="my-2">Color:</p>{" "}
            <span
              style={{
                backgroundColor: card !== undefined ? color : null,
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
