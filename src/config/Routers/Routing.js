import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";
import Login from '../Pages/Login';
import SignUp from '../Pages/SignUp';

const Routing = () => {
  return (

    <Router>
        <Routes>
            <Route path='/' element={<SignUp/>} ></Route>
            <Route path='login' element={<Login/>} ></Route>
        </Routes>
    </Router>
  )
}

export default Routing
