import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"

const SlickSlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        adaptiveHeight: true,
        arrows: false
    };

    return (
        <div className="container">
            <Slider {...settings}>
                <img src="https://i.ibb.co/SdzJ3PY/banner1.jpg" style={{height: '864px', width: '1296px'}}/>   
                <img src="https://i.ibb.co/qd3K1Bc/banner2.jpg" style={{height: '864px', width: '1296px'}}/>   
                {/* <img src="https://i.ibb.co/LtfjWwv/banner3.jpg" style={{height: '864px', width: '1296px'}}/>    */}
            </Slider>                
        </div>
    )
}

export default SlickSlider;