import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Checkbox from '../Checkbox';
import './Collection.scss';

const Collection = ({ value, onChangeCategory }) => {
  const products = useSelector((state) => state.products);
  const [collectionArr, setcollectionArr] = useState([]);

  useEffect(() => {
    const collectionArr = products.products.map((item) => item.collection);
    const existingCollection = new Set(collectionArr);
    setcollectionArr(Array.from(existingCollection));
  }, [products]);

  return (
    <ul className="page-filter_list">
      {collectionArr &&
        collectionArr.map((categoryName, index) => {
          return (
            <li
              className="page-filter_item"
              key={index}
              onChange={() => onChangeCategory(categoryName)}
            >
              <Checkbox label={categoryName} id="flexCheckDefault" />
            </li>
          );
        })}
    </ul>
  );
};
export default Collection;
