import React, { useState } from "react";
import { IoKey, IoMail, IoWarning } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
const Login = () => {
  const [email2, setEmail2] = useState('');
  const [password2, setPassword2] = useState('');
  const [error, setError] = useState("");
  const [check, setCheck] = useState(false);
  const navi = useNavigate();

  // function clear() {
  //   setError("");
  //   setEmail2("");
  //   setPassword2("");
  // }

  const handleSubmit = (e) => {
    if (email2 === "") {
      setError("Email is Required..");
      e.preventDefault();
    } else if (password2 === "") {
      setError("Password field is Required..");
      e.preventDefault();
    } else if (!check) {
      setError("If you are Human,Tick the Checkbox");
      e.preventDefault();
    } else {
      axios
        .post("http://localhost:3333/signin", { email2, password2 })
        .then((result) => {
          console.log(result);
          if (result.data === "Success") {
            Swal.fire({
              title: "Login SuccessFull",
              // text: "You Ask Me Anything brooo...",
              icon: "success",
            });
            navi("/");
          } else {
            setError("Invalid Data..");
          }
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="form">
      <form>
        <h2>User Login</h2>
        <p id="line"></p>
        <div className="error">
          {error.length ? (
            <>
              <IoWarning id="warning" />
              <p>{error}</p>
            </>
          ) : null}
        </div>
        <div className="email">
          <IoMail />
          <input
            type="email"
            onChange={(e) => setEmail2(e.target.value)}
            autoComplete="off"
            placeholder="Email"
          />
        </div>
        <div className="password">
          <IoKey />
          <input
            type="password"
            onChange={(e) => setPassword2(e.target.value)}
            autoComplete="off"
            placeholder="Password"
          />
        </div>
        <div className="check">
          <input
            type="checkbox"
            onClick={() => (check ? setCheck(false) : setCheck(true))}
            required
          />
          <label>I am not a Robot</label>
        </div>
        <div className="btn">
          <Link id="btn" onClick={(e) => handleSubmit(e)}>
            Login
          </Link>
        </div>
      </form>
      <div className="bot">
        <p>You Are New User ?</p>
        <Link to="/register" id="redirect">
          Register
        </Link>
      </div>
    </div>
  );
};

export default Login;
