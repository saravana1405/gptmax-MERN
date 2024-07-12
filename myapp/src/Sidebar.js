import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { FaPenNib, FaPlus, FaUser } from "react-icons/fa6";
import { FaHistory } from "react-icons/fa";
import { IoClose, IoLogOut, IoMenu } from "react-icons/io5";
import chatgptLogo from './assets/chatgpt.svg';
const Sidebar = () => {
  const navi = useNavigate()
  const [choices,setChoices] = useState([
    {
      id:1,
      choice : "what is python"
    },
    {
      id:2,
      choice : "who is father of quantum physics"
    },
    {
      id:3,
      choice : "what are the importance of AI and machine learning"
    }
  ])
  return (
    <div className="sidebar1">
            <div className="upperside">
                  <div className="head">
                      <img src={chatgptLogo} alt="" />
                      <h1>GPT-MAX</h1>
                  </div>
                  
          <IoClose id='close' onClick={()=>navi('/')}/>
                  <div className="newchat">
                      <button><FaPlus /> New Chat</button>
                  </div>
                  <div className="links2">
          <Link to="/imageai">AI Images</Link>
        </div>
            </div>
            <div className="lowerside">
            <FaHistory /><h1>Recent History</h1>
            <ul>
            {choices.map(item => {
              return(
                  <li key={item.id}>
                   <div><FaPenNib />{item.choice}</div>
                  </li>
                  )
                })}
                </ul>
            </div>
            <div className="bottom">
               <p><FaUser />Profile</p>
               <Link to="/register"><p><IoLogOut />Logout</p></Link>
            </div>
        </div>
  )
}

export default Sidebar