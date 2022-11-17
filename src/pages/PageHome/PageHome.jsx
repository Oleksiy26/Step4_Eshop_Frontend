import React from "react";
import Banner from "../../components/Banner";
import AboutUs from "./AboutUs";
import Instagram from "./Instagram";
import Menu from "./Menu";

const index = () => {
  return (
    <>
    <Menu/>
    <Banner/>   
    <AboutUs />
    <Instagram />
    </>
  );
};

export default index;