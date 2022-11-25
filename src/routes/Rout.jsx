import React from 'react';
import { Route, Routes } from 'react-router';
import PageHome from '../pages/PageHome';
import Page404 from '../pages/Page404';

const Rout = () => {    
    return (
      <Routes>
        <Route exact="true" path="/" element={<PageHome />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    );
}

export default Rout;