import React, {useContext} from "react";
import ProductCard from "../../../components/ProductCard";
import { AuthContext } from "../../../context/AuthContext";

const ContainerFav = ({items}) => {
    const auth = useContext(AuthContext)
    const { isAuthenticated } = auth
    console.log(items)
    return(
        <section className="container py-5">
            <div className="d-flex gap-4 flex-column flex-md-row">
                {items && items.map((item) =>
                    <ProductCard
                        ident={item.itemNo}
                        price={item.currentPrice}
                        photoUrl={item.imageUrls[0]}
                        subClass={'set-item img-fluid overflow-auto flex-grow-1'}
                        key={item._id}
                        id={item._id}
                    />)}
            </div>
        </section>
    ) 
}

export default ContainerFav;
