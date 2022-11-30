import React, { useState } from "react";
import { NavLink } from "react-router-dom"; 
import {ReactComponent as User} from "./svg/user.svg"
import {ReactComponent as Cart} from "./svg/cart.svg"
import {ReactComponent as Fav} from "./svg/fav.svg"
import {ReactComponent as Search} from "./svg/search.svg"
import {ReactComponent as Logo} from "./svg/logo.svg"
import { useSelector } from "react-redux";
import styles from './Header.module.scss'
import Menu from "./Menu/Menu";

const Header = () => {
    const [menu, setMenu] = useState(false);
    const counerInFav = useSelector((state) => state.counter.inFav);
    const locationMain = useSelector((state) => state.location.locationMain);

    const clickMenu = () => {
        setMenu(!menu);
    }

    const checkCounterInFav = () => {
        return counerInFav !==0 ? <span className={styles.count}>{counerInFav}</span> : null;
    }

    const checkLocation = () => {
        return !locationMain ? 
             (
                <div className={styles.header__block_menu_page}>
                <div className={styles.header__block_menu_btn} onClick={() => clickMenu()}>
                    <div></div>
                    <div></div>
                </div>
            </div>
            ) 
            :
            (
                <div className={styles.header__block_menu}>
                <div className={styles.header__block_menu_btn} onClick={() => clickMenu()}>
                    <div></div>
                    <div></div>
                </div>
            </div>
            )
        
    }

    return(
        <>
            <header className={styles.header}>
                <div className={styles.header__block_logo}>
                    <NavLink to="/" className="logo"><Logo/></NavLink>
                </div>
                <div className={styles.header__block_svg}>
                    <NavLink to="/">
                        <User/>
                    </NavLink>
                    <NavLink to="/">
                        <Search/>
                    </NavLink>
                    <NavLink to="/fav">
                        <Fav/>
                        {checkCounterInFav()}
                    </NavLink>
                    <NavLink to="/">
                        <Cart/>
                    </NavLink>
                </div>
                {checkLocation()}
            </header>
            {menu && <Menu closeFunc={() => clickMenu()}/>}
        </>
    )
}

export default Header;