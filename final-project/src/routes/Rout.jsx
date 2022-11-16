import React from 'react';
import { Route, Routes } from 'react-router';
import PageHome from '../pages/PageHome';

const Rout = () => {    
    return (
        <Routes>
            <Route exact='true' path='/' element={<PageHome/>}/>
      </Routes>
    )
}

export default Rout;