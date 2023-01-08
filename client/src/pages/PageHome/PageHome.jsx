import React, { useEffect } from 'react';
import Banner from '../../components/Banner';
import PerfectSet from './PerfectSet';
import Sales from './Sales';
import AboutUs from './AboutUs';
import Instagram from './Instagram';
import Menu from './Menu';
import { useDispatch, useSelector } from 'react-redux';
import { checkLocation } from '../../store/location/location';
import { useLocation } from 'react-router-dom';

const PageHome = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const products = useSelector(state => state.products.products);

  useEffect(() => {
    dispatch(checkLocation(location.pathname));
  }, []);

  return (
    <>
      <Menu />
      <Banner />
      <PerfectSet products={products} />
      <Sales products={products} />
      <AboutUs />
      <Instagram />
    </>
  );
};

export default PageHome;
