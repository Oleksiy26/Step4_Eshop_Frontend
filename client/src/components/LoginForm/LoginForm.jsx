import React, { useContext, useEffect, useState } from 'react'
import { useFetching } from '../../hooks/useFetching'
import MyInput from "../MyInput/MyInput";
// import { AuthContext } from '../../context/AuthContext'

const Form = () => {
    const [formValues, setFormValues] = useState({
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        login: '',
    })
    const { loading, request, error, clearError } = useFetching()
    // const auth = useContext(AuthContext)

    useEffect(() => {
        // console.log(error)
        clearError()
    }, [error, clearError])

    const changeValue = (event) => {
        setFormValues({ ...formValues, [event.target.name]: event.target.value })
    }

    const toSubmit = (event) => {
        event.preventDefault()
    }

    const registerUser = async () => {
        try {
            const data = await request('/api/customers', 'POST', {
                ...formValues,
            })
            setFormValues({
                email: '',
                firstName: '',
                password: '',
                login: '',
                lastName: '',
            })
            // console.log(data.message)
        } catch (e) {}
    }

    const values = [
        {valueOfInput: formValues.firstName, placeholder: 'firstName', name: 'firstName' },
        {valueOfInput: formValues.lastName, placeholder: 'lastName', name: 'lastName' },
        {valueOfInput: formValues.login, placeholder: 'login', name: 'login' },
        {valueOfInput: formValues.email, placeholder: 'email', name: 'email' },
        {valueOfInput: formValues.password, placeholder: 'password', name: 'password' },
    ]

    return (
        <form onSubmit={toSubmit}>
            <div>
                {values.map((val) => {
                    const { valueOfInput, placeholder, name } = val
                    return (
                       <MyInput
                           key={placeholder}
                           name={name}
                           placeholder={placeholder}
                           value={valueOfInput}
                           changeValue={changeValue}
                       />
                    )
                })}
                <button
                    style={{ marginTop: '35px' }}
                    disabled={loading}
                    onClick={registerUser}
                >
                    Create User
                </button>
            </div>
        </form>
    )
}
export default Form