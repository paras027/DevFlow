
import { Zap } from 'lucide-react'

import { useDispatch } from 'react-redux'
import { savePassword, saveUsername } from '../redux/Slices/AuthSlice'


const InputBox = ({ title, fields, buttonText, onSubmit, belowMessage, redirectTo, belowButtonText}: any) => {
    const dispatch = useDispatch();
    function saveuser(e:any){
        dispatch(saveUsername(e.target.value))
    }

    function savepass(e:any){
        dispatch(savePassword(e.target.value))
    }


    return (
        <div className='bg-white/20 backdrop-blur-2xl p-6 px-10 rounded-2xl shadow-lg flex flex-col items-center '>
            <div className='bg-gradient-to-r from-violet-500 to-purple-500 p-3 rounded-2xl flex items-center justify-center w-20 h-20 my-5'>
                <Zap className='w-10 h-10 text-white' />
            </div>
            <p className='text-3xl font-bold text-white '>{title}</p>
            <p className='text-white/80'>Welcome Back!</p>
            {
                fields.map((field: any, index: any) => (
                    <div>
                        <p className='mt-4'>{field}</p>
                        <input
                            key={index}
                            type={field.toLowerCase() === 'password' ? 'password' : 'text'}
                            placeholder={field}
                            className='mt-2 p-2 border border-gray-300 rounded-lg w-80'
                            onChange={field==='Username' ? (e) => saveuser(e) : (e) => savepass(e)}
                        />
                    </div>
                ))
            }
            <button
                onClick={onSubmit}
                className='mt-6 bg-gradient-to-r from-violet-500 to-purple-500 text-white px-6 py-2 rounded-lg hover:opacity-90 transition-opacity'>{buttonText}
            </button>
            <div className='flex flex-row gap-2 mt-2'>
                <p>{belowMessage}</p>
                <p className='hover:cursor-pointer' onClick={redirectTo}>{belowButtonText}</p>
            </div>
        </div>
    )
}

export default InputBox