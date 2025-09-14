import React from 'react'

const NavigationCards = ({icon:Icon,iconName}:any) => {
  return (
    <div className='flex flex-row gap-3 items-center hover:cursor-pointer py-2 hover:text-white px-4 hover:bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl my-2'>
        <Icon className='w-6 h-6 font-light text-black-500 t' />
        <p className='font-semibold text-lg '>{iconName}</p>
    </div>
  )
}

export default NavigationCards