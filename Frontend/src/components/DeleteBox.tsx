import React from 'react'

const DeleteBox = () => {
  return (
    <div className='flex flex-row justify-between items-center bg-[#F2F3FF] border-2 border-[#DCE2FE] mx-8 rounded-xl px-10 py-2 mt-8 '>
        <p className='text-[#4C41CD] text-md font-semibold'>1 project selected</p>
        <button className='bg-[#FDFAFF] px-2 py-1 rounded-xl text-red-500 text-sm font-semibold'>Delete</button>
    </div>
  )
}

export default DeleteBox