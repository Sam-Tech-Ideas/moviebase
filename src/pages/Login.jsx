import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import { UserAuth } from '../context/AuthContext';


const Login = () => {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const { user, login } = UserAuth();
   const [error, setError] = useState("");

   const navigate = useNavigate();

   const handleLogin = async (e) => {
     e.preventDefault();
     setError("");
     try {
       await login(email, password);

       navigate("/");
     } catch (error) {
       console.log(error);
         setError(error.message);
     }
     
   };


  return (
    <>
      <div className="w-full h-screen ">
        <img
          className="hidden sm:block absolute w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/5e48e7b6-350d-48d9-96d6-de8ca173c89f/7a8339b1-f3e8-4c58-ad33-34c4dff6a44d/GH-en-20221219-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt=""
        />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-screen "> </div>
        <div className="fixed w-full px-4 py-24  z-50">
          <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
            <div className="max-w-[320px] mx-auto py-16 ">
              <h1 className="text-3xl font-bold ">Sign In</h1>
              {error && <p className="bg-red-400 my-2">{error}</p>}
              <form className="w-full flex flex-col py-4 " onSubmit={handleLogin}>
                <input
                  type="email"
                  className="p-3 my-2 bg-gray-700 rounded"
                  placeholder="Email"
                  autoComplete="email"
                  required
                   onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="password"
                  className="p-3 my-2 bg-gray-700 rounded"
                  placeholder="Password"
                  autoComplete="current-password"
                  required
                   onChange={(e) => setPassword(e.target.value)}
             
                />
                <button className="bg-red-600 font=bold py-3 my-4 rounded " type='submit'>
                  Sign In
                </button>
                <div className="flex items-center justify-between text-gray-600 text-sm">
                  <p>
                    <input type="checkbox" className="mr-2" />
                    Remember me
                  </p>
                  <p>Need Help?</p>
                </div>
                <div className="flex items-center ">
                  <p className="py-4 text-gray-600">
                    New to Fixflix?
                  </p>
                  <Link to={"/signup"}>Sign Up</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login