import React, { use } from 'react'
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addRequest, removeRequest } from '../utils/requestSlice';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';



const Request = () => {
   const requests = useSelector((state) => state.requests);
  const dispatch = useDispatch();
  const reviewRequest=async(status,_id)=>{
    try {
      const res = await axios.post(
        BASE_URL + "/request/review/" + status + "/" + _id,{},
        {
          withCredentials: true,
        }
      );
      dispatch(removeRequest(_id));
      console.log(res.data.data);
    } catch (err) {
      console.log(err);
    }

  };
     const fetchRequests = async () => {
       
        try {
            const res = await axios.get(BASE_URL + "/user/requests/recieved", {
                withCredentials: true,
            });
            dispatch(addRequest(res.data.data));
           
        } catch (err) {
            console.log(err);
        }
    };

useEffect(() => { 
    fetchRequests();
  }, []); 

  if (!requests) return;
  if (requests.length === 0) return <h1 className="flex justify-center my-10">No Request Found</h1>;
  return (
    <div className=" text-center my-10">
      <h1 className="text-bold text-white text-3xl">Requests</h1>
      {requests.map((request) => {
        const { _id,firstname, lastname, photoURL, age, Gender, about } =
          request.fromUserId;
        return (
          <div
            key={_id}
            className=" flex justify-between items-center m-4 p-4 rounded-lg bg-base-300 w-2/3 mx-auto"
          >
            <div>
              <img
                alt="Photo"
                className="w-20 h-20 rounded-full"
                src={photoURL}
              />
            </div>
            <div className="text-left mx-4">
              <h2 className="font-bold text-xl">
                {firstname + " " + lastname}
              </h2>
              {age && Gender && <p>{age + " , " + Gender}</p>}
              <p>{about}</p>
            </div>
            <div>
              <button
                className="btn btn-primary mx-2"
                onClick={() => reviewRequest("rejected", request._id)}
              >
                Reject
              </button>
              <button className="btn btn-secondary mx-2" onClick={() => reviewRequest("accepted", request._id)}>Accept</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Request
