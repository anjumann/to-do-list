import React, { useContext } from "react";
import { Route, Routes, redirect, Navigate } from 'react-router-dom'
import { AuthContext } from "./context/AuthContext";

// elements
import Login from "./Views/Login";
import SignIn from "./Views/SignIn";
import SignUp from "./Views/SignUp";
import Home from "./Views/Home";
import Navbar from "./Components/Navbar";

function App() {

  const { currentUser } = useContext(AuthContext)
  // console.log(currentUser);
  const RequireAuth = ({ children }) => {
    return (currentUser ? children : <Navigate to="/login/signin" />)
  }
  const Authenticated = ({ children }) => {
    return (!currentUser ? children : <Navigate to="/" />)
  }
  return (
    <>
      <div className="bg-[url('../public/bg.jpg')]  min-h-screen font-og">
        <Navbar />
        <Routes>

          <Route path="/" element={<RequireAuth><Home /></RequireAuth>} />


          <Route path="/login" element={<Authenticated><Login /></Authenticated>}>
            <Route path="SignIn" element={<SignIn />} />
            <Route path="SignUp" element={<SignUp />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
