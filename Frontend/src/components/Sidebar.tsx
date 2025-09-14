
import { Sparkles } from 'lucide-react'

import {  Plus } from 'lucide-react'
import SideBox from './SideBox'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Sidebar = () => {
    const navigate = useNavigate();
    
    const [projectData, setProjectData] = useState([]);

    
    async function fetchProjects() {
        // Fetch projects from backend
        const project = await axios.get('http://localhost:8080/project/getProjectbyName', {
            withCredentials: true
        });

        setProjectData(project.data);
        console.log("some data came: ", project);
    }

    useEffect(() => {
        fetchProjects();
    }, []);

    function goToTask(project: any) {

        navigate('/tasks', { state: { id: project } });
    }

    return (
        <div className='p-5 bg-[#F9FAFC] w-[20%] h-screen flex flex-col overflow-y-auto'>
            <div className='flex flex-row gap-3 items-center border-b-2 border-[#ECEFF5] pb-5'>
                <div className='p-2 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full'><Sparkles className='text-white' /></div>
                <p className='font-bold text-lg'>DevFlow</p>
            </div>



            <div className=' flex flex-row justify-between items-center mt-5 '>
                <p className='text-sm font-semibold text-[#68778E]'>PROJECTS</p>
                <Plus className='text-black w-4 h-4 ' />
            </div>

            {
                projectData.map((project: any) => (
                    <SideBox key={project.id} name={project.projectName} onClick={() => {
                        console.log("clicked on project: ", project.id);
                        goToTask(project.id);
                    }} />
                ))
            }


        </div>
    )
}

export default Sidebar