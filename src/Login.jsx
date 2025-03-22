import axios from "axios";
import React, { use, useState } from "react";

const Login = () => {
  const [emailId,setEmailId]=useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async()=>{
    try{
     const res = await axios.post("http://localhost:3000/login",{
       emailId,password,
     });
  }catch(err){
     console.log(err);
  }
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 px-4 py-12">
      <div className="card bg-gray-800 w-96 shadow-2xl rounded-lg p-6">
        <div className="card-body">
          <h2 className="text-white text-2xl font-semibold text-center mb-6">
            Login
          </h2>
          <div>
            {/* Email Input */}
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-gray-300">Email Id</span>
              </div>
              <input
                type="email"
                value={emailId}
                placeholder="Enter your email"
                className="input input-bordered w-full bg-gray-700 text-white rounded-lg px-3 py-2 hover:ring hover:ring-blue-500 transition"

                onChange={(e) => {
                  setEmailId(e.target.value);}}
              />
            </label>

            {/* Margin between Email and Password */}
            <div className="my-5"></div>

            {/* Password Input */}
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-gray-300">Password</span>
              </div>
              <input
                type="password"
                value={password}
                placeholder="Enter your password"
                className="input input-bordered w-full bg-gray-700 text-white rounded-lg px-3 py-2 hover:ring hover:ring-blue-500 transition"

                onChange={(e) => {
                  setPassword(e.target.value);}}
              />
            </label>
          </div>

          {/* Login Button */}
          <div className="card-actions justify-center mt-8">
            <button className="w-full py-3 rounded-md text-white text-lg font-medium bg-blue-600 hover:bg-blue-700 transition" onClick={handleLogin}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
