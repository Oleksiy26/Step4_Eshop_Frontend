import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../components/Button'
import './index.scss'

function Page404() {
  return (
    <div className='container'>
      <div className='page__wrapper'>
        <div className='page__content'>
          <h1 className='page__title'>404</h1>
          <p className='page__text'>Sorry, page was not found.</p>
          <p className='page__text'>
            Choose something else from our catalog{' '}
            <span className='page__text_heart'>&#10084;</span>
          </p>
          <Button
            to='/'
            text='Go to Homepage'
            className='page__button content-button'
          />
        </div>
        <div className='page__img'>
          <img src='https://i.ibb.co/XVg4wMx/ard45.jpg' alt='girl' />
        </div>
        <div className='page__img last'>
          <img src='https://i.ibb.co/QjfvjDV/ard9654.jpg' alt='girl' />
        </div>
      </div>
    </div>
  )
}

export default Page404
