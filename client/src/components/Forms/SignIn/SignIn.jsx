import React, { useContext, useEffect } from 'react'
import { useFetching } from '../../../hooks/useFetching'
import { AuthContext } from '../../../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Button from '../../Button';
import Input from '../Input';
import * as yup from 'yup'; 


const initialValues = {
    loginOrEmail: '',
    password: ''
}

const validationSchema = yup.object().shape({
    loginOrEmail: yup
            .string()
            .required("Is required"),
    password: yup
            .string()
            .required('No password provided.') 
            .min(8, 'Password is too short')
})

const SignIn = () => {
    const { loading, request, error, clearError } = useFetching()
    const navigate = useNavigate()
    const auth = useContext(AuthContext)

    useEffect(() => {
        clearError()
    }, [error, clearError])


    const loginUser = async (value) => {
        try {
            const data = await request('/api/customers/login', 'POST', {
                loginOrEmail: value.loginOrEmail,
                password: value.password
            })
            console.log(data.token)
            auth.login(data.token)
            navigate('/')
        } catch (e) {
            console.log(e)
        }  
    }

    const loginValues = [
        { placeholder: 'Login Or Email', name: 'loginOrEmail' },
        { placeholder: 'Password', name: 'password' },
    ]

    return (
        <Formik initialValues={initialValues} onSubmit={loginUser} validationSchema={validationSchema}>
            {({values}) => {
                return (
                    <Form>
                        {loginValues.map((value) => {
                            const { placeholder, name } = value
                            return (
                                <>
                                <Field
                                    key={name}
                                    name={name}
                                    placeholder={placeholder}
                                    id={name}
                                    component={Input}
                                />
                                <span>
                                    <ErrorMessage name={name}/>
                                </span>
                                </>
                            )
                        })}
                        <Button
                            text="Sign in"
                            disabled={!values.name || loading}
                            type="submit"
                        />
                    </Form>
                )
            }}
        </Formik>
    )
}

export default SignIn