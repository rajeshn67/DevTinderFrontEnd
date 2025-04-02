import React, { useState } from "react";
import UserCard from "./UserCard";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BASE_URL } from "../utils/constants";
import axios from "axios";

const EditProfile = ({ user }) => {
  const [firstname, setFirstName] = useState(user.firstname);
  const [lastname, setLastName] = useState(user.lastname);
  const [age, setAge] = useState(user.age);
  const [Gender, setGender] = useState(user.Gender);
  const [about, setAbout] = useState(user.about);
  const [photoURL, setPhotoURL] = useState(user.photoURL);
  const [error, setError] = useState("");
  const[showToast, setShowToast] = useState(false);
  const dispatch = useDispatch();

  const saveProfile = async () => {
    try {
      setError("");
      const res = await axios.patch(
        BASE_URL + "/profile/edit",
        {
          firstname,
          lastname,
          photoURL,
          age,
          Gender,
          about,
        },
        { withCredentials: true }
      );
      dispatch(addUser(res?.data?.data));
        setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 3000);

    } catch (err) {
      setError(err.response.data);
    }
  };

  return (
    <>
      <div className="flex flex-col md:flex-row justify-center my-10 ">
        <div className="flex justify-center items-center min-h-screen mx-10 ">
          <div className="card bg-gray-800 w-96 shadow-2xl rounded-lg p-6">
            <div className="card-body">
              <h2 className="text-white text-2xl font-semibold text-center mb-6">
                Edit Profile
              </h2>
              <div>
                {/* FirstName Input */}
                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text text-gray-300">First Name</span>
                  </div>
                  <input
                    type="text"
                    value={firstname}
                    placeholder="Enter your First Name"
                    className="input input-bordered w-full bg-gray-700 text-white rounded-lg px-3 py-2 hover:ring hover:ring-blue-500 transition"
                    onChange={(e) => {
                      setFirstName(e.target.value);
                    }}
                  />
                </label>

                {/* Margin between first name and lastname */}
                <div className="my-5"></div>

                {/* Last Name Input */}
                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text text-gray-300">Last Name</span>
                  </div>
                  <input
                    type="text"
                    value={lastname}
                    placeholder="Enter your Last Name"
                    className="input input-bordered w-full bg-gray-700 text-white rounded-lg px-3 py-2 hover:ring hover:ring-blue-500 transition"
                    onChange={(e) => {
                      setLastName(e.target.value);
                    }}
                  />
                </label>
                {/* Margin between LastName and PhotoURL*/}
                <div className="my-5"></div>

                {/* PhotoURL Input */}
                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text text-gray-300">Photo URL</span>
                  </div>
                  <input
                    type="text"
                    value={photoURL}
                    placeholder="Photo url"
                    className="input input-bordered w-full bg-gray-700 text-white rounded-lg px-3 py-2 hover:ring hover:ring-blue-500 transition"
                    onChange={(e) => {
                      setPhotoURL(e.target.value);
                    }}
                  />
                </label>
                {/* Margin between PhotoURL and Age*/}
                <div className="my-5"></div>

                {/*Age Input */}
                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text text-gray-300">Age</span>
                  </div>
                  <input
                    type="text"
                    value={age}
                    placeholder="Enter your Age"
                    className="input input-bordered w-full bg-gray-700 text-white rounded-lg px-3 py-2 hover:ring hover:ring-blue-500 transition"
                    onChange={(e) => {
                      setAge(e.target.value);
                    }}
                  />
                </label>
                {/* Margin between age and Gender */}
                <div className="my-5"></div>

                {/* Gender Input */}
                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text text-gray-300">Gender</span>
                  </div>
                  <input
                    type="text"
                    value={Gender}
                    placeholder="Enter your Gender"
                    className="input input-bordered w-full bg-gray-700 text-white rounded-lg px-3 py-2 hover:ring hover:ring-blue-500 transition"
                    onChange={(e) => {
                      setGender(e.target.value);
                    }}
                  />
                </label>
                {/* Margin between gender and about */}
                <div className="my-5"></div>

                {/* About Input */}
                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text text-gray-300">About</span>
                  </div>
                  <input
                    type="text"
                    value={about}
                    placeholder="About you"
                    className="input input-bordered w-full bg-gray-700 text-white rounded-lg px-3 py-2 hover:ring hover:ring-blue-500 transition"
                    onChange={(e) => {
                      setAbout(e.target.value);
                    }}
                  />
                </label>
              </div>
              <p className="text-red-500 text-center mt-2 text-sm font-medium">
                {error}
              </p>
              {/* Login Button */}

              <div className="card-actions justify-center mt-8">
                <button
                  className="w-full py-3 rounded-md text-white text-lg font-medium bg-blue-600 hover:bg-blue-700 transition"
                  onClick={saveProfile}
                >
                  Save Profile
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center min-h-screen mx-10 ">
          <UserCard
            user={{ firstname, lastname, photoURL, age, Gender, about }}
          />
        </div>
      </div>
    { showToast && ( <div className="toast toast-top toast-center">
        <div className="alert alert-success">
          <span>Profile updated successfully.</span>
        </div>
      </div>)}
    </>
  );
};

export default EditProfile;
