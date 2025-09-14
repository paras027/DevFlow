import React, { useMemo } from 'react'
import { Zap, ChevronRight } from 'lucide-react'
import { FolderCode  ,Calendar , CircleCheck,House,Plus   } from 'lucide-react'

const gradients = [
    'from-pink-500 to-yellow-500',
    'from-blue-400 to-purple-600',
    'from-green-400 to-blue-500',
    'from-red-500 to-orange-500',
    'from-indigo-500 to-pink-500',
    'from-yellow-400 to-red-500',
    'from-purple-500 to-violet-500'
]


const SideBox = ({name,taskNumber,members,progress,onClick}:any) => {
    const randomGradient = useMemo(() => {
        const randomIndex = Math.floor(Math.random() * gradients.length)
        return gradients[randomIndex]
    }, []) // run only once per component mount
    return (
        <div onClick={onClick} className='border-2 border-[#DDDEFB] p-4 rounded-2xl mt-4'>
            <div className='flex flex-row items-center ' >
                <div className={`bg-gradient-to-br p-2 rounded-xl ${randomGradient}`}>
                    <Zap className='w-5 h-5 ' />
                </div>
                <div className='flex flex-col ml-3'>
                    <p className='font-bold text-sm'>{name}</p>
                    <div className='flex flex-row items-center gap-1 text-gray-400'>
                        <p className='font-bold text-xs'>{taskNumber} Tasks</p>
                        <p className='bg-gray-400 w-1 h-1 rounded-full text-xs'></p>
                        <p className='font-bold text-xs '>{members} members</p>
                    </div>
                </div>
                <ChevronRight className='ml-auto w-4 h-4 '/>
            </div>

            <div className='flex flex-row justify-between items-center mt-4 text-sm text-gray-500 font-bold'>
                <p>Progress</p>
                <p>{progress}%</p>
            </div>
            <div className='bg-gray-200 text-gray-400 rounded-3xl h-2 relative mt-2'>
                <div className={`absolute bg-black h-full  top-0 left-0 rounded-3xl` } style={{ width: `${progress}%` }}></div>
            </div>
            
        </div>
    )
}

export default SideBox