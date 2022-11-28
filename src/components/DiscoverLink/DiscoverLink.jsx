import React from 'react';
import { Link } from 'react-router-dom';
import './DiscoverLink.scss';

const DiscoverLink = ({ subClass }) => {
  return (
    <div className={`${subClass} set-item4`}>
      <Link to="/catalog" className="collection">
        Discover
      </Link>
    </div>
  );
};
export default DiscoverLink;
