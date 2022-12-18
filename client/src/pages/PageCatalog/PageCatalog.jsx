import React, { useState, useEffect } from 'react';
import Button from '../../components/Button';
import Galery from '../../components/Galery';
import SortList from '../../components/SortList';
import { useSelector, useDispatch } from 'react-redux';
import './PageCatalog.scss';
import Title from '../../components/Title/Title';
import Category from '../../components/Category';
import Colors from '../../components/Colors';
import Sizes from '../../components/Sizes';

const PageCatalog = () => {
  const [numOfElem, setnumOfElem] = useState(12);

  const LoadMore = () => {
    setnumOfElem(numOfElem + 3);
  };

  return (
    <div className="container page">
      <nav className="page-nav">
        <ul className="page-nav_list">
          <li className="page-nav_item">Home</li>
          <li className="page-nav_item">Catalogue</li>
        </ul>
      </nav>
      <Title subtitle="Catalogue" />
      <div className="page-wrapper">
        <aside className="page-sidebar">
          <Title title="Category" />
          <Category />
          <Title title="Colors" />
          <Colors />
          <Title title="Sizes" />
          <Sizes />
          <Button text="Filter" className="page__button content-button" />
        </aside>
        <section className="content cards">
          <SortList />
          <Galery numOfElem={numOfElem} />
        </section>
        <Button
          text="Load more beauty"
          className="page__button content-button"
          onClick={LoadMore}
        />
      </div>
    </div>
  );
};

export default PageCatalog;
