import React from 'react';
import './SortList.scss';

const SortList = ({ sortOptions, active, setActive }) => {
  return (
    <ul className={active ? 'content-sort-list active' : 'content-sort-list '}>
      {sortOptions.map((item, index) => (
        <li
          className="content-sort-item"
          key={index}
          onClick={(e) => e.stopPropagation()}
        >
          {item.value}
        </li>
      ))}
    </ul>
  );
};
export default SortList;
