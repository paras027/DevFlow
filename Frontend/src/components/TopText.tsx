

// const TopText = ({heading,subHeading,headingcolor, subHeadingColor}:any) => {
//   return (
//     <div className={`flex flex-col gap-3`}>
//         <p className={`text-4xl font-bold ${headingcolor} bg-clip-text text-transparent`}>{heading}</p>
//         <p className={`text-lg ${subHeadingColor} font-medium`}>{subHeading}</p>
//     </div>
//   )
// }

// export default TopText

const TopText = ({ heading, subHeading, headingcolor, subHeadingColor }: any) => {
  return (
    <div className='flex flex-col gap-2 sm:gap-3'>
      <h1 className={`text-2xl sm:text-3xl lg:text-4xl font-bold ${headingcolor} bg-clip-text text-transparent`}>
        {heading}
      </h1>
      <p className={`text-sm sm:text-base lg:text-lg ${subHeadingColor} font-medium max-w-md sm:max-w-lg`}>
        {subHeading}
      </p>
    </div>
  )
}

export default TopText
