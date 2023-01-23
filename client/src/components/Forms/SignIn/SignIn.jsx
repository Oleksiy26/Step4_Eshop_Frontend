import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import Button from '../../Button'
import Input from '../Input'
import * as yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSignIn } from '../../../store/signIn/signIn'
import { useEffect } from 'react'
import { useState } from 'react'
import { fetchAddToCart, fetchGetAllFromCart } from '../../../store/cart/cart'

const initialValues = {
  loginOrEmail: '',
  password: ''
}

const validationSchema = yup.object().shape({
  loginOrEmail: yup.string().required('Is required'),
  password: yup
    .string()
    .required('No password provided.')
    .min(8, 'Password is too short')
})

const SignIn = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { status } = useSelector(state => state.signIn)
  const [visibleError, setVisibleError] = useState(false)

  useEffect(() => {
    if (status === 'rejected') {
      setVisibleError(true)
    } else if (status === 'resolved') {
      navigate('/')
    }
  }, [status])

  const loginUser = value => {
    dispatch(fetchSignIn(value))
  }

  const loginValues = [
    { placeholder: 'Login Or Email', name: 'loginOrEmail' },
    { placeholder: 'Password', name: 'password' }
  ]

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={loginUser}
      validationSchema={validationSchema}
    >
      {({ values }) => {
        return (
          <Form>
            {loginValues.map(value => {
              const { placeholder, name } = value
              return (
                <div key={name}>
                  <Field
                    name={name}
                    placeholder={placeholder}
                    id={name}
                    component={Input}
                  />
                  <span>
                    <ErrorMessage name={name} />
                  </span>
                </div>
              )
            })}
            {visibleError && (
              <span style={{ color: 'red' }}>
                Wrong login or password. Try again.
              </span>
            )}
            <Button text='Sign in' disabled={!values.name} type='submit' />
          </Form>
        )
      }}
    </Formik>
  )
}

export default SignIn
