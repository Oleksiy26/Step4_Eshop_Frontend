import React, { useEffect, useState } from 'react';
import Checkbox from '../Checkbox';
import './Colors.scss';
import { useSelector, useDispatch } from 'react-redux';
import { setColor } from '../../store/filter/filterSlice';

const Colors = () => {
  const products = useSelector(state => state.products);
  const [colorsFilters, setColorsFilters] = useState([]);

  const dispatch = useDispatch();
  const color = useSelector(state => state.filter.colorName);

  const handleColorCheckbox = label => {
    const currentIndex = color.indexOf(label);
    const newChecked = [...color];
    if (currentIndex === -1) {
      newChecked.push(label);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    dispatch(setColor(newChecked));
  };

  useEffect(() => {
    const colorsArray = products.products.map(item => item.color);
    const uniqueColors = new Set(colorsArray);
    setColorsFilters(Array.from(uniqueColors));
  }, [products, setColorsFilters]);

  return (
    <ul className="page-colors_list">
      {colorsFilters &&
        colorsFilters.map((item, index) => {
          return (
            <li className="page-colors_item" key={index}>
              <Checkbox
                label={item}
                id="flexCheckDefault"
                colorSquare
                classForSquare={item.toLowerCase()}
                onChangeCheckbox={() => handleColorCheckbox(item)}
              />
            </li>
          );
        })}
    </ul>
  );
};
export default Colors;
