import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../../components/ProductCard";
import Title from "../../components/Title/Title";

const PageCart = () => {
    const products = useSelector((state) => state.products)


    return (
        <div className="container py-5 page">
            <Title subtitle="Your cart"/>
            <section className="d-flex gap-3 flex-column flex-md-row">
                <div className="flex-grow-2">
                   
                </div>
                <div className="flex-grow-1"></div>
            </section>
            <Title subtitle="You may also like"/>
            <section className="d-flex gap-4 flex-column flex-md-row">
                {products ? (
                products.products.slice(13, 17).map((item) => (
                    <ProductCard
                    price={item.price}
                    photoUrl={item.imageUrls[0]}
                    subClass={'set-item img-fluid overflow-auto flex-grow-1'}
                    key={item._id}
                    id={item._id}
                    />
                ))
                ) : null}
            </section>
        </div>
    )
}

export default PageCart;