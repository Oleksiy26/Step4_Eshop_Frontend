import React, {useContext, useEffect, useState} from "react";
import { NavLink } from "react-router-dom"; 
import {ReactComponent as User} from "./svg/user.svg"
import {ReactComponent as Cart} from "./svg/cart.svg"
import {ReactComponent as Fav} from "./svg/fav.svg"
import {ReactComponent as Search} from "./svg/search.svg"
import {ReactComponent as Logo} from "./svg/logo.svg"
import {useDispatch, useSelector} from "react-redux";
import styles from './Header.module.scss'
import Menu from "./Menu/Menu";
import Burger from "./Burger";
import Count from "./Count";
import {AuthContext} from "../../context/AuthContext";
import {fetchWishlist} from "../../store/wishlist/ActionCreator";

const Header = () => {
    const [menu, setMenu] = useState(false);
    const counerInFav = useSelector((state) => state.counter.inFav);
    const counerInCart = useSelector((state) => state.counter.inCart);
    const { favItems } =  useSelector((state) => state.wishlist)

    const dispatch = useDispatch()
    const auth = useContext(AuthContext)
    const { isAuthenticated } = auth
    const { products } = favItems

    const clickMenu = () => {
        setMenu(!menu);
    }

    // const getProductsImmediately = () => {
    //     dispatch(fetchWishlist())
    // }

    useEffect(() => {
        dispatch(fetchWishlist())
    }, []);

    return(
        <>
            <header className={styles.header}>
                <div className={styles.header__block_logo}>
                    <NavLink to="/" className="logo"><Logo/></NavLink>
                </div>
                <div className={styles.header__block_svg}>
                    <NavLink to="/profile">
                        <User/>
                    </NavLink>
                    <NavLink to="/">
                        <Search/>
                    </NavLink>
                    <NavLink to="/fav">
                        <Fav/>
                        {/*{ counerInFav ? <Count count={counerInFav}/> : null}*/}
                        { isAuthenticated ? <Count count={products.length} /> : <Count count={counerInFav}/> }
                    </NavLink>
                    <NavLink to="/cart">
                        <Cart/>
                        {counerInCart ? <Count count={counerInCart}/> : null}
                    </NavLink>
                </div>
                <Burger onClick={() => clickMenu()}/>
            </header>
            {menu && <Menu closeFunc={() => clickMenu()}/>}
        </>
    )
}

export default Header;