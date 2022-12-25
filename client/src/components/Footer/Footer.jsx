import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Footer.module.scss'
import { ReactComponent as Logo } from './svg/logo.svg'

const addresses = [
  '21 Vasilkivska Street, 40611',
  'Kyiv, Ukraine',
  '098 954 11 22',
  'femlingeriesoul@fems.ua',
]

const collections = [
  { option: 'Collections', link: '/' },
  { option: 'Catalogue', link: '/' },
  { option: 'Gift cards', link: '/' },
  { option: 'Garment care', link: '/' },
]

const categories = [
  { option: 'Size guide', link: '/' },
  { option: 'Garment care', link: '/' },
  { option: 'Shipping  Returns', link: '/' },
  { option: 'Delivery', link: '/' },
  { option: 'Contact', link: '/' },
]

const media = [
  { option: 'INSTAGRAM', link: '/' },
  { option: 'FACEBOOK', link: '/' },
  { option: 'TWITTER', link: '/' },
]

const Footer = () => {
  return (
    <footer>
      <div className={styles.container}>
        <div className={styles.footer__block}>
          <Logo />
          <div className={styles.footer__block_list}>
            {addresses.map((address) => {
              return <p key={address}> {address} </p>
            })}
          </div>
        </div>
        <div className={styles.footer__block}>
          <h3>Shop</h3>
          <div className={styles.footer__block_list}>
            {collections.map((collection) => {
              const { option, link } = collection
              return (
                <NavLink key={option} to={link}>
                  {' '}
                  {option}{' '}
                </NavLink>
              )
            })}
          </div>
        </div>
        <div className={styles.footer__block}>
          <h3>Customer service</h3>
          <div className={styles.footer__block_list}>
            {categories.map((category) => {
              const { option, link } = category
              return (
                <NavLink key={option} to={link}>
                  {' '}
                  {option}{' '}
                </NavLink>
              )
            })}
          </div>
        </div>
        <div className={styles.footer__block}>
          <h3>Social</h3>
          <div className={styles.footer__block_list}>
            {media.map((networks) => {
              const { option, link } = networks
              return (
                <NavLink key={option} to={link}>
                  {' '}
                  {option}{' '}
                </NavLink>
              )
            })}
          </div>
          <p>2022 FEM lingerie</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
