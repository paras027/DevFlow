import {useState, useEffect}  from 'react'
import TopText from '../components/TopText'
import AddTask from '../components/AddTask'
import { Plus,MoveUpRight  } from 'lucide-react'
import DetailBox from '../components/DetailBox'
import WorkSpacesCard from '../components/WorkSpacesCard'

import DeleteBox from '../components/DeleteBox'
import axios from 'axios'
import AddProjectPop from '../components/AddProjectPop.tsx'
import { useNavigate } from 'react-router-dom'

const ProjectsPage = () => {
const navigate = useNavigate();
  const [projectData,setProjectData] = useState([]);
const [showModal, setShowModal] = useState(false);
const [tasks, setTasks] = useState([]);

function changeModal(){
  setShowModal(true);
}

  const handleTaskAdded = (newTask:any) => {
    setTasks((prev):any => [...prev, newTask]); // update task list
  };

  async function fetchProjects() {
    // Fetch projects from backend
    const project =await axios.get('http://13.48.26.60:8080/project/getProjectbyName',{
      withCredentials: true
    });

    setProjectData(project.data);
    console.log("some data came: ", project);
  }

useEffect(() => {
  fetchProjects();
},[]);

async function deleteProject(id: string) {
  try {
    await axios.delete(`http://13.48.26.60:8080/project/deleteProject/${id}`, {
      withCredentials: true,
    });
    // update state to remove deleted project
    setProjectData((prev: any) => prev.filter((p: any) => p.id !== id));
  } catch (err) {
    console.error("Error deleting project:", err);
  }
}


function goToTask(project:any){

  navigate('/tasks',{state:{id:project}});
}


 const [edit,setEdit] = useState(false);
   return (
    <div className='bg-[#F2F3F4] h-screen overflow-y-scroll'>
      <div className='flex flex-row justify-between items-center mx-8 mt-8'>
        <TopText heading='WorkSpace Name' subHeading="You have 8 tasks due today and 3 meetings scheduled." headingcolor='bg-black' subHeadingColor="text-gray-400" />
        <div className='flex flex-row gap-2 text-white'>
          
          <AddTask buttonName="New Project" icon={Plus} color="bg-gradient-to-r from-indigo-500 to-purple-500" textColor="text-white"  onClick={changeModal}
            />
            {showModal && (
        <AddProjectPop
          onClose={() => setShowModal(false)}
          onTaskAdded={handleTaskAdded}
        />
      )}
        </div>
      </div>
      <div className='flex flex-row gap-8 mx-8 mt-8'>
        <DetailBox name="Total Projects" color="from-blue-500 to-cyan-600"/>
        <DetailBox name="Projects Completed" color="from-green-400 to-cyan-600"/>
        <DetailBox name="Projects Pending" color="from-yellow-400 to-orange-600"/>
        <DetailBox name="Projects Overdue" color="from-red-600 to-pink-500"/>
      </div>
      <DeleteBox />
      <div className='flex flex-row justify-between mx-10 mt-10'>
          <p className='text-2xl text-black font-bold '>Active Projects</p>
          <div className='flex flex-row gap-2 p-1 px-3 items-center text-sm text-black border-1 border-gray-400 rounded-xl' onClick={() => setEdit(!edit)}>
                    <p>Edit</p>
                    <MoveUpRight className='w-4 h-4 text-black' />
                  </div>
      </div>
      
      <div className='grid grid-cols-2 mx-3 '>
        {
          projectData.map((project:any) => (
            <WorkSpacesCard key={project.id} namess={project.projectName} desc={project.projectDescription} label="Development" members="8" totaltask="24/32" progress="90" subhead="Projects" edit={edit} onClick={()=>{
              goToTask(project.id);
            }} onDelete={() => deleteProject(project.id)} />
          ))
        }
        
      </div>

     
    </div>
  )
}

export default ProjectsPage