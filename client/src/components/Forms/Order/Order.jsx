import React, { useEffect } from 'react'
import Button from '../../Button'
import Input from '../Input'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup'
import PropTypes from 'prop-types'
import Title from '../../Title'
import styles from './Order.module.scss'

const initialValues = {
  email: '',
  phone: '',
  country: '',
  city: '',
  zipCode: '',
  adress: ''
}

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Not an Email')
    .required('Email is a required field')
    .min(8, 'Too short'),
  phone: yup.number().required('Phone is required'),
  country: yup.string().required('Country is required'),
  city: yup.string().required('Sity is required'),
  zipCode: yup.number().required('ZIP Code is required').min(4, 'Too short'),
  adress: yup.string().required('Adress is required')
})

const Order = ({ createOrder }) => {
  const sendValue = value => {
    return value
  }

  const PersonalDetails = [
    { placeholder: 'Email', name: 'email' },
    { placeholder: 'Phone', name: 'phone' }
  ]
  const ShippingInformation = [
    { placeholder: 'Country', name: 'country' },
    { placeholder: 'City', name: 'city' },
    { placeholder: 'ZIP Code', name: 'zipCode' },
    { placeholder: 'Adress', name: 'adress' }
  ]

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={createOrder}
      validationSchema={validationSchema}
      createOrder={sendValue}
    >
      {({ values }) => {
        return (
          <Form>
            <Title title='personal details' />
            <div className={styles.block}>
              {PersonalDetails.map(value => {
                const { placeholder, name } = value
                return (
                  <div className={styles.block_input}>
                    <Field
                      key={name}
                      name={name}
                      placeholder={placeholder}
                      component={Input}
                      id={name}
                    />
                    <span>
                      <ErrorMessage name={name} />
                    </span>
                  </div>
                )
              })}
            </div>
            <Title title='shipping information' />
            <div className={styles.block}>
              {ShippingInformation.map(value => {
                const { placeholder, name } = value
                return (
                  <div className={styles.block_input} key={name}>
                    <Field
                      name={name}
                      placeholder={placeholder}
                      component={Input}
                      id={name}
                    />
                    <span>
                      <ErrorMessage name={name} />
                    </span>
                  </div>
                )
              })}
            </div>
            <Button text='Create' type='submit' disabled={!values.name} />
          </Form>
        )
      }}
    </Formik>
  )
}

Order.propTypes = {
  createOrder: PropTypes.func
}

Order.defaultProps = {
  createOrder: () => {}
}

export default Order
