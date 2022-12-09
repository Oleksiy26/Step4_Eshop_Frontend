import React, { useContext, useEffect, useState } from 'react'
import { useFetching } from '../../hooks/useFetching'
import { AuthContext } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import MyInput from "../MyInput/MyInput";

const LoginSignIn = () => {
    const [loginForm, setLoginForm] = useState({
        loginOrEmail: '',
        password: '',
    })
    const { loading, request, error, clearError } = useFetching()
    const navigate = useNavigate()
    const auth = useContext(AuthContext)

    useEffect(() => {
        // console.log(error)
        clearError()
    }, [error, clearError])

    const toSubmit = (event) => {
        event.preventDefault()
    }

    const changeLoginValues = (event) => {
        setLoginForm({ ...loginForm, [event.target.name]: event.target.value })
    }

    const loginUser = async () => {
        try {
            const data = await request('/api/customers/login', 'POST', {
                ...loginForm,
            })
            console.log(data.token)
            auth.login(data.token)
            navigate('/')
            setLoginForm({ loginOrEmail: '', password: '' })
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <div>
            <form onSubmit={toSubmit}>
                <div>
                    {/*{loginValues.map((value) => {*/}
                    {/*    return (*/}
                    {/*        <MyInput value={value} changeValue={changeLoginValues} />*/}
                    {/*    )*/}
                    {/*})}*/}
                    <MyInput value={loginForm.loginOrEmail} changeValue={changeLoginValues} />
                    <MyInput value={loginForm.password} changeValue={changeLoginValues} />
                    <button
                        style={{ marginTop: '35px' }}
                        disabled={loading}
                        onClick={loginUser}
                    >
                        Sign In
                    </button>
                </div>
            </form>
        </div>
    )
}

export default LoginSignIn