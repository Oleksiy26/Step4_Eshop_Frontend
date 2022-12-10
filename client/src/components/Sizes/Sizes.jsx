import React from 'react';
import Checkbox from '../Checkbox';
import './Sizes.scss';

const Sizes = () => {
  const sizesArray = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
  return (
    <ul className="page-sizes_list">
      {sizesArray &&
        sizesArray.map((item, index) => {
          return (
            <li className="page-sizes_item" key={index}>
              <Checkbox label={item} id="flexCheckDefault" />
            </li>
          );
        })}
      <p className="more-sizes pseudo">More sizes</p>
    </ul>
  );
};
export default Sizes;
