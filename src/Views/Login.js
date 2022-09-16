import React from 'react'
import { Outlet } from 'react-router-dom'
const Login = () => {
  return (
    <>
      <div className="flex justify-center items-center min-h-[90vh]"  >
        <div className='hidden md:block w-1/12' />
        <Outlet />
        <div className='hidden md:block w-1/12' >
          
        </div>
      </div>
    </>
  )
}

export default Login