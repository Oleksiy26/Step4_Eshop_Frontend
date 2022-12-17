import React, { useEffect } from 'react'
import { useFetching } from '../../../hooks/useFetching'
import Button from '../../Button';
import Input from "../Input";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup'; 
import { useNavigate } from 'react-router-dom';

const initialValues = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    login: ''
}

const validationSchema = yup.object().shape({
    email: yup
        .string()
        .email("Not an Email")
        .required("Email is a required field")
        .min(8, "Too short"),
    password: yup
        .string()
        .required('No password provided.') 
        .min(8, 'Password is too short'),
    firstName: yup
        .string()
        .required("Name is required"),
    lastName: yup
        .string()
        .required("LastName is required"),
    login: yup
        .string()
        .required("Login is required")
})

const Login = ({changeAfterLogin}) => {
    const { loading, request, error, clearError } = useFetching()

    useEffect(() => {
        clearError()
    }, [error, clearError])

    const registerUser = async (value) => {
        try {
            const data = await request('/api/customers', 'POST', {
                email: value.email,
                password: value.password,
                firstName: value.firstName,
                lastName: value.lastName,
                login: value.login
            })
            changeAfterLogin(false)
        } catch (e) {
            console.log(e)
        }
    }

    const SignInvalues = [
        { placeholder: 'firstName', name: 'firstName' },
        { placeholder: 'lastName', name: 'lastName' },
        { placeholder: 'login', name: 'login' },
        { placeholder: 'email', name: 'email' },
        { placeholder: 'password', name: 'password' },
    ]

    return (
        <Formik initialValues={initialValues} onSubmit={registerUser} validationSchema={validationSchema}>
            {({values}) => {
                return (
                    <Form>
                        {SignInvalues.map((value) => {
                            const { placeholder, name } = value
                            return (
                            <>
                            <Field
                                key={name}
                                name={name}
                                placeholder={placeholder}
                                component={Input}
                                id={name}
                            />                               
                            <span>
                                <ErrorMessage name={name}/>
                            </span>
                            </>
                            )
                        })}
                        <Button
                            text="Create User"
                            disabled={!values.name || loading}
                            type="submit"
                        />
                    </Form>
                )
            }}
        </Formik>
    )
}

export default Login