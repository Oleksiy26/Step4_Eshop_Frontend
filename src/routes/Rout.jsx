import React from 'react';
import { Route, Routes } from 'react-router';
import PageFav from '../pages/PageFav';
import PageHome from '../pages/PageHome';

const Rout = () => {    
    return (
        <Routes>
            <Route exact='true' path='/' element={<PageHome/>}/>
            <Route exact='true' path='/fav' element={<PageFav/>}/>
      </Routes>
    )
}

export default Rout;