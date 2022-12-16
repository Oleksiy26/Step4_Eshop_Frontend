import React, { useState } from 'react';
import './SortList.scss';

const SortList = () => {
  const [sortActive, setSortActive] = useState(false);
  const [selected, setSelected] = useState();

  const sortOptions = [
    { sortName: 'Price: Low to High', sortProperty: '-price' },
    { sortName: 'Price: High to Low', sortProperty: '+price' },
  ];
  // const sortOption = sortOptions[selected].sortName;
  // console.log(sortOption);

  const onSelected = index => {
    setSelected(index);
    setSortActive(false);
  };

  return (
    <>
      <p className="content-sort" onClick={() => setSortActive(!sortActive)}>
        Sort by <span></span>
      </p>
      {sortActive && (
        <ul className="content-sort-list ">
          {sortOptions.map((item, index) => (
            <li
              className={selected === index ? 'content-sort-item active' : 'content-sort-item'}
              key={index}
              onClick={() => onSelected(index)}
            >
              {item.sortName}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default SortList;
