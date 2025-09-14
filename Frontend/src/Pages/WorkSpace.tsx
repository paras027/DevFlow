import React,{useState} from 'react'
import TopText from '../components/TopText'
import AddTask from '../components/AddTask'
import { Plus, Calendar,MoveUpRight  } from 'lucide-react'
import DetailBox from '../components/DetailBox'
import WorkSpacesCard from '../components/WorkSpacesCard'
import ActiveProjects from '../components/ActiveProjects'
import DeleteBox from '../components/DeleteBox'

const WorkSpace = () => {
  const [edit,setEdit] = useState(false);
   return (
    <div className='bg-[#F2F3F4] h-screen overflow-y-scroll'>
      <div className='flex flex-row justify-between items-center mx-8 mt-8'>
        <TopText heading='WorkSpace' subHeading="You have 8 tasks due today and 3 meetings scheduled." headingcolor='bg-black' subHeadingColor="text-gray-400" />
        <div className='flex flex-row gap-2 text-white'>
          <AddTask buttonName="View Calender" icon={Calendar} color="F9F9FA" textColor="text-black" />
          <AddTask buttonName="New Workspace" icon={Plus} color="bg-gradient-to-r from-indigo-500 to-purple-500" textColor="text-white" />
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
          <p className='text-2xl text-black font-bold '>Active Workspaces</p>
          <div className='flex flex-row gap-2 p-1 px-3 items-center text-sm text-black border-1 border-gray-400 rounded-xl' onClick={() => setEdit(!edit)}>
                    <p>Edit</p>
                    <MoveUpRight className='w-4 h-4 text-black' />
                  </div>
      </div>
      
      <div className='grid grid-cols-2 mx-3 '>
        <WorkSpacesCard namess="Design System 2.0" desc="Compare redesign of our component library" label="Development" members="8" totaltask="24/32" progress="90" subhead="Projects" edit={edit}/>
        <WorkSpacesCard namess="Design System 2.0" desc="Compare redesign of our component library" label="Development" members="8" totaltask="24/32" progress="90" subhead="Projects" edit={edit}/>
        <WorkSpacesCard namess="Design System 2.0" desc="Compare redesign of our component library" label="Development" members="8" totaltask="24/32" progress="90" subhead="Projects" edit={edit}/>
        <WorkSpacesCard namess="Design System 2.0" desc="Compare redesign of our component library" label="Development" members="8" totaltask="24/32" progress="90" subhead="Projects" edit={edit}/>
        
      </div>

     
    </div>
  )
}

export default WorkSpace