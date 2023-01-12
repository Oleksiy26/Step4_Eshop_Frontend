import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import Button from '../../Button'
import Input from '../Input'
import * as yup from 'yup'
import { useDispatch } from 'react-redux'
import { fetchSignIn } from '../../../store/signIn/signIn'

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

  const loginUser = async value => {
    dispatch(fetchSignIn(value))
    navigate('/')
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
            <Button text='Sign in' disabled={!values.name} type='submit' />
          </Form>
        )
      }}
    </Formik>
  )
}

export default SignIn
