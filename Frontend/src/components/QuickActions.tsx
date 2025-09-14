import React from 'react'
import { Plus, Bell } from 'lucide-react'

const QuickActions = () => {
    return (
        <div className='flex flex-col bg-white m-8 p-5 rounded-2xl'>
            <div className='flex flex-row gap-2 items-center'>
                <Bell />
                <p className='text-2xl font-semibold' >Quick Actions</p>
            </div>

            <div className='flex flex-row mt-5 mb-2'>
                <div className='w-[30%] flex flex-col items-center py-2  gap-4  rounded-2xl hover:bg-gray-100 hover:cursor-pointer'>
                    <div className='bg-gradient-to-br from-indigo-400 to-purple-500 w-fit h-fit rounded-full p-1 px-2'>
                        <Plus className='w-4 h-4' />
                    </div>
                    <p>Create Task</p>
                </div>
                <div className='w-[30%] flex flex-col items-center py-2 gap-4  rounded-2xl hover:bg-gray-100 hover:cursor-pointer'>
                    <div className='bg-gradient-to-br from-indigo-400 to-purple-500 w-fit h-fit rounded-full p-1 px-2'>
                        <Plus className='w-4 h-4' />
                    </div>
                    <p>Create Task</p>
                </div>
                <div className='w-[30%] flex flex-col items-center py-2 gap-4  rounded-2xl hover:bg-gray-100 hover:cursor-pointer'>
                    <div className='bg-gradient-to-br from-indigo-400 to-purple-500 w-fit h-fit rounded-full p-1 px-2'>
                        <Plus className='w-4 h-4' />
                    </div>
                    <p>Create Task</p>
                </div>
                <div className='w-[30%] flex flex-col items-center py-2 gap-4  rounded-2xl hover:bg-gray-100 hover:cursor-pointer'>
                    <div className='bg-gradient-to-br from-indigo-400 to-purple-500 w-fit h-fit rounded-full p-1 px-2'>
                        <Plus className='w-4 h-4' />
                    </div>
                    <p>Create Task</p>
                </div>
            </div>
        </div>
    )
}

export default QuickActions