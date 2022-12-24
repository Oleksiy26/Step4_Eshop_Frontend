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
                {products ? (
                    products.products
                        .slice(12,16)
                        .map((item) =>
                            <ProductCard
                                ident={item.itemNo}
                                price={item.currentPrice}
                                photoUrl={item.imageUrls[0]}
                                subClass={"sales-item"}
                                key={item._id}
                                id={item._id}
                                nameCard={item.name}
                                color={item.color}
                                size={item.size}
                            />
                        )
                ) : null}
                <DiscoverLink subClass={"sales-link "} />
            </section>
        </div>
    );
};
export default Sales;