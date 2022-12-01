import React from 'react';
import { Route, Routes } from 'react-router';
import PageFav from '../pages/PageFav';
import PageHome from '../pages/PageHome';
import PageCatalog from '../pages/PageCatalog';
import Page404 from '../pages/Page404';

const Rout = () => {    
    return (
      <Routes>
        <Route exact="true" path="/" element={<PageHome />} />
        <Route exact="true" path="/catalog" element={<PageCatalog />} />
        <Route exact="true" path="/fav" element={<PageFav />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    );
}

export default Rout;