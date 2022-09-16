import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import { signOut } from "firebase/auth";
import {auth} from '../firebase'

const Navbar = () => {

    const {dispatch, currentUser } = useContext(AuthContext)
    // console.log(currentUser)

    const handleLogout = () => {
        signOut(auth).then(() => {

            // Sign-out successful.
            // console.log("signout is successfull");
            dispatch({ type: "SIGNOUT", payload: null })

        }).catch((error) => {

            const errorMessage = error.message;
            console.log("error in signing out");
            console.log(errorMessage);
            // An error happened.
        });
    }





    return (
        <>
            <div className="navbar sticky top-1  bg-gradient-to-br from-slate-900/50 shadow-2xl  z-50 w-10/12 md:w-4/12 mx-auto rounded-3xl ">
                <div className="navbar-start">
                    <Link to='/' className="btn btn-ghost normal-case text-xl text-base-100">Todo list</Link>
                </div>

                <div className="navbar-end">
                    {currentUser ? (<Link to='/login/signin' className="btn glass "
                        onClick={handleLogout}
                    >LogOut</Link>) : (<Link to='/login/signin' className="btn glass ">Login</Link>)}


                </div>
            </div>
        </>
    )
}

export default Navbar