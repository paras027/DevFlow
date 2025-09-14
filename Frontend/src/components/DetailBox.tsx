
import { CheckCircle } from 'lucide-react'
const DetailBox = ({name, color}:any) => {
    
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