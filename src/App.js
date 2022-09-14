import React from "react";
import { Route, Routes, redirect } from 'react-router-dom'


// elements
import Login from "./Views/Login";
import SignIn from "./Views/SignIn";
import SignUp from "./Views/SignUp";
import Home from "./Views/Home";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <div className="bg-[url('../public/bg.jpg')]  min-h-screen font-og">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />}>
            <Route path="SignIn" element={<SignIn />} />
            <Route path="SignUp" element={<SignUp />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
