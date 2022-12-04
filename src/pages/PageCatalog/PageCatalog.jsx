import React from 'react';
import { useState } from 'react';
import TitleBig from '../../components/TitleBig';
import TitleSmall from '../../components/TitleSmall';
import Button from '../../components/Button';
import ProductCard from '../../components/ProductCard';
import SortList from '../../components/SortList';
import { useSelector } from 'react-redux';

import './PageCatalog.scss';

const PageCatalog = () => {
  const products = useSelector((state) => state.products);
  const sortOptions = [
    { value: 'Featured' },
    { value: 'Price: Low to High' },
    { value: 'Price: High to Low' },
    { value: 'Costumer Review' },
    { value: 'Newest Arrivals' },
  ];

  const [sortActive, setSortActive] = useState(false);

  const handleSortOptions = () => setSortActive(!sortActive);

  return (
    <div className="container page">
      <nav className="page-nav">
        <ul className="page-nav_list">
          <li className="page-nav_item">Home</li>
          <li className="page-nav_item">Catalogue</li>
        </ul>
      </nav>
      <TitleBig subtitle="Catalogue" />
      <div className="page-wrapper">
        <aside className="page-sidebar">
          <TitleSmall title="Category" />
          <ul className="page-filter_list">
            <li className="page-filter_item">
              <div className="form-check">
                <input
                  className="form-check-input  "
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" for="flexCheckDefault">
                  Lingerie
                </label>
              </div>
            </li>
            <li className="page-filter_item">
              <div className="form-check">
                <input
                  className="form-check-input  "
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" for="flexCheckDefault">
                  Swimwear
                </label>
              </div>
            </li>
            <li className="page-filter_item">
              <div className="form-check">
                <input
                  className="form-check-input  "
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" for="flexCheckDefault">
                  Homewear
                </label>
              </div>
            </li>
          </ul>
          <TitleSmall title="Colors" />
          <ul className="page-colors_list">
            <li className="page-colors_item">
              <div className="form-check">
                <input
                  className="form-check-input  "
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" for="flexCheckDefault">
                  <div className="color-square black"></div> Black
                </label>
              </div>
            </li>
            <li className="page-colors_item">
              <div className="form-check">
                <input
                  className="form-check-input  "
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" for="flexCheckDefault">
                  <div className="color-square white"></div> White
                </label>
              </div>
            </li>
            <li className="page-colors_item">
              <div className="form-check">
                <input
                  className="form-check-input  "
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" for="flexCheckDefault">
                  <div className="color-square creme"></div> Creme
                </label>
              </div>
            </li>
            <li className="page-colors_item">
              <div className="form-check">
                <input
                  className="form-check-input  "
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" for="flexCheckDefault">
                  <div className="color-square beige"></div> Beige
                </label>
              </div>
            </li>
            <li className="page-colors_item">
              <div className="form-check">
                <input
                  className="form-check-input  "
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" for="flexCheckDefault">
                  <div className="color-square red"></div> Red
                </label>
              </div>
            </li>
            <li className="page-colors_item">
              <div className="form-check">
                <input
                  className="form-check-input  "
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" for="flexCheckDefault">
                  <div className="color-square gray"></div> Gray
                </label>
              </div>
            </li>
            <li className="page-colors_item">
              <div className="form-check">
                <input
                  className="form-check-input  "
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" for="flexCheckDefault">
                  <div className="color-square darkred"></div> DarkRed
                </label>
              </div>
            </li>
            <p className="more-colors pseudo colors">More colors</p>
          </ul>
          <TitleSmall title="Sizes" />
          <ul className="page-sizes_list">
            <li className="page-sizes_item">
              <div className="form-check">
                <input
                  className="form-check-input  "
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" for="flexCheckDefault">
                  XS
                </label>
              </div>
            </li>
            <li className="page-sizes_item">
              <div className="form-check">
                <input
                  className="form-check-input  "
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" for="flexCheckDefault">
                  S
                </label>
              </div>
            </li>
            <li className="page-sizes_item">
              <div className="form-check">
                <input
                  className="form-check-input  "
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" for="flexCheckDefault">
                  M
                </label>
              </div>
            </li>
            <li className="page-sizes_item">
              <div className="form-check">
                <input
                  className="form-check-input  "
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" for="flexCheckDefault">
                  L
                </label>
              </div>
            </li>
            <li className="page-sizes_item">
              <div className="form-check">
                <input
                  className="form-check-input  "
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" for="flexCheckDefault">
                  XL
                </label>
              </div>
            </li>
            <li className="page-sizes_item">
              <div className="form-check">
                <input
                  className="form-check-input  "
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" for="flexCheckDefault">
                  XXL
                </label>
              </div>
            </li>
            <p className="more-sizes pseudo sizes">More sizes</p>
          </ul>
          <Button text="Filter" className="page__button content-button" />
        </aside>
        <section className="content">
          <p className="content-sort" onClick={handleSortOptions}>
            Sort by
          </p>

          <SortList
            active={sortActive}
            setActive={setSortActive}
            sortOptions={sortOptions}
          />

          <ul className="content-list">
            {products.length !== 0 ? (
              <>
                {products.slice(0, 12).map((item) => (
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
