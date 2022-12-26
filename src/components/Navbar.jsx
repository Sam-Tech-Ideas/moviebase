import React, {useState} from 'react'
import { Link, Navigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
    const {user, logout} = UserAuth();
    

    const navigate = useNavigate();
    const handleLogout = async () => {
        try {
            await logout();
            Navigate('/')
        } catch (error) {
            console.log(error);
        }
    }


  return (
    <div className="flex justify-between text-white items-center p-4 z-[100] absolute w-full ">
      <Link to={"/"}>
        <h1 className="text-red-600 text-3xl font-bold cursor-pointer">
          FIXFLIX
        </h1>
      </Link>
      {user?.email ? (
        <div>
          <Link to={"/account"}>
            <button className="text-white pr-4 ">Account</button>
          </Link>
          
            <button onClick={handleLogout} className="bg-red-600 px-6 py-2 rounded cursor-pointer">
              Logout
            </button>
          
        </div>
      ) : (
        <div>
          <Link to={"/login"}>
            <button className="text-white pr-4 ">Sign in</button>
          </Link>
          <Link to={"/signup"}>
            <button className="bg-red-600 px-6 py-2 rounded cursor-pointer">
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Navbar