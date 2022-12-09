import React from "react";
import { Route, Routes } from "react-router-dom";
import PageFav from "../pages/PageFav";
import PageHome from "../pages/PageHome";
import PageCatalog from "../pages/PageCatalog";
import Page404 from "../pages/Page404";
import PageCart from "../pages/PageCart";
import { PageItem } from "../pages/PageItem/PageItem";

const Rout = () => {
  return (
    <Routes>
      <Route exact="true" path="/" element={<PageHome />} />
      <Route exact="true" path="/catalog" element={<PageCatalog />} />
      <Route exact="true" path="/fav" element={<PageFav />} />
      <Route exact="true" path="/cart" element={<PageCart />} />
      <Route exact="true" path="/:id" element={<PageItem />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};

export default Rout;
