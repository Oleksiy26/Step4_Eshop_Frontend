import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import styles from './Banner.module.scss'
import SlickSlider from "./SlickSlider";
import Button from "../Button/Button";
import {useNavigate} from "react-router-dom";

const Banner = () => {
    const navigate = useNavigate()
    const redirectCatalog = () => {
        navigate("/catalog")
    }

    return (
        <>
            <div className={styles.banner}>
                <SlickSlider/>
                <div className={styles.block_f}>
                <span>handmade</span>
                </div>
                <div className={styles.block_s}>
                    <span>LINGERIE</span>
                </div>
                <div className={styles.block_t}>
                    <span>for women</span>
                </div>
                <Button
                    text= "Go to catalog"
                    className={styles.btn}
                    onClick={redirectCatalog}
                    // to="/catalog"
                />
            </div>
        </>
    )
}

export default Banner;