import {useMemo} from 'react'
import { CheckCircle } from 'lucide-react'
const gradients = [
    'from-pink-500 to-yellow-500',
    'from-blue-400 to-purple-600',
    'from-green-400 to-blue-500',
    'from-red-500 to-orange-500',
    'from-indigo-500 to-pink-500',
    'from-yellow-400 to-red-500',
    'from-purple-500 to-violet-500'
]
const DetailBox = ({name, color}:any) => {
    const randomGradient = useMemo(() => {
            const randomIndex = Math.floor(Math.random() * gradients.length)
            return gradients[randomIndex]
        }, []) // run only once per component mount
  return (
    <div className='w-[30%] px-5  bg-white  rounded-2xl hover:shadow-2xl'>
        <div className='flex flex-row items-center justify-between mt-5 mb-2'  >
            <p className='text-[#93939A] font-semibold'>{name}</p>
            <div className={`bg-gradient-to-br ${color} w-fit h-fit p-2 rounded-full text-white flex items-center justify-center`}>
                <CheckCircle/>
            </div>
        </div>
        <p className='text-[#6878E1] font-bold text-3xl mb-8'>5</p>

    </div>
  )
}

export default DetailBox