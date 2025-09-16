
// import { Sparkles } from 'lucide-react'

// import {  Plus } from 'lucide-react'
// import SideBox from './SideBox'
// import { useState, useEffect } from 'react'
// import axios from 'axios'
// import { useNavigate } from 'react-router-dom'
// const Sidebar = () => {
//     const navigate = useNavigate();
    
//     const [projectData, setProjectData] = useState([]);

    
//     async function fetchProjects() {
//         // Fetch projects from backend
//         const project = await axios.get('http://13.49.57.230:8080/project/getProjectbyName', {
//             withCredentials: true
//         });

//         setProjectData(project.data);
//         console.log("some data came: ", project);
//     }

//     useEffect(() => {
//         fetchProjects();
//     }, []);

//     function goToTask(project: any) {

//         navigate('/tasks', { state: { id: project } });
//     }

//     return (
//         <div className='p-5 bg-[#F9FAFC] w-[20%] h-screen flex flex-col overflow-y-auto'>
//             <div className='flex flex-row gap-3 items-center border-b-2 border-[#ECEFF5] pb-5'>
//                 <div className='p-2 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full'><Sparkles className='text-white' /></div>
//                 <p className='font-bold text-lg'>DevFlow</p>
//             </div>



//             <div className=' flex flex-row justify-between items-center mt-5 '>
//                 <p className='text-sm font-semibold text-[#68778E]'>PROJECTS</p>
//                 <Plus className='text-black w-4 h-4 ' />
//             </div>

//             {
//                 projectData.map((project: any) => (
//                     <SideBox key={project.id} name={project.projectName} onClick={() => {
//                         console.log("clicked on project: ", project.id);
//                         goToTask(project.id);
//                     }} />
//                 ))
//             }


//         </div>
//     )
// }

// export default Sidebar

import { Sparkles, Plus, Menu, X } from 'lucide-react'
import SideBox from './SideBox'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Sidebar = () => {
    const navigate = useNavigate();
    const [projectData, setProjectData] = useState([]);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    async function fetchProjects() {
        try {
            const project = await axios.get('http://13.49.57.230:8080/project/getProjectbyName', {
                withCredentials: true
            });
            setProjectData(project.data);
            console.log("some data came: ", project);
        } catch (error) {
            console.error("Failed to fetch projects:", error);
        }
    }

    useEffect(() => {
        fetchProjects();
    }, []);

    function goToTask(project: any) {
        navigate('/tasks', { state: { id: project } });
        setIsMobileMenuOpen(false); // Close mobile menu on navigation
    }

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <>
            {/* Mobile Menu Button - Only visible on small screens */}
            <button
                onClick={toggleMobileMenu}
                className="fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-lg lg:hidden"
                aria-label="Toggle menu"
            >
                {isMobileMenuOpen ? (
                    <X className="w-6 h-6 text-gray-600" />
                ) : (
                    <Menu className="w-6 h-6 text-gray-600" />
                )}
            </button>

            {/* Mobile Overlay */}
            {isMobileMenuOpen && (
                <div 
                    className="fixed inset-0 bg-black/50 z-30 lg:hidden"
                    onClick={() => setIsMobileMenuOpen(false)}
                />
            )}

            {/* Sidebar - Your original design preserved */}
            <div className={`
                fixed lg:static inset-y-0 left-0 z-40
                transform ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
                lg:translate-x-0 transition-transform duration-300 ease-in-out
                bg-[#F9FAFC] 
                w-80 sm:w-96 lg:w-[20%]
                h-full lg:h-screen 
                flex flex-col 
                overflow-y-auto
                p-4 sm:p-5
            `}>
                
                {/* Your original header design */}
                <div className='flex flex-row gap-3 items-center border-b-2 border-[#ECEFF5] pb-5'>
                    <div className='p-2 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full'>
                        <Sparkles className='text-white w-5 h-5 sm:w-6 sm:h-6' />
                    </div>
                    <p className='font-bold text-lg sm:text-xl'>DevFlow</p>
                </div>

                {/* Your original projects section */}
                <div className='flex flex-row justify-between items-center mt-5'>
                    <p className='text-sm font-semibold text-[#68778E]'>PROJECTS</p>
                    <Plus className='text-black w-4 h-4' />
                </div>

                {/* Your original projects list */}
                <div className='flex-1'>
                    {projectData.map((project: any) => (
                        <SideBox 
                            key={project.id} 
                            name={project.projectName}
                            taskNumber={Math.floor(Math.random() * 20) + 5}
                            members={Math.floor(Math.random() * 10) + 2}
                            progress={Math.floor(Math.random() * 100) + 1}
                            onClick={() => {
                                console.log("clicked on project: ", project.id);
                                goToTask(project.id);
                            }} 
                        />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Sidebar
