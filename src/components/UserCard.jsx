import React from 'react'

const UserCard = ({user}) => {
const{firstname,lastname,photoURL,age,Gender,about}=user;
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
  
      <button className="btn btn-primary">Ignored </button>
      <button className="btn btn-secondary">Interested</button>
    </div>
  </div>
</div>
  )
}

export default UserCard;
