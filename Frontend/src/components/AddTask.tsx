
const AddTask = ({buttonName,icon:Icon,color, textColor,onClick}:any) => {
  return (
    <div><button onClick={onClick} className={`flex flex-row m-2 rounded-xl ${color} ${textColor}  cursor-pointer p-2 px-3 text-sm items-center gap-2 font-bold`}><Icon className='w-4 h-4'/>{buttonName}</button></div>
  )
}

export default AddTask