import React from "react";
import { NavLink } from "react-router-dom";
import styles from './Footer.module.scss';
import {ReactComponent as Logo} from "./svg/logo.svg";

const Footer = () => {
    return (
        <footer>
        <div className={styles.container}>
            <div className={styles.footer__block}>
                <Logo/>
                <div  className={styles.footer__block_list}>
                    <p>21 Vasilkivska Street, 40611</p>
                    <p>Kyiv, Ukraine</p>
                    <p>098 954 11 22</p>
                    <p>femlingeriesoul@fems.ua</p>                    
                </div>
            </div>
            <div className={styles.footer__block}>
                <h3>Shop</h3>
                <div  className={styles.footer__block_list}>
                    <NavLink to="/">Collections</NavLink>
                    <NavLink to="/">Catalogue</NavLink>
                    <NavLink to="/">Gift cards</NavLink>
                    <NavLink to="/">Garment care</NavLink>
                </div>

            </div>
            <div className={styles.footer__block}>
                <h3>Customer service</h3>
                <div  className={styles.footer__block_list}>
                    <NavLink to="/">Size guide</NavLink>
                    <NavLink to="/">Garment care</NavLink>
                    <NavLink to="/">Shipping  Returns</NavLink>
                    <NavLink to="/">Delivery</NavLink>
                    <NavLink to="/">Contact</NavLink>                   
                </div>
            </div>
            <div className={styles.footer__block}>
                <h3>Social</h3>
                <div  className={styles.footer__block_list}>
                    <NavLink to="/">INSTAGRAM</NavLink>
                    <NavLink to="/">FACEBOOK</NavLink>
                    <NavLink to="/">TWITTER</NavLink>
                </div>
                <p>2022 FEM lingerie</p>
            </div>
        </div>
    </footer>
    )
}

export default Footer;