import {useContext, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import { checkInCart, checkInFav } from "../store/counter/counter";
import { AuthContext } from "../context/AuthContext";
import { addToWishlist, deleteItemFromWishlist } from "../store/wishlist/ActionCreator";
import { fetchCreateCart, fetchDeleteFromCart } from "../store/cart/cart";
import { checkLocation } from "../store/location/location";
import { useLocation } from "react-router-dom";

export const useFunctionality = (id) => {
    const [inFav, setInFav] = useState(false);
    const [inCart, setInCart] = useState(false);
    const auth = useContext(AuthContext)
    const { isAuthenticated } = auth
    const dispatch = useDispatch();
    const token = useSelector((state) => state.auth.token);
    const cardInCart = useSelector((state) => state.cart.cart)
    const cardInFav = useSelector((state) => state.wishlist.favItems)

    const checkValue = value => {
        return value != null;
    };

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
        checkCards(id)
    }, [cardInCart, cardInFav]);


    const checkCards = (id) => {
        if (cardInCart) {
          const arrCard = cardInCart.products.map((item) => {
             return item.product
          })
          const arrCardId = arrCard.map((item) => {
            return item._id
          })
          if (arrCardId.includes(id)) {
            setInCart(true)
          }
        }

        if (cardInFav.products.length !== 0) {
            const arrFav = cardInFav.products;            
            const arrFavId = arrFav.products.map((item) => {
                return item._id
            })
            if (arrFavId.includes(id)) {
              setInFav(true)
            }
          }
      }

    const clickFav = (id) => {
        if (!token) {
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
        } else {
            if (inFav) {
                dispatch(deleteItemFromWishlist(id))
                setInFav(false)
            } else {
                dispatch(addToWishlist(id))
                setInFav(true)
            }
        }
    };

    const clickToCart = (id) => {
        if (!token) {
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
        } else {
            if (inCart) {
              dispatch(fetchDeleteFromCart(id))
              setInCart(false)
            } else {
              dispatch(fetchCreateCart(id))
              setInCart(true)
            }
        }
    };

    const clickDeleteInCart = () => {
        dispatch(fetchDeleteFromCart(id))
        setInCart(false)
    }

    const clickAddInCart = () => {
        dispatch(fetchCreateCart(id))
    }

    return {
        inFav,
        inCart,
        clickFav,
        clickToCart,
        isAuthenticated,
        setInFav,
        clickDeleteInCart,
        clickAddInCart
    }
}