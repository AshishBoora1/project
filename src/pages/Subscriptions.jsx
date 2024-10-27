import React from "react";
import { CardData } from "../components/Helper/Helper.jsx";
import Navbar from "../components/Navbar.jsx";
import { EmailIcon } from "../components/icons/Icons.jsx";
import { NavLink } from "react-router-dom";

export default function Subscriptions() {
  return (
    <div className="flex h-screen flex-col justify-between gap-10">
      <div>
        <Navbar />
        <div className="container xl:max-w-[1228px] mx-auto px-3">
          <div className="flex items-center justify-around mt-5  pt-[50px] lg:pt-[100px]">
            <NavLink
              to={"/subscriptions"}
              className="text-[15px] lg:text-[22px] w-full font-medium pb-[18px] text-center text-[#B99976] border-b border-[#B99976]"
            >
              Subscriptions
            </NavLink>
            <NavLink
              to={"/my-profile"}
              className="text-[15px] lg:text-[22px] font-medium w-full text-center pb-[18px]  border-b border-[#CACACA]"
            >
              My Profile
            </NavLink>
          </div>
          <div className="flex flex-wrap items-center justify-between mx-[-12px] mt-[30px] lg:mt-[100px] gap-5 lg:flex-nowrap">
            {CardData.map((item, index) => {
              return (
                <div
                  key={index}
                  className="w-full md:w-[48%] lg:w-4/12 px-3 mx-auto h-full"
                >
                  <div className="py-[25px] lg:py-[30px] px-[10px] lg:px-[20px]  border border-[#B999764D] shadow-lg text-center rounded-[15px] h-[252px]">
                    <img className="mx-auto" src={item.img} />
                    <p className="text-xl lg:text-[22px] font-medium mt-3 lg:mt-3">
                      {item.name}
                    </p>
                    <div className="flex items-center lg:flex-col xl:flex-row text-center justify-center mt-3 lg:mt-5">
                      <p className="text-[#B99976] text-base xl:text-lg me-1">
                        {item.title}
                      </p>
                      <p className="text-base lg:text-lg text-center text-nowrap">
                        {item.vistlink}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
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
