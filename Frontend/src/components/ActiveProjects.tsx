import React from 'react'
import { Plus, Users  } from 'lucide-react'
const ActiveProjects = () => {
  return (
    (
    <div className='bg-white p-5 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 mx-5 my-4'>
        <div className='flex flex-row items-center gap-4 '>
            <div className='bg-gradient-to-br from-indigo-400 to-purple-500 w-fit h-fit rounded-xl p-2 px-2'>
                <Plus className='w-6 h-6' />
            </div>
            <div className='flex flex-col'>
                <h1 className='text-2xl font-semibold'>Design System 2.0</h1>
                <p className='text-[#818189] text-sm '>Compare redesign of our component library</p>
            </div>
            <p className='ml-auto text-xs bg-gray-100 p-1 rounded-2xl font-bold'>Development</p>
        </div>

        <div className='flex flex-row items-centers mt-2 gap-5 text-sm text-[#818189]'>
            <div className='flex flex-row items-center gap-1'>
                <Users  className='w-4 h-4'/>
                <p>8 members</p>
            </div>
            <p>24/32 Tasks</p>
        </div>
        <div className='flex flex-row justify-between items-center mt-4 text-sm text-gray-500 font-bold'>
                <p>Progress</p>
                <p>90%</p>
            </div>
            <div className='bg-gray-100 text-gray-400 rounded-3xl h-2 relative mt-2 '>
                <div className={`absolute bg-black h-full w-[20%] top-0 left-0 rounded-3xl`}></div>
            </div>
    </div>
  )
  )
}

export default ActiveProjects