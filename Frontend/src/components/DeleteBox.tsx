

// const DeleteBox = () => {
//   return (
//     <div className='flex flex-row justify-between items-center bg-[#F2F3FF] border-2 border-[#DCE2FE] mx-8 rounded-xl px-10 py-2 mt-8 '>
//         <p className='text-[#4C41CD] text-md font-semibold'>1 project selected</p>
//         <button className='bg-[#FDFAFF] px-2 py-1 rounded-xl text-red-500 text-sm font-semibold'>Delete</button>
//     </div>
//   )
// }

// export default DeleteBox

const DeleteBox = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0 bg-[#F2F3FF] border-2 border-[#DCE2FE] mx-4 sm:mx-6 lg:mx-8 rounded-xl px-4 sm:px-6 lg:px-10 py-3 sm:py-4 mt-6 sm:mt-8'>
      <p className='text-[#4C41CD] text-sm sm:text-base font-semibold'>1 project selected</p>
      <button className='bg-[#FDFAFF] px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl text-red-500 text-xs sm:text-sm font-semibold hover:bg-red-50 transition-colors'>
        Delete
      </button>
    </div>
  )
}

export default DeleteBox
