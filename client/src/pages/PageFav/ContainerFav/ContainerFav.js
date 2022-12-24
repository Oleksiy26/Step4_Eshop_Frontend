import React, {useContext} from "react";
import ProductCard from "../../../components/ProductCard";
// import {useFunctionality} from "../../../hooks/useFunctionality";
import {useSelector} from "react-redux";
import {AuthContext} from "../../../context/AuthContext";

const ContainerFav = ({items}) => {
    const { favItems } = useSelector((state) => state.wishlist)
    const auth = useContext(AuthContext)
    const { isAuthenticated } = auth

    return(
        <section className="container py-5">
            <div className="d-flex gap-4 flex-column flex-md-row">
                { isAuthenticated ?
                    favItems.products.products ? (
                        favItems.products.products.map((product) =>
                            <ProductCard
                                item={product}
                                ident={product.itemNo}
                                price={product.currentPrice}
                                photoUrl={product.imageUrls[1]}
                                subClass={'set-item img-fluid overflow-auto flex-grow-1'}
                                key={product._id}
                                id={product._id}
                            />
                        )) : null
                    :
                        items && items.map((item) =>
                            <ProductCard
                                item={item}
                                ident={item.itemNo}
                                price={item.currentPrice}
                                photoUrl={item.imageUrls[0]}
                                subClass={'set-item img-fluid overflow-auto flex-grow-1'}
                                key={item._id}
                                id={item._id}
                            />)
                }
            </div>
        </section>
    ) 
}

export default ContainerFav;


