import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";
import Home from '../../Pages/Home';
import Login from '../../Pages/Login';
import SignUp from '../../Pages/SignUp';

const Routing = () => {
  return (

    <Router>
        <Routes>
            <Route path='/:id' element={<Home />} ></Route>
            <Route path='signup' element={<SignUp/>} ></Route>
            <Route path='login' element={<Login/>} ></Route>
        </Routes>
    </Router>
  )
}

export default Routing
