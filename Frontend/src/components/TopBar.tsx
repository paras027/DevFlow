import React from 'react'
import { Plus,Bell  } from 'lucide-react'
import AddTask from './AddTask'
const TopBar = () => {
  return (
    <div className='h-[6%] w-full bg-[#FFFFFF] justify-items-end pr-4 shadow-xl items-center'>
        <div className='flex flex-row items-center gap-3 text-white'>
            <AddTask buttonName="New Task" icon={Plus} color="bg-gradient-to-r from-indigo-500 to-purple-500" textColor="text-white"/>
            <div className='relative w-fit p-2'>
            <Bell className='w-5 h-5 relative text-black'/>
            <div className='bg-red-500 absolute right-0 top-0 text-xs w-4 h-4 rounded-full text-center text-white'>2</div>
            </div>
            <div className='w-10 h-10 rounded-full bg-red-400 relative'>
                <div className='w-3 h-3 rounded-full bg-green-400 absolute right-0 bottom-0'></div>
            </div>
        </div>
    </div>
  )
}

export default TopBar