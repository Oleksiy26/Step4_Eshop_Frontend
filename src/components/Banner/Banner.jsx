import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import styles from './Banner.module.scss'
import SlickSlider from "./SlickSlider";
import Button from "../Button/Button";

const Banner = () => {
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
                    to="/"
                />
            </div>
        </>
    )
}

export default Banner;