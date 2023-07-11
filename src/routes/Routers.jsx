import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home, Login, SignUp } from '../pages'
import Layout from '../components/Layout'

const Routers = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route path="/" element={<Home/>}/>
            </Route>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<SignUp/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Routers