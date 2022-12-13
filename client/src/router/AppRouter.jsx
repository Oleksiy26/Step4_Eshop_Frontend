import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PageLogin from '../pages/PageLogin/PageLogin'
import Page404 from "../pages/Page404";
import { privateRoutes, publicRoutes } from './Pages';

const AppRouter = ({ isAuthenticated }) => {
    return isAuthenticated ? (
        <Routes>
            {privateRoutes.map((route) => (
                <Route element={<route.element />} path={route.path} key={route.path} />
            ))}
            <Route path="*" element={<Page404 />} />
        </Routes>
    ) : (
        <Routes>
            {publicRoutes.map((route) => (
                <Route element={<route.element />} path={route.path} key={route.path} />
            ))}
            <Route path="*" element={<PageLogin />} />
        </Routes>
    )
}

export default AppRouter