import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import { container } from '../utils/Style'
import ProfileCard from './ProfileCard'

const Layout = () => {
  return (
    <>
        <Navbar/>
        <div className={`${container} py-[20px] w-full flex gap-x-[50px]`}>
            <div className="w-[35%]">
                <ProfileCard/>
            </div>
            <div className="w-[65%]">
                <Outlet/>
            </div>
        </div>
    </>
  )
}

export default Layout