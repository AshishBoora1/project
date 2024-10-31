import React, { useState } from "react";
import {
  CrossIcon,
  HidePassIcon,
  Logo,
  ShowPassIcon,
} from "../components/icons/Icons";
import googleicon from "../assets/images/svg/googleicon.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { useThem } from "../Context/Context";
import { toast, ToastContainer } from "react-toastify";
function SignIn() {
  const [usersignin, setUserSignIn] = useState({
    email: "",
    password: "",
  });
  const { setShowHideContext, LoginUser, setLoading } = useThem();
  const [showhide, setShowHide] = useState(false);
  function onhandelchange(e) {
    const { name, value } = e.target;
    setUserSignIn({ ...usersignin, [name]: value });
  }

  const navigate = useNavigate();
  function onhadelsubmit(e) {
    e.preventDefault();
    LoginUser(usersignin.email, usersignin.password)
      .then((result) => {
        if (result.success) {
          setShowHideContext(null);
          toast.success(result.message, {
            onClose: () => {
              navigate("/");
            },
            autoClose: 2000,
          });
          setUserSignIn({
            email: "",
            password: "",
          });
          localStorage.setItem("userlogin", true);
        } else {
          toast.error(result.message || "SignIn failed");
        }
      })
      .catch((error) => {
        console.error("SignIn error:", error);
        toast.error("An error occurred during signin.");
      });
  }

  return (
    <>
      <div className=" bg-white md:rounded-[20px] md:border-[2px] border-[#D4D4D4]  px-[34px] md:px-[70px] pb-[35px] pt-10  w-screen md:w-[500px] gap-5 min-h-screen md:min-h-full   md:h-[570px] h_auto overflow-auto relative flex flex-col justify-evenly md:justify-between items-center">
        <div className=" flex justify-end items-end w-full">
          <button onClick={() => setShowHideContext(null)}>
            <CrossIcon clr={"#ccc"} />
          </button>
        </div>
        <div className=" md:hidden">
          <Logo />
        </div>
        <div className=" w-full">
          <h2 className=" font-medium text-[25px] text-[#292727] text-center">
            Sign in to GERAPPS
          </h2>
          <form className=" mt-5" onSubmit={onhadelsubmit}>
            <input
              className=" border w-full border-[#CACACA] rounded-[7px] font-normal placeholder:font-normal text-lg placeholder:text-[#292727] placeholder:text-lg text-[#292727] px-5 py-[10px] outline-none"
              required
              onChange={onhandelchange}
              value={usersignin.email}
              placeholder="Email"
              type="email"
              name="email"
            />
            <div className=" border border-[#CACACA] rounded-[7px] px-5 flex items-center mt-5">
              <input
                className=" w-full font-normal placeholder:font-normal text-lg placeholder:text-[#292727] placeholder:text-lg text-[#292727]  py-[10px] outline-none"
                required
                onChange={onhandelchange}
                value={usersignin.password}
                placeholder="Password"
                type={!showhide ? "password" : "text"}
                name="password"
              />
              <button type="button" onClick={() => setShowHide(!showhide)}>
                {showhide ? <ShowPassIcon /> : <HidePassIcon />}
              </button>
            </div>
            <button className=" text-white font-normal text-xl bg-[#B99976] rounded-[7px] py-[15px] w-full mt-[25px]">
              Sign In
            </button>
            <div className=" flex gap-2 my-5 items-center">
              <div className=" w-full h-[1px] bg-[#292727] opacity-50"></div>
              <span className=" font-normal text-base text-[#292727] opacity-50">
                Or
              </span>
              <div className=" w-full h-[1px] bg-[#292727] opacity-50"></div>
            </div>
            <button
              type="button"
              className=" bg-[#4285F4] rounded-[7px] p-1 flex items-center w-full gap-5 sm:gap-10"
            >
              <img src={googleicon} alt="googleicon" />
              <span className=" text-white font-normal text-lg">
                Continue with Google
              </span>
            </button>
          </form>
        </div>
        <div>
          <div className=" flex gap-2  items-center w-full">
            <div className=" sm:min-w-[50px] h-[1px] bg-[#292727] opacity-50"></div>
            <p className=" font-normal text-base text-[#292727] opacity-50 text-nowrap">
              Don’t have an account?
            </p>
            <div className="sm:min-w-[50px] h-[1px] bg-[#292727] opacity-50"></div>
          </div>
          <div className=" text-center  mt-[30px]">
            <button
              className=" border border-[#B99976] rounded-[7px] text-[#B99976] font-normal text-xl py-[10px] px-[35px]"
              type="button"
              onClick={() => setShowHideContext(false)}
            >
              Sign Up
            </button>
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
}

export default SignIn;
