import React, { useContext, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import { auth, provider,createTodoDoc } from '../firebase'
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FcGoogle } from 'react-icons/fc'
import { Alert } from '../Components/Alert';
import Loading from '../Components/Loading';

const SignIn = () => {

  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("Check Console");
  const [error, setError] = useState(false)
  const { dispatch } = useContext(AuthContext)
  const navigate = useNavigate()


  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        dispatch({ type: "SIGNIN", payload: user })
        // console.log(user);
        // alert("login successful");
        setError(false);
      })
      .catch((err) => {
        const errorCode = err.code;
        const errorMessage = err.message;
        console.log(errorCode);

        setError(true);
        // console.log(errorMessage);
        if (errorCode === "auth/user-not-found") {
          setErrorMessage("user not found")
        }
        if (errorCode === "auth/invalid-email") {
          setErrorMessage("Invalid Email")
        }

        if (errorCode === "auth/wrong-password") {
          setErrorMessage("Wrong password")
        }
        if (errorCode === "auth/internal-error") {
          setErrorMessage("Enter password")
        }

        setLoading(false);
      });



  }

  const handleGoogleAuth = (e) => {
    setLoading(true);
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
      // console.log('sign',user);
      
      setLoading(false);
    }).catch((error) => {
      console.log(error);
      setLoading(false);
        // Handle Errors here.
      });
  }


  return (
    <>
      <div className="card card-compact w-full mx-2 md:w-4/12   bg-gradient-to-br from-slate-900/50 shadow-2xl py-10 px-20">
        <div className='btn glass' onClick={handleGoogleAuth} > <FcGoogle className='inline text-xl drop-shadow-lg mr-3' /> Login via Google </div>
        <div className='text-base-100 text-center my-3' >---------Or--------- </div>
        <div className="text-base-200 text-center font-mono font-bold text-2xl ">Sign In</div>
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
            onKeyPress={event => {
              if (event.key === 'Enter') {
                console.log('Enter key pressed');
                handleSubmit(event);
              }
            }}
          />
          <button className={`btn w-full mt-6 glass`}
            onClick={(e) => { handleSubmit(e) }}
          > {loading? (<Loading/>) :'Sign In'} </button>

          <label className="label">
            <Link to='/login/signup' >
              <span className="label-text-alt hover:cursor-pointer text-base-200 underline  underline-offset-2">New user?</span>
            </Link>
            {/* <span className="label-text-alt">Alt label</span> */}
          </label>
        </div>
        {error && <Alert className='inline' errorMessage={errorMessage} />}

      </div>
    </>
  )
}

export default SignIn