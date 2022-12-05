import React from 'react';
import Checkbox from '../Checkbox';
import './Category.scss';

const Category = ({ categoryArray, active, setActive }) => {
  return (
    <ul className="page-filter_list">
      {categoryArray &&
        categoryArray.map((item, index) => {
          return (
            <li className="page-filter_item" key={index}>
              <Checkbox label={item} id="flexCheckDefault" />
            </li>
          );
        })}
    </ul>
  );
};
export default Category;
