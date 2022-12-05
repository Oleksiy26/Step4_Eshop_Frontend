import React from 'react';
import Checkbox from '../Checkbox';
import './Category.scss';

const Colors = ({ colorsArray }) => {
  return (
    <ul className="page-colors_list">
      {colorsArray &&
        colorsArray.map((item, index) => {
          return (
            <li className="page-colors_item" key={index}>
              <Checkbox
                label={item}
                id="flexCheckDefault"
                colorSquare
                classForSquare={item.toLowerCase()}
              />
            </li>
          );
        })}
      <p className="more-colors pseudo">More colors</p>
    </ul>
  );
};
export default Colors;
