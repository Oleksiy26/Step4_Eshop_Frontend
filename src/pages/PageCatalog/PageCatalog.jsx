import React, { useEffect, useState } from 'react';
import Button from '../../components/Button';
import ProductCard from '../../components/ProductCard';
import SortList from '../../components/SortList';
import { useSelector } from 'react-redux';

import './PageCatalog.scss';
import Title from '../../components/Title/Title';
import Category from '../../components/Category';
import Colors from '../../components/Colors';
import Sizes from '../../components/Sizes';

const PageCatalog = () => {
  const products = useSelector((state) => state.products);
  const [sortActive, setSortActive] = useState(false);

  const categoryArray = ['Lingerie', 'Swimwear', 'Homewear'];
  const colorsArray = [
    'Black',
    'White',
    'Creme',
    'Beige',
    'Red',
    'Gray',
    'DarkRed',
  ];
  const sizesArray = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

  const sortOptions = [
    { value: 'Featured' },
    { value: 'Price: Low to High' },
    { value: 'Price: High to Low' },
    { value: 'Costumer Review' },
    { value: 'Newest Arrivals' },
  ];

  const hadlerSortBtn = () => {
    setSortActive(!sortActive);
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
          <Category categoryArray={categoryArray} />
          <Title title="Colors" />
          <Colors  />
          <Title title="Sizes" />
          <Sizes sizesArray={sizesArray} />
          <Button text="Filter" className="page__button content-button" />
        </aside>
        <section className="content cards">
          <p className="content-sort" onClick={hadlerSortBtn}>
            Sort by
          </p>

          <SortList
            active={sortActive}
            setActive={setSortActive}
            sortOptions={sortOptions}
          />

          <ul className="content-list">
            {products.length ? (
              <>
                {products.products.slice(0, 12).map((item) => (
                  <li>
                    <ProductCard
                      price={item.price}
                      photoUrl={item.imageUrls[0]}
                      // subClass={'image-wrapper'}
                      key={item._id}
                      id={item._id}
                    />
                  </li>
                ))}
              </>
            ) : null}
          </ul>
        </section>
        <Button
          text="Load more beauty"
          className="page__button content-button"
        />
      </div>
    </div>
  );
};

export default PageCatalog;
