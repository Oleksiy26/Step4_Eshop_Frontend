import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import Loader from '../../../components/Loader'
import Title from '../../../components/Title'
import { checkLocation } from '../../../store/location/location'
import ButtonCheckout from '../ButtonCheckout/ButtonCheckout'
import styles from '../PageCart.module.scss'
import { ContainerCart } from '../ContainerCart/ContainerCart'

const SectionOrder = ({ items, totalPrice, check }) => {
  const dispatch = useDispatch()
  const location = useLocation()
  const locationCheckout = useSelector(state => state.location.locationCheckout)
  const cardInCart = useSelector(state => state.cart)
  const token = useSelector(state => state.auth.token)

  useEffect(() => {
    dispatch(checkLocation(location.pathname))
  }, [dispatch, location.pathname])

  return (
    <section
      className={
        !locationCheckout ? styles.section : styles.section + ' checkout'
      }
    >
      <div
        className={
          !locationCheckout
            ? styles.section_products
            : styles.section_products + ' checkout'
        }
      >
        {token ? (
          cardInCart.status === 'loading' ? (
            <Loader />
          ) : (
            <ContainerCart items={items} />
          )
        ) : (
          <ContainerCart items={items} />
        )}
      </div>
      {check ? (
        <div
          className={
            !locationCheckout
              ? styles.section_totaly
              : styles.section_totaly + ' checkout'
          }
        >
          <div className={styles.section_totaly_content}>
            <Title subtitle='Total' />
            <div className={styles.section_totaly_content_price}>
              <p>Total price</p>
              <p>{totalPrice} €</p>
            </div>
            <ButtonCheckout />
          </div>
        </div>
      ) : null}
    </section>
  )
}

export default SectionOrder
