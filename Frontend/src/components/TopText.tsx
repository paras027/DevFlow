

const TopText = ({heading,subHeading,headingcolor, subHeadingColor}:any) => {
  return (
    <div className={`flex flex-col gap-3`}>
        <p className={`text-4xl font-bold ${headingcolor} bg-clip-text text-transparent`}>{heading}</p>
        <p className={`text-lg ${subHeadingColor} font-medium`}>{subHeading}</p>
    </div>
  )
}

export default TopText