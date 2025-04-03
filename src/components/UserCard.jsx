import React from 'react'
import { BASE_URL } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { removeUserFromFeed } from '../utils/feedSlice';
import axios from "axios";

const UserCard = ({user}) => {
const{_id,firstname,lastname,photoURL,age,Gender,about}=user;
const dispatch = useDispatch();

const handleSendRequest = async (status,userId) => {
  try{
    const res = await axios.post(
      BASE_URL + "/request/send/" +status+ "/" + userId,
      {},
      { withCredentials: true }
    );
    dispatch(removeUserFromFeed(userId));
  }catch(err){
    console.log(err);
  }
}

console.log(user);
  return (
    <div className="card bg-base-300 w-96 shadow-xl">
  <figure>
    <img
      src={user.photoURL}
      alt="photo" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{firstname+" "+lastname}</h2>
    {age && Gender&& <p>{age +", "+Gender}</p>}
    <p>{about}</p>
    <div className="card-actions justify-center my-4">
  
      <button className="btn btn-primary" onClick={()=>handleSendRequest("ignored",_id)}>Ignored </button>
      <button className="btn btn-secondary" onClick={()=>handleSendRequest("interested",_id)}>Interested</button>
    </div>
  </div>
</div>
  )
}

export default UserCard;
