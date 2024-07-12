import React, { useState } from 'react'
import {FaUser} from 'react-icons/fa';
import { IoCall, IoKey, IoMail, IoWarning } from "react-icons/io5";
import {Link} from 'react-router-dom';
import axios from 'axios';
const Register = () => {
  const [username,setUserName] = useState('')
  const [email,setEmail] = useState('')
  const [phone,setPhone] = useState('')
  const [password,setPassword] = useState('')
  const [cpassword,setCpassword] = useState('')
  const [error,setError] = useState('')

    const handleSubmit = (e) => {
      if(username === ''){
        setError("Username is Required..")
        e.preventDefault();
      }
      else if(username.length < 8){
        setError("Username must be Greater than 8 Character..")
        e.preventDefault()
      }
      else if(email === ''){
        setError("Email is Required..")
        e.preventDefault();
      }
      else if(phone === ''){
        setError("Mobile Number is Required..")
        e.preventDefault();
      }
      else if(phone.length !== 10){
        setError("Invalid Mobile Number..")
        e.preventDefault()
      }
      else if(password === ''){
        setError("Password field is Required..")
        e.preventDefault()
      }
      else if(cpassword === ''){
        setError("ReEnter Confirm Password")
        e.preventDefault()
      }
      else if(cpassword !== password){
        setError("Password did't Match")
        e.preventDefault()
      }
      else{
        axios.post('http://localhost:3333/signup',{username,email,phone,password})
        .then(result => console.log(result))
        .catch(err => console.log(err));
        setError('')
        setUserName('')
        setEmail('')
        setPassword('')
        setPhone('')
      }
    }
  return (
    <>
      <div className="form">
        <form>
            <h2>User Register</h2>
            <p id='line'></p>
            <div className="error">
              {error.length ? <><IoWarning id='warning'/><p>{error}</p></> : null}
            </div>
            <div className="username">
                <FaUser />
                <input type="text" onChange={(e)=>setUserName(e.target.value)} autoComplete='off' placeholder='Username' />
            </div>
            <div className="email">
                <IoMail />
                <input type="email" onChange={(e)=>setEmail(e.target.value)} autoComplete='off' placeholder='Email' />
            </div>
            <div className="phone">
                <IoCall />
                <input type="tel" value={phone} onChange={(e)=>setPhone(e.target.value)} autoComplete='off' placeholder='Mobile Number' />
            </div>
            <div className="password">
                <IoKey />
                <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} autoComplete='off' placeholder='Password' />
            </div>
            <div className="cpassword">
                <IoKey />
                <input type="password" onChange={(e)=>setCpassword(e.target.value)} autoComplete='off' placeholder='Confirm Password' />
            </div>
            <div className="btn">
                <Link to='/login' type='submit' id='btn' onClick={(e)=>handleSubmit(e)}>Register</Link>
            </div>
        </form>
        <div className="bot1">
            <p>Already Registered ?</p><Link to='/login' id='redirect'>Login</Link>
        </div>
      </div>
    </>
  )
}

export default Register