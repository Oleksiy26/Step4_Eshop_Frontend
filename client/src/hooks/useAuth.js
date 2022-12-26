import { useCallback, useEffect, useState } from 'react'

const storageName = 'userToken'

export const useAuth = () => {
  const [token, setToken] = useState(null)
  const [ready, setReady] = useState(false)

  const login = useCallback(jwtToken => {
    setToken(jwtToken)

    localStorage.setItem(
      storageName,
      JSON.stringify({
        token: jwtToken
      })
    )
  }, [])

  const logout = useCallback(() => {
    setToken(null)
    localStorage.removeItem(storageName)
  }, [])

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(storageName))

    if (data && data.token) login(data.token)
  }, [login])

  return { login, logout, ready, token }
}
