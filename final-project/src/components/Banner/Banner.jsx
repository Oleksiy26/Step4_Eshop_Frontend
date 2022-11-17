import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import styles from './Banner.module.scss'
import SlickSlider from "./SlickSlider";

const Banner = () => {
    return (
        <>
        <div className={styles.banner}>
            <SlickSlider/>
        </div>
        {/* <div className={styles.block}>
            <div className={styles.block_f}>
                <p>handmade</p>
            </div>
            <div className={styles.block_s}>
                <p>LINGERIE</p>
                <p>for women </p>
            </div>    
        </div> */}
       
        </>


    )
}

export default Banner;