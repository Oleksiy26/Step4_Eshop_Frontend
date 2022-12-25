import React from "react";
import { NavLink } from "react-router-dom";
import styles from './Menu.module.scss'
import { ReactComponent as Close } from "./svg/close.svg";
import PropTypes from "prop-types";

const Menu = (props) => {
    const {closeFunc} = props;

    return(
        <>
        <div className={styles.menu__back}></div>
        <div className={styles.menu__body}>
            <div className={styles.menu__body_close}>
                <Close onClick={closeFunc}/>
            </div>
            <div className={styles.menu__body_list}>
                <div>
                    <NavLink to="/">New lingerie</NavLink>
                    <NavLink to="/">Sales</NavLink>
                    <NavLink to="/">Profile</NavLink>
                    <NavLink to="/">Catalogue</NavLink>
                    <NavLink to="/">Contact</NavLink>
                </div>
            </div>

        </div>
        </>
    )
}

Menu.propTypes = {
    closeFunc: PropTypes.func.isRequired,
}

export default Menu;