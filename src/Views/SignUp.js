import React, { useState, useContext } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { AuthContext } from '../context/AuthContext'
import { auth, provider } from '../firebase'

const SignUp = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("Error !!!");
  const [error, setError] = useState(false)

  const { dispatch } = useContext(AuthContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    // navigate('/')
    setLoading(true);

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setError(false);
        // Signed in 

        const user = userCredential.user;
        //   alert("sign up successful")
        dispatch({ type: "SIGNIN", payload: user })
        setLoading(false);
      })
      .catch((err) => {
        const errorCode = err.code;
        const errorMessage = err.message;
        console.log(errorMessage);
        setError(true)
        if (errorCode === "auth/email-already-in-use") {
          setErrorMessage("Already signed up try signing in! ")
        }
        if (errorCode === "auth/invalid-email") {
          setErrorMessage("Enter a valid email ")
        }
        if (errorCode === "auth/internal-error") {
          setErrorMessage("Enter password ")
        }
        setLoading(false);
      });
  }

  const handleGoogleAuth = (e) => {
    e.preventDefault();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // console.log(token);
        // The signed-in user info.
        const user = result.user;
        dispatch({ type: "SIGNIN", payload: user })
        console.log(user);
      }).catch((error) => {
        console.log(error);
        // Handle Errors here.
      });
  }





  return (
    <>
      <div className="card card-compact w-full mx-2 md:w-96  bg-gradient-to-br from-slate-900/50 shadow-2xl py-10 px-20">
        <div className="text-base-200 text-center font-mono font-bold text-2xl ">Sign Up</div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text text-base-100  ">Enter Email</span>
          </label>
          <input type="text" placeholder="Email" className="input  w-full max-w-xs input-ghost"
            value={email} onChange={(e) => { setEmail(e.target.value) }}
          />
          <label className="label">
            <span className="label-text text-base-100  ">Enter Password</span>
          </label>
          <input type="password" placeholder="Password" className="input  w-full max-w-xs input-ghost "
            value={password} onChange={(e) => { setPassword(e.target.value) }}
          />
          <button className="btn w-full mt-6 glass"
            onClick={handleSubmit}
          >Sign Up</button>
          <label className="label">
            <Link to='/login/signin' >
              <span className="label-text-alt hover:cursor-pointer text-base-200 underline  underline-offset-2">Already user?</span>
            </Link>
            {/* <span className="label-text-alt">Alt label</span> */}
          </label>
        </div>
        <button className='btn w-full mt-6 glass' onClick={handleGoogleAuth} >Google login</button>
      </div>
    </>
  )
}

export default SignUp