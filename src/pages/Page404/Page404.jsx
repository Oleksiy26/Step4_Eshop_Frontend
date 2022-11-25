import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import './Page404.scss';

function Page404() {
  return (
    <div className="page__content">
      <h1 className='page__title'>404 😢</h1>
      <div className="page__img">
        <img
          src="https://i.ibb.co/XVg4wMx/ard45.jpg"
          alt="girl"
         
        />
      </div>
      <Link to="/">
        <Button text="Go Home" className="page__button"/>
      </Link>
    </div>
  );
}

export default Page404;
