import React, { useContext, useEffect } from "react"
import { useSelector } from "react-redux";
import ContainerFav from "./ContainerFav/ContainerFav";
import { useDispatch } from "react-redux";
import { checkLocation } from "../../store/location/location";
import { useLocation } from "react-router-dom";
import Title from '../../components/Title/Title';
import { fetchWishlist } from "../../store/wishlist/ActionCreator";
import { AuthContext } from "../../context/AuthContext";

const PageFav = () => {
    const products = useSelector((state) => state.products);
    const dispatch = useDispatch();
    const location = useLocation();
    const favCounter = useSelector((state) => state.counter)
    const { favItems } = useSelector((state) => state.wishlist)
    const auth = useContext(AuthContext)

    const { isAuthenticated } = auth


    // console.log(location)
    // console.log(favCounter)
    console.log(favItems)

    useEffect(() => {
      dispatch(checkLocation(location.pathname))
    }, []);

    const findItemsFav = () => {
        const itemsFav = JSON.parse(localStorage.getItem('fav'));

        if (itemsFav) {
            return products.products.filter(item => itemsFav.includes(item._id))
        }
    }

    useEffect(() => {
        dispatch(fetchWishlist())
    }, []);

    return (
        <div className="container">
            <Title subtitle={
                favCounter.inFav ? "Your favorited cards" : "No cards in favourites"
            }/>
            <ContainerFav
                items={findItemsFav()}
            />
        </div>
    )
}

export default PageFav;