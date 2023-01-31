import React, { useEffect } from 'react'
import Button from '../../Button'
import Input from '../Input'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup'
import PropTypes from 'prop-types'
import Title from '../../Title'
import styles from './Order.module.scss'
import { useSelector } from 'react-redux'

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
  const userInfo = useSelector(state => state.user.info)
  const initialValues = {
    email: userInfo.email,
    phone: userInfo.telephone,
    country: '',
    city: '',
    zipCode: '',
    adress: ''
  }
  const PersonalDetails = [
    {
      placeholder: `${userInfo.email}`,
      name: 'email',
      value: `${userInfo.email}`
    },
    {
      placeholder: `${userInfo.telephone ? userInfo.telephone : 'telephone'}`,
      name: 'phone',
      value: `${userInfo.telephone ? userInfo.telephone : null}`
    }
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
      enableReinitialize={true}
    >
      {({ values }) => {
        return (
          <Form>
            <Title title='personal details' />
            <div className={styles.block}>
              {PersonalDetails.map(values => {
                const { placeholder, name, value } = values
                return (
                  <div className={styles.block_input} key={name}>
                    <Field
                      key={name}
                      name={name}
                      placeholder={placeholder}
                      component={Input}
                      id={name}
                      value={value}
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
            <Button
              text='Make an order'
              type='submit'
              disabled={!values.name}
            />
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
