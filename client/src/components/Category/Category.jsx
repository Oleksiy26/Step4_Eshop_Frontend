import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Checkbox from '../Checkbox';
import './Category.scss';

const Category = () => {
  const products = useSelector(state => state.products);
  const [categoryArr, setcategoryArr] = useState([]);
  console.log(products.products);

  useEffect(() => {
    const categoryArr = products.products.map(item => item.category);

    console.log(categoryArr);
    const existingCategory = new Set(categoryArr);
    setcategoryArr(Array.from(existingCategory));
  }, [products]);

  return (
    <ul className="page-filter_list">
      {categoryArr &&
        categoryArr.map((item, index) => {
          return (
            <li
              className="page-filter_item"
              key={index}
              // onChange={() => onChangeCategory(categoryName)}
            >
              <Checkbox label={item} id="flexCheckDefault" />
            </li>
          );
        })}
    </ul>
  );
};
export default Category;
