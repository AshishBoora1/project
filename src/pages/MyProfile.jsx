import React, { useState } from "react";
import Navbar from "../components/common/Navbar.jsx";
import { NavLink } from "react-router-dom";
import { EmailIcon } from "../components/icons/Icons";
import { useThem } from "../Context/Context.jsx";

export default function MyProfile() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function onhadelsubmit(e) {
    e.preventDefault();
  }
  const { getsubscriptionsdata, subscriptions, UserName } = useThem();
  return (
    <div className=" h-screen flex flex-col justify-between gap-10">
      <div>
        <Navbar show={true} />
        <div className="container xl:max-w-[1228px] mx-auto px-3">
          <div className="flex items-center justify-around mt-5  pt-[50px] lg:pt-[100px]">
            <NavLink
              to={"/subscriptions"}
              onClick={() => subscriptions()}
              className="text-[15px] lg:text-[22px] w-full font-medium pb-[18px] text-center  border-b border-[#CACACA] "
            >
              Subscriptions
            </NavLink>
            <NavLink
              onClick={() => UserName()}
              to={"/my-profile"}
              className="text-[15px] lg:text-[22px] font-medium w-full text-center pb-[18px] text-[#B99976] border-b border-[#B99976]"
            >
              My Profile
            </NavLink>
          </div>

          <form className="my-[75px]" onSubmit={onhadelsubmit}>
            <label>Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-[18px] border w-full border-[#CACACA] rounded-[7px] font-normal placeholder:font-normal text-lg placeholder:text-[#292727] placeholder:text-lg text-[#292727] px-5 py-[10px] outline-none"
              required
              placeholder="username"
              type="text"
              name="text"
            />
            <div className="mt-10">
              <label>Email</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-[18px] border w-full border-[#CACACA] rounded-[7px] font-normal placeholder:font-normal text-lg placeholder:text-[#292727] placeholder:text-lg text-[#292727] px-5 py-[10px] outline-none"
                required
                placeholder="yourmail2024@gmail.com"
                type="email"
                name="email"
              />
            </div>
            <div className="flex items-center flex-wrap gap-5 sm:gap-12 mt-[35px] lg:mt-[120px]">
              <button
                type="submit"
                className="px-10 lg:px-[98px] text-white font-normal text-xl bg-[#B99976] rounded-[7px] py-[15px]"
              >
                Save
              </button>

              <button
                type="button"
                className="px-[30px] lg:px-[86px] text-white font-normal text-xl bg-[#D7191C] rounded-[7px] py-[15px]"
              >
                Delete Account
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className=" flex justify-center bg-[#B99976]">
        <p className=" flex gap-2 items-center text-white font-normal text-base md:text-[22px]  py-4">
          <span>
            {" "}
            <EmailIcon />
          </span>
          sel.pagi.comp@gmail.com
        </p>
      </div>
    </div>
  );
}
