import React from 'react'
import { Outlet } from 'react-router-dom'
const Login = () => {
  return (
    <>
      <div className="flex justify-center items-center min-h-screen"  >
        <div className='hidden md:block w-5/12' />
        <Outlet />
      </div>
    </>
  )
}

export default Login