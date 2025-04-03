import axios from "axios";
import React, { use, useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";

const Login = () => {
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [isloginForm, setIsLoginForm] = useState(true);
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogin = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/login",
        {
          emailId,
          password,
        },
        { withCredentials: true }
      );

      dispatch(addUser(res.data));
      return navigate("/");
    } catch (err) {
      setError(err?.response?.data || "Something went wrong");
    }
  };
  const handleSignup = async () => {
     try {
       const res= await axios.post(
         BASE_URL + "/signup",
         {
           emailId,
           password,
           firstname,
           lastname,
         },
         { withCredentials: true }
       );
       dispatch(addUser(res.data.data));
       return navigate("/profile"); 

     }
     catch(err){
      setError(err?.response?.data || "Something went wrong");
     }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900  pb-24">
      <div className="card bg-gray-800 w-96 shadow-2xl rounded-lg p-6">
        <div className="card-body">
          <h2 className="text-white text-2xl font-semibold text-center mb-6">
            {isloginForm ? "Login" : "Sign Up"}
          </h2>
          <div>
            {!isloginForm && (
              <>
                {/* First Name Input */}
                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text text-gray-300 my-2">
                      First Name
                    </span>
                  </div>
                  <input
                    type="text"
                    value={firstname}
                    placeholder="Enter your First Name"
                    className="input input-bordered w-full bg-gray-700 text-white rounded-lg px-3 py-2 hover:ring hover:ring-blue-500 transition"
                    onChange={(e) => {
                      setFirstname(e.target.value);
                    }}
                  />
                </label>

                {/* Margin between first name and last name */}
                <div className="my-5"></div>

                {/* Last Name Input */}
                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text text-gray-300 my-2">
                      Last Name
                    </span>
                  </div>
                  <input
                    type="text"
                    value={lastname}
                    placeholder="Enter your Last Name"
                    className="input input-bordered w-full bg-gray-700 text-white rounded-lg px-3 py-2 hover:ring hover:ring-blue-500 transition"
                    onChange={(e) => {
                      setLastname(e.target.value);
                    }}
                  />
                </label>
                {/* Margin between last name and emailname */}
                <div className="my-5"></div>
                {/* Email Input */}
              </>
            )}
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-gray-300 my-2">Email Id</span>
              </div>
              <input
                type="email"
                value={emailId}
                placeholder="Enter your email"
                className="input input-bordered w-full bg-gray-700 text-white rounded-lg px-3 py-2 hover:ring hover:ring-blue-500 transition"
                onChange={(e) => {
                  setEmailId(e.target.value);
                }}
              />
            </label>

            {/* Margin between Email and Password */}
            <div className="my-5"></div>

            {/* Password Input */}
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-gray-300 my-2">Password</span>
              </div>
              <input
                type="password"
                value={password}
                placeholder="Enter your password"
                className="input input-bordered w-full bg-gray-700 text-white rounded-lg px-3 py-2 hover:ring hover:ring-blue-500 transition"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </label>
          </div>

          {/* Login Button */}
          <p className="text-red-500 text-center mt-2 text-sm font-medium">
            {error}
          </p>
          <div className="card-actions justify-center mt-8">
            <button
              className="w-full py-3 rounded-md text-white text-lg font-medium bg-blue-600 hover:bg-blue-700 transition"
              onClick={isloginForm ? handleLogin : handleSignup}
            >
              {isloginForm ? "Login" : "Sign Up"}
            </button>
          </div>
        </div>
        <p
          className="white-500 cursor-pointer text-center mt-2 text-sm font-medium "
          onClick={() => setIsLoginForm((value) => !value)}
        >
          {" "}
          {isloginForm
            ? "New User? Signup here"
            : "Already have an account? Login here"}
        </p>
      </div>
    </div>
  );
};

export default Login;
