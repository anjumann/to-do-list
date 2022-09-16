import React from 'react'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

const Loading = () => {
  return (
    <>
      <div className='text-base-100' >
        <AiOutlineLoading3Quarters className='inline mr-2 animate-spin font-black  ' /> Loading...
      </div>
    </>
  )
}

export default Loading