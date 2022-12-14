import {useContext, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import { checkInCart, checkInFav } from "../store/counter/counter";
import { AuthContext } from "../context/AuthContext";

export const useFunctionality = (id) => {
    const [inFav, setInFav] = useState(false);
    const [inCart, setInCart] = useState(false);
    const { favItems } = useSelector((state) => state.wishlist)
    const auth = useContext(AuthContext)
    const { isAuthenticated } = auth
    const dispatch = useDispatch();

    const checkValue = value => {
        return value != null;
    };

    // (favItems.products) ? setInWishlist(true) : setInWishlist(false)

    useEffect(() => {
        const favorite = JSON.parse(localStorage.getItem('fav'));
        if (favorite) {
            dispatch(checkInFav(favorite.length));
            favorite.forEach(item => {
                if (item === id) {
                   setInFav(true);
                }
            });
        }
    }, []);

    const clickFav = (id) => {
            if (localStorage.getItem('fav')) {
                const fav = JSON.parse(localStorage.getItem('fav'));
                if (!fav.includes(id)) {
                    fav.push(id);
                    localStorage.setItem('fav', JSON.stringify(fav));
                    setInFav(true);
                    dispatch(checkInFav(fav.length));
                } else {
                    const newFav = fav.map(item => {
                        return item !== id ? item : null;
                    });
                    const filter = newFav.filter(checkValue);
                    dispatch(checkInFav(filter.length));
                    localStorage.setItem('fav', JSON.stringify(filter));
                    setInFav(false);
                }
            } else {
                localStorage.setItem('fav', JSON.stringify([id]));
                setInFav(true);
                dispatch(checkInFav(1));
            }
    };


    const clickToCart = id => {
        if (localStorage.getItem('cart')) {
            const cart = JSON.parse(localStorage.getItem('cart'));
            if (!cart.includes(id)) {
                cart.push(id);
                localStorage.setItem('cart', JSON.stringify(cart));
                setInCart(true);
                dispatch(checkInCart(cart.length));
            } else {
                const newCart = cart.map(item => {
                    return item !== id ? item : null;
                });
                const filter = newCart.filter(checkValue);
                dispatch(checkInCart(filter.length));
                localStorage.setItem('cart', JSON.stringify(filter));
                setInCart(false);
            }
        } else {
            localStorage.setItem('cart', JSON.stringify([id]));
            setInCart(true);
            dispatch(checkInCart(1));
        }
    };

    return {
        inFav,
        inCart,
        clickFav,
        clickToCart,
    }
}