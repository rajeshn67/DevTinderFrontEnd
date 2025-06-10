import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addConnections } from "../utils/connectionSlice";
import {Link} from "react-router-dom";

const Connections = () => {
  const connections = useSelector((state) => state.connections);
  const dispatch = useDispatch();


  const fetchConnections = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/connections", {
        withCredentials: true,
      });

      dispatch(addConnections(res.data.data));
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchConnections();
  }, []);
  if (!connections) return;
  if (connections.length === 0) return <h1 className="flex justify-center my-10">No Connections</h1>;
  return (
    <div className=" text-center my-10">
      <h1 className="text-bold text-white text-3xl">Connections</h1>
      {connections.map((connection) => {
        const { _id,firstname, lastname, photoURL, age, Gender, about } =
          connection;
        return (
          <div  key ={_id}className=" flex m-4 p-4 rounded-lg bg-base-300 w-1/2 mx-auto">
            <div>
              <img
                alt="Photo"
                className="w-20 h-20 rounded-full" // add  <object-cover> css class to make it look good
                src={photoURL}
              />
            </div>
            <div className="text-left mx-4">
              <h2 className="font-bold text-xl">
                {firstname + " " + lastname}
              </h2>
             { age && Gender && <p>{age+" , "+Gender}</p>}
              <p>{about}</p>
              
            </div>
            <Link to={"/chat/"+ _id}>
            <button className="btn btn-primary mt-2">Chat</button>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Connections;
