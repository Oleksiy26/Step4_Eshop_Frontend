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
          // headers['Authorization'] = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOTRlNmE3ZWExZGY1MTY1ZWQ3ODFmZSIsImZpcnN0TmFtZSI6IkthdHlhIiwibGFzdE5hbWUiOiJLYXR5YUthdHlhIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTY3MTQ4MzQxMSwiZXhwIjoxNjcxNTE5NDExfQ.CsIJWF2EG5frG148G6fXLOhToTMlwbbWZ6RI5c2RSqA'
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
