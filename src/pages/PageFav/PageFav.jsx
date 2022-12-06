import React, { useEffect } from "react"
import { useSelector } from "react-redux";
import ContainerFav from "./ContainerFav/ContainerFav";
import { useDispatch } from "react-redux";
import { checkLocation } from "../../store/location/location";
import { useLocation } from "react-router-dom";

const PageFav = () => {
    const products = useSelector((state) => state.products);
    const dispatch = useDispatch();
    const location = useLocation();
  
    useEffect(() => {
      dispatch(checkLocation(location.pathname))
    }, []);

    const findItemsFav = () => {
        const itemsCart = JSON.parse(localStorage.getItem('fav'));

        return products.products.reduce((arrayCart, item) => {
            if (Array.isArray(itemsCart)) {
                if (itemsCart.includes(item._id)) {
                    arrayCart.push(item)
                }
            }
            return arrayCart;
        }, []);
    }

    return (
        <>
        <ContainerFav
            items={findItemsFav()}
        />
        </>
    )
}

export default PageFav;