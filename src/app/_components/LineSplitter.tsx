import React from 'react'

const LineSplitter = ({className}:{className?:string}) => {
  return (
    <div className={`w-full h-[0.6px] bg-secondary-500 ${className||""}`}></div>
  )
}

export default LineSplitter