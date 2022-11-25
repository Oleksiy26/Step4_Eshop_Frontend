import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom"; 
import {ReactComponent as User} from "./svg/user.svg"
import {ReactComponent as Cart} from "./svg/cart.svg"
import {ReactComponent as Fav} from "./svg/fav.svg"
import {ReactComponent as Search} from "./svg/search.svg"
import {ReactComponent as Logo} from "./svg/logo.svg"
import styles from './Header.module.scss'
import Menu from "./Menu/Menu";

const Header = () => {
    const [menu, setMenu] = useState(false);
    const location = useLocation()

    const clickMenu = () => {
        setMenu(!menu);
    }

    const checkLocation = () => {
        if (location.pathname !== "/") {
            return (
                <div className={styles.header__block_menu_page}>
                <div className={styles.header__block_menu_btn} onClick={() => clickMenu()}>
                    <div></div>
                    <div></div>
                </div>
            </div>
            )
        } else {
            return (
                <div className={styles.header__block_menu}>
                <div className={styles.header__block_menu_btn} onClick={() => clickMenu()}>
                    <div></div>
                    <div></div>
                </div>
            </div>
            )
        }
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