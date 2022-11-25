import React from 'react';
import { Link } from 'react-router-dom';
import './DiscoverLink.scss';

const DiscoverLink = ({subClass}) => {
  return (
    <div className={`${subClass} set-item4`}>
      <a href="#" className="collection">
        Discover
      </a>
    </div>
  );
};
export default DiscoverLink;

