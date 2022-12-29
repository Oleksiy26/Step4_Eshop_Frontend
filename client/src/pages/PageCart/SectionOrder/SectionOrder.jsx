import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import Title from '../../../components/Title'
import { checkLocation } from '../../../store/location/location'
import ButtonCheckout from '../ButtonCheckout/ButtonCheckout'
import ContainerCart from '../ContainerCart'
import styles from '../PageCart.module.scss'

const SectionOrder = ({ items, totalPrice, check }) => {
  const dispatch = useDispatch()
  const location = useLocation()
  const locationCheckout = useSelector(state => state.location.locationCheckout)

  useEffect(() => {
    dispatch(checkLocation(location.pathname))
  }, [dispatch])

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
        <ContainerCart items={items} />
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
