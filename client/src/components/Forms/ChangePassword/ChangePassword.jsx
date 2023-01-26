import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import Button from '../../Button'
import Input from '../Input'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useState } from 'react'
import { fetchChangePassword } from '../../../store/user/userSlice'
import styles from './ChangePassword.module.scss'
import * as yup from 'yup'

const validationSchema = yup.object().shape({
  newPassword: yup
    .string()
    .required('No password provided.')
    .min(8, 'Password is too short'),
  password: yup.string().required('No password provided.')
})

const ChangePassword = () => {
  const dispatch = useDispatch()
  const userInfo = useSelector(state => state.user.info)
  const { statusChangePass } = useSelector(state => state.user)
  const [visibleError, setVisibleError] = useState(false)
  const [visibleResolve, setVisibleResolve] = useState(false)

  const initialValues = { newPassword: '', password: '' }

  useEffect(() => {
    setVisibleError(false)
    setVisibleResolve(false)
    if (statusChangePass === 'rejected') {
      setVisibleError(true)
    } else if (statusChangePass === 'resolved') {
      setVisibleError(false)
      setVisibleResolve(true)
    }
  }, [statusChangePass])

  const updateValues = value => {
    dispatch(fetchChangePassword(value))
  }

  const personalValues = [
    {
      placeholder: 'Old password',
      name: 'password'
    },
    { placeholder: 'New password', name: 'newPassword' }
  ]

  return (
    userInfo && (
      <Formik
        initialValues={initialValues}
        onSubmit={updateValues}
        validationSchema={validationSchema}
      >
        {({ values }) => {
          return (
            <Form className={styles.form}>
              {personalValues.map(value => {
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
              <div className={styles.block}>
                {visibleError && (
                  <p style={{ color: 'red' }}>
                    Something went wrong. Try again.
                  </p>
                )}
                {visibleResolve && <p>Password was change</p>}
                <Button
                  text='Change Password'
                  disabled={!values.name}
                  type='submit'
                />
              </div>
            </Form>
          )
        }}
      </Formik>
    )
  )
}

export default ChangePassword
