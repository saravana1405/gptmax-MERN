import React from 'react'
import { FaMailBulk } from 'react-icons/fa';
import { FaKey, FaUser } from 'react-icons/fa6'
import { IoCall } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const navi = useNavigate()
  return (
    <div className="profile">
      <h1>Your Profile</h1>
      <FaUser id="pro" />
      <div className="name2">
        <FaUser />
        <p>
          Name <span className="info">Saravanavel</span>
        </p>
      </div>
      <div className="email2">
        <FaMailBulk />{" "}
        <p>
          {" "}
          Email <span className="info">sk@gmail.com</span>
        </p>
      </div>
      <div className="phone2">
        <IoCall />{" "}
        <p>
          {" "}
          Phone No <span className="info">6385230820</span>
        </p>
      </div>
      <div className="password2">
        <FaKey />{" "}
        <p>
          {" "}
          Your Password <span className="info">sk1**4</span>
        </p>
      </div>
      <div className="btn2">
        <button onClick={() => navi("/")}>Home</button>
        <button onClick={() => navi("/register")}>Logout</button>
      </div>
    </div>
  );
}

export default Profile