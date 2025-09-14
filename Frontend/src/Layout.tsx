import React from 'react'
import Sidebar from './components/Sidebar'
import TopBar from './components/TopBar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <div className='flex flex-row h-screen overflow-hidden'>
            <Sidebar />
            <div className='flex flex-col w-full'>
                <TopBar />
                <Outlet />
            </div>
        </div>
    )
}

export default Layout