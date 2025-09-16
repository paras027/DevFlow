
// import Sidebar from './components/Sidebar'
// import TopBar from './components/TopBar'
// import { Outlet } from 'react-router-dom'

// const Layout = () => {
//     return (
//         <div className='flex flex-row h-screen overflow-hidden'>
//             <Sidebar />
//             <div className='flex flex-col w-full'>
//                 <TopBar />
//                 <Outlet />
//             </div>
//         </div>
//     )
// }

// export default Layout
// Layout.tsx - This preserves your existing top bar structure
import Sidebar from './components/Sidebar'
import { Outlet } from 'react-router-dom'
import TopBar from './components/TopBar'
const Layout = () => {
    return (
        <div className="flex h-screen bg-[#F2F3F4]">
            {/* Sidebar */}
            <Sidebar />

            {/* Main content area - this is where your existing pages render */}
            <div className="flex-1 lg:ml-0">
                {/* Your existing ProjectsPage, TasksPage etc. render here with their own top bars */}
                <TopBar />
                <Outlet />
            </div>
        </div>
    )
}

export default Layout
