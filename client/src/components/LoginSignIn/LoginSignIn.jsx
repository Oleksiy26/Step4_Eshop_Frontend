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

    const loginValues = [
        {valueInput: loginForm.loginOrEmail, placeholder: 'loginOrEmail', name: 'loginOrEmail' },
        {valueInput: loginForm.password, placeholder: 'password', name: 'password' },
    ]

    return (
        <div>
            <form onSubmit={toSubmit}>
                <div>
                     {/*new login*/}
                    {loginValues.map((value) => {
                        const { valueInput, placeholder, name } = value
                        return (
                            <MyInput
                                key={placeholder}
                                name={name}
                                placeholder={placeholder}
                                value={valueInput}
                                changeValue={changeLoginValues}
                            />
                        )
                    })}
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