import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Page404 from '../pages/Page404'
import { forAuthenticatedUsers, forNotAuthenticatedUsers } from './Pages'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'

const AppRouter = () => {
  const token = useSelector(state => state.auth.token)
  return token ? (
    <Routes>
      {forAuthenticatedUsers.map(route => (
        <Route element={<route.element />} path={route.path} key={route.path} />
      ))}
      <Route path='*' element={<Page404 />} />
    </Routes>
  ) : (
    <Routes>
      {forNotAuthenticatedUsers.map(route => (
        <Route element={<route.element />} path={route.path} key={route.path} />
      ))}
      <Route path='*' element={<Page404 />} />
    </Routes>
  )
  // return (
  //   <Routes>
  //     {pages.map(route => (
  //       <Route element={<route.element />} path={route.path} key={route.path} />
  //     ))}
  //     <Route path='*' element={<Page404 />} />
  //   </Routes>
  // )
}

AppRouter.propTypes = {
  isAuthenticated: PropTypes.bool
}

export default AppRouter
