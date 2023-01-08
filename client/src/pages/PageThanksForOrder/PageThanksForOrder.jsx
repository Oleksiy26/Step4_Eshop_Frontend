import React from 'react'
import Button from '../../components/Button/Button'
import styles from './PageThanksForOrder.module.scss'

const PageThanksForOrder = () => {
  return (
    <div className={'container ' + styles.block}>
      <div className={styles.block_img}>
        <img src='https://i.ibb.co/y639BtB/ard9662.jpg' alt='girl' />
      </div>
      <div className={styles.block_img}>
        <img src='https://i.ibb.co/fQmhBH4/ard65.jpg' alt='girl' />
      </div>
      <div className={styles.block_text}>
        <h1>Thanks for the order</h1>
        <Button text='Continue shopping' to='/' />
      </div>
    </div>
  )
}

export default PageThanksForOrder
