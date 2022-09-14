import React from 'react'
import { useNavigate, Link } from 'react-router-dom'

const SignIn = () => {

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/')
  }


  return (
    <>
      <div className="card card-compact w-full mx-2 md:w-96 backdrop-blur-xl bg-gradient-to-br from-slate-900/50 shadow-2xl py-10 px-20">
        <div className="text-base-200 text-center font-mono font-bold text-2xl ">Sign In</div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text text-base-100  ">Enter Email</span>
          </label>
          <input type="text" placeholder="Email" className="input  w-full max-w-xs input-ghost" />
          <label className="label">
            <span className="label-text text-base-100  ">Enter Password</span>
          </label>
          <input type="password" placeholder="Password" className="input  w-full max-w-xs input-ghost " />
          <button className="btn w-full mt-6 glass"
            onClick={handleSubmit}
          >Sign In</button>
          <label className="label">
            <Link to='/login/signup' >
              <span className="label-text-alt hover:cursor-pointer text-base-200 underline  underline-offset-2">New user?</span>
            </Link>
            {/* <span className="label-text-alt">Alt label</span> */}
          </label>
        </div>
      </div>
    </>
  )
}

export default SignIn