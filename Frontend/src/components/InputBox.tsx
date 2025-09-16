
// import { Zap } from 'lucide-react'

// import { useDispatch } from 'react-redux'
// import { savePassword, saveUsername } from '../redux/Slices/AuthSlice'


// const InputBox = ({ title, fields, buttonText, onSubmit, belowMessage, redirectTo, belowButtonText}: any) => {
//     const dispatch = useDispatch();
//     function saveuser(e:any){
//         dispatch(saveUsername(e.target.value))
//     }

//     function savepass(e:any){
//         dispatch(savePassword(e.target.value))
//     }


//     return (
//         <div className='bg-white/20 backdrop-blur-2xl p-6 px-10 rounded-2xl shadow-lg flex flex-col items-center '>
//             <div className='bg-gradient-to-r from-violet-500 to-purple-500 p-3 rounded-2xl flex items-center justify-center w-20 h-20 my-5'>
//                 <Zap className='w-10 h-10 text-white' />
//             </div>
//             <p className='text-3xl font-bold text-white '>{title}</p>
//             <p className='text-white/80'>Welcome Back!</p>
//             {
//                 fields.map((field: any, index: any) => (
//                     <div key={index} className='flex flex-col mt-4'>
//                         <p className='mt-4'>{field}</p>
//                         <input
//                             key={index}
//                             type={field.toLowerCase() === 'password' ? 'password' : 'text'}
//                             placeholder={field}
//                             className='mt-2 p-2 border border-gray-300 rounded-lg w-80'
//                             onChange={field==='Username' ? (e) => saveuser(e) : (e) => savepass(e)}
//                         />
//                     </div>
//                 ))
//             }
//             <button
//                 onClick={onSubmit}
//                 className='mt-6 bg-gradient-to-r from-violet-500 to-purple-500 text-white px-6 py-2 rounded-lg hover:opacity-90 transition-opacity'>{buttonText}
//             </button>
//             <div className='flex flex-row gap-2 mt-2'>
//                 <p>{belowMessage}</p>
//                 <p className='hover:cursor-pointer' onClick={redirectTo}>{belowButtonText}</p>
//             </div>
//         </div>
//     )
// }

// export default InputBox

import { Zap } from 'lucide-react'
import { useDispatch } from 'react-redux'
import { savePassword, saveUsername } from '../redux/Slices/AuthSlice'

const InputBox = ({ title, fields, buttonText, onSubmit, belowMessage, redirectTo, belowButtonText }: any) => {
    const dispatch = useDispatch();
    
    function saveuser(e: any) {
        dispatch(saveUsername(e.target.value))
    }

    function savepass(e: any) {
        dispatch(savePassword(e.target.value))
    }

    return (
        <div className='bg-white/20 backdrop-blur-2xl rounded-2xl shadow-lg flex flex-col items-center w-full p-4 sm:p-6 lg:p-8'>
            {/* Icon and Title Section */}
            <div className='bg-gradient-to-r from-violet-500 to-purple-500 rounded-2xl flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 my-3 sm:my-5'>
                <Zap className='w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-white' />
            </div>
            
            {/* Title and Subtitle */}
            <h1 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-center'>{title}</h1>
            <p className='text-white/80 text-sm sm:text-base lg:text-lg mt-1 sm:mt-2 text-center'>Welcome Back!</p>
            
            {/* Form Fields */}
            <div className='w-full max-w-xs sm:max-w-sm lg:max-w-md mt-4 sm:mt-6'>
                {fields.map((field: any, index: any) => (
                    <div key={index} className='flex flex-col mt-3 sm:mt-4'>
                        <label className='text-white text-sm sm:text-base font-medium mb-2'>{field}</label>
                        <input
                            key={index}
                            type={field.toLowerCase() === 'password' ? 'password' : 'text'}
                            placeholder={field}
                            className='w-full p-2.5 sm:p-3 lg:p-3.5 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base'
                            onChange={field === 'Username' ? (e) => saveuser(e) : (e) => savepass(e)}
                        />
                    </div>
                ))}
                
                {/* Submit Button */}
                <button
                    onClick={onSubmit}
                    className='w-full mt-6 sm:mt-8 bg-gradient-to-r from-violet-500 to-purple-500 text-white px-4 py-2.5 sm:px-6 sm:py-3 lg:py-3.5 rounded-lg font-semibold text-sm sm:text-base lg:text-lg hover:opacity-90 active:opacity-80 transition-opacity duration-200 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-offset-2 focus:ring-offset-transparent'
                >
                    {buttonText}
                </button>
                
                {/* Bottom Links */}
                <div className='flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 mt-4 sm:mt-6 text-center'>
                    <p className='text-white/80 text-xs sm:text-sm lg:text-base'>{belowMessage}</p>
                    <button 
                        onClick={redirectTo}
                        className='text-white text-xs sm:text-sm lg:text-base font-semibold hover:text-violet-300 underline underline-offset-2 hover:underline-offset-4 transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-violet-400 rounded px-1'
                    >
                        {belowButtonText}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default InputBox
