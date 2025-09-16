
// const AddTask = ({buttonName,icon:Icon,color, textColor,onClick}:any) => {
//   return (
//     <div><button onClick={onClick} className={`flex flex-row m-2 rounded-xl ${color} ${textColor}  cursor-pointer p-2 px-3 text-sm items-center gap-2 font-bold`}><Icon className='w-4 h-4'/>{buttonName}</button></div>
//   )
// }

// export default AddTask

const AddTask = ({ buttonName, icon: Icon, color, textColor, onClick }: any) => {
  return (
    <button 
      onClick={onClick} 
      className={`flex flex-row items-center gap-2 rounded-xl ${color} ${textColor} cursor-pointer p-2 px-3 sm:px-4 text-xs sm:text-sm font-bold hover:opacity-90 transition-opacity whitespace-nowrap`}
    >
      <Icon className='w-3 h-3 sm:w-4 sm:h-4'/>
      <span className='hidden xs:inline sm:inline'>{buttonName}</span>
    </button>
  )
}

export default AddTask
