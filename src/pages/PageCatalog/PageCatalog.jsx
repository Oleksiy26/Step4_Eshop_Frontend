import React, { useState } from 'react';
import Button from '../../components/Button';
import ProductCard from '../../components/ProductCard';
import { useSelector } from 'react-redux';
import './PageCatalog.scss';
import Title from '../../components/Title/Title';
import Checkbox from '../../components/Checkbox';

const PageCatalog = () => {
  const products = useSelector((state) => state.products);
  const [sorlList, setSortList] = useState(false);

  const categoryArray = ["Lingerie", "Swimwear", "Homewear"];
  const colorsArray = ["Black", "White", "Creme", "Beige", "Red", "Gray", "DarkRed"];
  const sizesArray = ["XS", "S", "M", "L", "XL", "XXL"];

  const cklikOnSort = () => {
    setSortList(!sorlList);
  }

  return (
    <div className="container page">
      <nav className="page-nav">
        <ul className="page-nav_list">
          <li className="page-nav_item">Home</li>
          <li className="page-nav_item">Catalogue</li>
        </ul>
      </nav>
      <Title subtitle="Catalogue"/>
      <div className="page-wrapper">
        <aside className="page-sidebar">
          <Title title="Category" />
          <ul className="page-filter_list">
            {categoryArray && categoryArray.map((item, index) => {
              return (
                <li key={index}>
                  <Checkbox label={item} id="flexCheckDefault"/>
                </li>
                )
              })
            }
          </ul>
          <Title title="Colors"/>
          <ul className="page-colors_list">
          {colorsArray && colorsArray.map((item, index) => {
              return (
                <li key={index}>
                  <Checkbox label={item} id="flexCheckDefault" colorSquare classForSquare={item.toLowerCase()}/>
                </li>
                )
              })
            }
            <p className="more-colors pseudo">More colors</p>
          </ul>
          <Title title="Sizes"/>
          <ul className="page-sizes_list">
          {sizesArray && sizesArray.map((item, index) => {
              return (
                <li key={index}>
                  <Checkbox label={item} id="flexCheckDefault"/>
                </li>
                )
              })
            }
            <p className="more-sizes pseudo">More sizes</p>
          </ul>
          <Button text="Filter" className="page__button content-button" />
        </aside>
        <section className="content cards">
          <p className="content-sort" onClick={()=>cklikOnSort()}>Sort by </p>

          {sorlList && 
            <ul className="content-sort-list">
              <li className="content-sort-item">Featured</li>
              <li className="content-sort-item">Price: Low to High</li>
              <li className="content-sort-item">Price: High to Low</li>
              <li className="content-sort-item">Costumer Review</li>
              <li className="content-sort-item">Newest Arrivals</li>
            </ul>
          }
          
          <ul className="content-list">
            {products.length !== 0 ? (
              <>
                {products.slice(0, 12).map((item) => (
                  <>
                    <ProductCard
                      price={item.price}
                      photoUrl={item.imageUrls[0]}
                      // subClass={'image-wrapper'}
                      key={item._id}
                      id={item._id}
                    />
                  </>
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