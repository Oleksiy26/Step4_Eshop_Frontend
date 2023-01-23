import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import Button from '../../Button'
import Input from '../Input'
import * as yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useState } from 'react'
import styles from './PersonalInfo.module.scss'
import { fetchUpdateUser } from '../../../store/user/userSlice'

const validationSchema = yup.object().shape({
  name: yup.string().required('Is required'),
  password: yup
    .string()
    .required('No password provided.')
    .min(8, 'Password is too short')
})

const PersonalInfo = () => {
  const dispatch = useDispatch()
  const userInfo = useSelector(state => state.user.info)
  const { statusUpdate } = useSelector(state => state.user)
  const initialValues = {}
  const [visibleError, setVisibleError] = useState(false)

  useEffect(() => {
    setVisibleError(false)
    console.log(userInfo)
    if (statusUpdate === 'rejected') {
      setVisibleError(true)
    }
  }, [statusUpdate])

  const updateValues = value => {
    dispatch(fetchUpdateUser(value))
  }

  const personalValues = [
    {
      placeholder: `${userInfo.firstName}`,
      name: 'firstName',
      value: `${userInfo.firstName}`
    },
    { placeholder: `${userInfo.lastName}`, name: 'lastName' },
    { placeholder: `${userInfo.email}`, name: 'email' },
    {
      placeholder: `${userInfo.telephone ? userInfo.telephone : 'telephone'}`,
      name: 'telephone'
    }
  ]

  return (
    userInfo && (
      <Formik
        initialValues={initialValues}
        onSubmit={updateValues}
        //   validationSchema={validationSchema}
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
                    Something went wrong. Try again
                  </p>
                )}
                <Button
                  text='Update info'
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

export default PersonalInfo
