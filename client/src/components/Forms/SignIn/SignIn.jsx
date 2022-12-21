import React, { useContext, useEffect } from 'react'
import { useFetching } from '../../../hooks/useFetching'
import { AuthContext } from '../../../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Button from '../../Button';
import Input from '../Input';
import * as yup from 'yup'; 
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../../store/tokenWork/tokenWork';
import { fetchSignIn } from '../../../store/signIn/signIn';


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
    const dispatch = useDispatch();
    const token = useSelector((state) => state.signIn.signIn)

    useEffect(() => {
        clearError()
    }, [error, clearError])


    const loginUser = async (value) => {
        dispatch(fetchSignIn(value)) 
        
        // console.log(token);
        navigate('/')
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