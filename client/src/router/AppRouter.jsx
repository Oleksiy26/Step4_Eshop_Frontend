import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Page404 from '../pages/Page404'
import { Pages } from './Pages'

const AppRouter = () => {
  const allPages = Pages()

  return (
    <Routes>
      {allPages.map(route => (
        <Route element={<route.element />} path={route.path} key={route.path} />
      ))}
      <Route path='*' element={<Page404 />} />
    </Routes>
  )
}

export default AppRouter
