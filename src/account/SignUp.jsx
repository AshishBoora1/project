import React, { useState } from "react";
import {
  CrossIcon,
  HidePassIcon,
  Logo,
  ShowPassIcon,
} from "../components/icons/Icons";
import googleicon from "../assets/images/svg/googleicon.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { useThem } from "../Context/Context";
import SignIn from "./SignIn";
function SignUp() {
  const [usersignup, setUserSignUp] = useState({
    email: "",
    password: "",
    repassword: "",
  });
  const { setShowSignPop, setShowHideContext } = useThem();
  const [showhide, setShowHide] = useState(false);
  const [showhiderepassword, setShowHideRePassword] = useState(false);
  function onhandelchange(e) {
    const { name, value } = e.target;
    setUserSignUp({ ...usersignup, [name]: value });
  }

  const navgate = useNavigate();
  function onhadelsubmit(e) {
    e.preventDefault();
    if (usersignup.password.length < 8 || usersignup.repassword.length < 8) {
      toast.error("password more then 8 chractors!");
    } else if (usersignup.password !== usersignup.repassword) {
      toast.error("Password not match!");
    } else {
      setUserSignUp({
        email: "",
        password: "",
        repassword: "",
      });
      setShowSignPop(false);
      navgate("/");
    }
  }

  return (
    <>
      <div className=" bg-white md:rounded-[20px] md:border-[2px] border-[#D4D4D4]  px-[34px] md:px-[70px] py-10 w-full md:w-[500px] gap-5 min-h-screen md:min-h-full  md:h-[570px] h_auto overflow-auto flex flex-col justify-evenly relative md:justify-between items-center">
        <button
          className=" absolute right-5 top-5"
          onClick={() => setShowHideContext(null)}
        >
          <CrossIcon clr={"#ccc"} />
        </button>
        <div className=" md:hidden">
          <Logo />
        </div>
        <div className=" w-full">
          <h2 className=" font-medium text-[25px] text-[#292727] text-center">
            Sign up to GERAPPS
          </h2>
          <form className=" mt-5" onSubmit={onhadelsubmit}>
            <input
              className=" border w-full border-[#CACACA] rounded-[7px] font-normal placeholder:font-normal text-lg placeholder:text-[#292727] placeholder:text-lg text-[#292727] px-5 py-[10px] outline-none"
              required
              onChange={onhandelchange}
              value={usersignup.email}
              placeholder="Email"
              type="email"
              name="email"
            />
            <div className=" border border-[#CACACA] rounded-[7px] px-5 flex items-center mt-5">
              <input
                className=" w-full font-normal placeholder:font-normal text-lg placeholder:text-[#292727] placeholder:text-lg text-[#292727]  py-[10px] outline-none"
                required
                onChange={onhandelchange}
                value={usersignup.password}
                placeholder="Password"
                type={!showhide ? "password" : "text"}
                name="password"
              />
              <button type="button" onClick={() => setShowHide(!showhide)}>
                {showhide ? <ShowPassIcon /> : <HidePassIcon />}
              </button>
            </div>
            <div className=" border border-[#CACACA] rounded-[7px] px-5 flex items-center mt-5">
              <input
                className=" w-full font-normal placeholder:font-normal text-lg placeholder:text-[#292727] placeholder:text-lg text-[#292727]  py-[10px] outline-none"
                required
                onChange={onhandelchange}
                value={usersignup.repassword}
                placeholder="Check Password"
                type={!showhiderepassword ? "password" : "text"}
                name="repassword"
              />
              <button
                type="button"
                onClick={() => setShowHideRePassword(!showhiderepassword)}
              >
                {showhiderepassword ? <ShowPassIcon /> : <HidePassIcon />}
              </button>
            </div>
            <button className=" text-white font-normal text-xl bg-[#B99976] rounded-[7px] py-[15px] w-full mt-[25px]">
              Sign Up
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
              className=" bg-[#4285F4] rounded-[7px] p-1 flex items-center w-full gap-10"
            >
              <img src={googleicon} alt="googleicon" />
              <span className=" text-white font-normal text-lg text-nowrap">
                Continue with Google
              </span>
            </button>
          </form>
        </div>
        <div>
          <div className=" flex gap-2  items-center w-full">
            <div className=" min-w-[50px] h-[1px] bg-[#292727] opacity-50"></div>
            <p className=" font-normal text-base text-[#292727] opacity-50 text-nowrap">
              Already have an account?
            </p>
            <div className="min-w-[50px] h-[1px] bg-[#292727] opacity-50"></div>
          </div>
          <div
            className=" text-center  mt-[30px]"
            onClick={() => setShowHideContext(true)}
          >
            <button className=" border border-[#B99976] rounded-[7px] text-[#B99976] font-normal text-xl py-[10px] px-[35px]">
              Sign in
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
