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

    return (
        <form onSubmit={toSubmit}>
            <div>
                {/*{values.map((val) => {*/}
                {/*    return (*/}
                {/*       <MyInput value={val} changeValue={changeValue} />*/}
                {/*    )*/}
                {/*})}*/}
                {/*<input type="text" value={formValues.firstName} changeValue={changeValue} />*/}
               <MyInput
                   placeholder='firstName'
                   value={formValues.firstName}
                   changeValue={changeValue}
               />
               <MyInput
                   placeholder='lastName'
                   value={formValues.lastName}
                   changeValue={changeValue}
               />
               <MyInput
                   placeholder='login'
                   value={formValues.login}
                   changeValue={changeValue}
               />
               <MyInput
                   placeholder='email'
                   value={formValues.email}
                   changeValue={changeValue}
               />
               <MyInput
                   placeholder='password'
                   value={formValues.password}
                   changeValue={changeValue}
               />
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