import React from "react";
import { useSelector } from "react-redux";
import styles from "./Burger.module.scss";


const Burger = ({onClick}) => {
    const locationMain = useSelector((state) => state.location.locationMain);


    return (
        <div className={!locationMain ? styles.burger_page : styles.burger}>
            <div className={styles.burger_btn} onClick={onClick}>
                <div></div>
                <div></div>
            </div>
        </div>  
    )
}

export default Burger;