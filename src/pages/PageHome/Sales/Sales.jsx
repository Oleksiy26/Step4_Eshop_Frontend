import React from "react";
import { useSelector } from "react-redux";
import DiscoverLink from "../../../components/DiscoverLink/DiscoverLink";
import ProductCard from "../../../components/ProductCard";
import Title from "../../../components/Title";
import "./index.scss";

const Sales = () => {
  const products = useSelector((state) => state.products);


  return (
    <div className="container">
      <Title title="Sales and promotions" subtitle="Catch the best price" />
      <section className="sales">
        {products.length !== 0 ? (
          <>
          {products
            .slice(12,16)
            .map((item) => 
              <ProductCard
                price={item.price}
                photoUrl={item.imageUrls[0]}
                subClass={"sales-item"}
                key={item._id}
                id={item._id}
              />
            )}
          </>
        ) : null}
        <DiscoverLink subClass={"sales-link "} />
      </section>
    </div>
  );
};
export default Sales;
