import { useState, useCallback } from 'react'
// import axios from 'axios'

export const useFetching = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const request = useCallback(
        async (url, method = 'GET', body = null, headers = {}) => {
            setLoading(true)
            try {
                if (body) {
                    body = JSON.stringify(body)
                    headers['Content-Type'] = 'application/json'
                }

                // const response = await axios(url, { method, body, headers })
                // const data = await response

                const response = await fetch(url, { method, body, headers })
                const data = await response.json()

                //let responseOK =
                //response && response.status === 200 && response.statusText === 'OK'

                if (!response.ok) {
                    throw new Error(data.message || 'Smth wrong')
                }

                setLoading(false)

                return data
            } catch (e) {
                setLoading(false)
                setError(e.message)
                throw e
            }
        },
        []
    )

    const clearError = useCallback(() => setError(null), [])

    return { loading, request, error, clearError }
}