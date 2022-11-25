import React from "react";
import { useSelector } from "react-redux";
import DiscoverLink from "../../../components/DiscoverLink/DiscoverLink";
import ProductCard from "../../../components/ProductCard";
import Title from "../../../components/Title";
import "./index.scss";

const PerfectSet = () => {
  const products = useSelector((state) => state.products);

  return (
    <div className="container">
      <Title title="new arrivals" subtitle="Choose your perfect set" />
      <section className="set">
        {products.length !== 0 ? (
          <>
            <ProductCard
              price={products[0].price}
              photoUrl={products[0].imageUrls[0]}
              subClass={"set-item1"}
            />
            <ProductCard
              price={products[1].price}
              photoUrl={products[1].imageUrls[0]}
              subClass={"set-item2"}
            />
            <ProductCard
              price={products[2].price}
              photoUrl={products[2].imageUrls[0]}
              subClass={"set-item3"}
            />
          </>
        ) : null}

        <DiscoverLink subClass={"set-link "} />
      </section>
    </div>
  );
};
export default PerfectSet;
