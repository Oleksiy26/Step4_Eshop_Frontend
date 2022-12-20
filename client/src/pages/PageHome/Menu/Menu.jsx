import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Menu.module.scss';

const Menu = () => {
  return (
    <div className={styles.menu}>
      <NavLink to="/">New lingerie</NavLink>
      <NavLink to="/">Sales</NavLink>
      <NavLink to="/">Profile</NavLink>
      <NavLink to="/catalog">Catalogue</NavLink>
      <NavLink to="/">Contact</NavLink>
    </div>
  );
};

export default Menu;
