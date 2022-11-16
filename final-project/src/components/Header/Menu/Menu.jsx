import React from "react";
import styles from './Menu.module.scss'
import { ReactComponent as Close } from "./svg/close.svg";

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
                <ul>
                    <li>New lingerie</li>
                    <li>Sales</li>
                    <li>Profile</li>
                    <li>Catalogue</li>
                    <li>Contact</li>
                </ul>
            </div>

        </div>
        </>
    )
}

export default Menu;