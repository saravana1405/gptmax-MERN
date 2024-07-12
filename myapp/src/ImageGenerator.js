import React, { useRef, useState } from "react";
import defaultImg from "./assets/frontimg.jpg";
import FadeLoader from "react-spinners/FadeLoader";
import Swal from "sweetalert2";
import { IoMdSend } from "react-icons/io";
import { IoArrowBack, IoHome } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
const ImageGenerator = () => {
  const [userInput, setUserInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const inputref = useRef(null);
  const [imgurl, setImgUrl] = useState("/");
  const navi = useNavigate()
  const getimage = async (e) => {
    e.preventDefault();
    if (userInput === "") {
      Swal.fire({
        title: "Error!",
        text: "You Ask Me Anything brooo...",
        icon: "error",
        // confirmButtonText: 'Cool'
      });
      return false;
    }
    setIsLoading(true);
    const response = await fetch(
      "https://api.openai.com/v1/images/generations",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer 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",
          "User-Agent": "Chrome",
        },
        body: JSON.stringify({
          prompt: `${inputref.current.value}`,
          n: 1,
          size: "256x256",
        }),
      }
    );
    const data = await response.json();
    const image = data.data[0].url;
    setImgUrl(image);
    setIsLoading(false);
  };
  return (
    <div className="imagegen">
      <h1 id="imghead">GPT - AI IMAGES</h1>
      <div className="imgback">
        <img
          src={imgurl === "/" ? defaultImg : imgurl}
          alt=""
          style={
            isLoading ? { visibility: "hidden", position: "relative" } : null
          }
        />
      </div>
      {isLoading ? (
        <FadeLoader
          id="spinner"
          color="#36d7b7"
          size={50}
          style={{ position: "absolute", right: "45vw", top: "38vh" }}
        />
      ) : null}
      <div className="userchoice">
        <form onSubmit={getimage}>
          <input
            type="text"
            ref={inputref}
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="What do you want..?"
          />
          <button type="submit">
            <IoMdSend />
          </button>
        </form>
        <div className="goback" onClick={() => navi("/")}>
          <IoHome />
          <p>Home</p>
        </div>
      </div>
    </div>
  );
};

export default ImageGenerator;
