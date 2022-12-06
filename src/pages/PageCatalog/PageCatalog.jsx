import React, { useState } from 'react';
import Button from '../../components/Button';
import Galery from '../../components/Galery';
import SortList from '../../components/SortList';

import './PageCatalog.scss';
import Title from '../../components/Title/Title';
import Category from '../../components/Category';
import Colors from '../../components/Colors';
import Sizes from '../../components/Sizes';

const PageCatalog = () => {
  const [sortActive, setSortActive] = useState(false);
  const [numOfElem, setnumOfElem] = useState(12);

  const hadlerSortBtn = () => {
    setSortActive(!sortActive);
  };

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
          <p className="content-sort" onClick={hadlerSortBtn}>
            Sort by
          </p>
          <SortList active={sortActive} setActive={setSortActive} />
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
