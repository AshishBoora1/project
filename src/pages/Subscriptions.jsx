import React, { useEffect } from "react";
import { CardData } from "../components/Helper/Helper.jsx";
import Navbar from "../components/common/Navbar.jsx";
import { EmailIcon } from "../components/icons/Icons.jsx";
import { NavLink } from "react-router-dom";
import { useThem } from "../Context/Context.jsx";
import SpaceBlack from "../assets/images/png/SpaceBlock.png";
import TechHistory from "../assets/images/png/TechHistory.png";
import MLSmmary from "../assets/images/png/MLSmmary.png";
import datanotfound from "../assets/images/png/datanotfound.jpg";

export default function Subscriptions() {
  const { getsubscriptionsdata, subscriptions, UserName } = useThem();
 useEffect(() => {
   const login = localStorage.getItem("userlogin");
   const token = localStorage.getItem("token");
   if (login && token) {
     subscriptions();
   }
 }, []);


  
  return (
    <div className="flex h-screen flex-col justify-between gap-10">
      <div>
        <Navbar show={true} />
        <div className="container xl:max-w-[1228px] mx-auto px-3">
          <div className="flex items-center justify-around mt-5  pt-[50px] lg:pt-[100px]">
            <NavLink
              to={"/subscriptions"}
              onClick={() => subscriptions()}
              className="text-[15px] lg:text-[22px] w-full font-medium pb-[18px] text-center text-[#B99976] border-b border-[#B99976]"
            >
              Subscriptions
            </NavLink>
            <NavLink
              to={"/my-profile"}
              onClick={() => UserName()}
              className="text-[15px] lg:text-[22px] font-medium w-full text-center pb-[18px]  border-b border-[#CACACA]"
            >
              My Profile
            </NavLink>
          </div>
          <div
            className={`flex flex-wrap items-center ${
              getsubscriptionsdata.length <= 0
                ? "justify-center"
                : "justify-between"
            } mx-[-12px] my-[30px]  gap-5`}
          >
            {getsubscriptionsdata.length <= 0 ? (
              <div>
                {/* <h1 className="text-[15px] lg:text-[28px] w-full font-no text-center text-black">
                  Data Not Found
                </h1> */}
                <img className=" w-full sm:h-[400px] xl:h-[600px]" src={datanotfound} alt="datanotfound" />
              </div>
            ) : (
              <>
                {getsubscriptionsdata.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="w-full md:w-[48%] lg:w-[32%] px-3 mx-auto h-full"
                    >
                      <div className="py-[25px] lg:py-[30px] px-[10px] lg:px-[20px]  border border-[#B999764D] shadow-lg text-center rounded-[15px] h-[252px] flex flex-col justify-between">
                        <div>
                          <img
                            className="mx-auto"
                            src={
                              index === 0
                                ? SpaceBlack
                                : index === 1
                                ? TechHistory
                                : MLSmmary
                            }
                          />
                          <p className="text-xl lg:text-[22px] font-medium mt-3 lg:mt-3">
                            {item.public_name}
                          </p>
                          <div className="flex items-center lg:flex-col xl:flex-row text-center justify-center mt-3 lg:mt-5">
                            <p className="text-[#B99976] text-base xl:text-lg me-1">
                              status
                            </p>
                            <p className="text-base lg:text-lg text-center text-nowrap">
                              {item.status}
                            </p>
                          </div>
                        </div>
                        <div>
                          <NavLink
                            target="_blank"
                            className=" text-sm text-black after:contents-[] after:absolute after:bottom-0 after:left-0 after:bg-black after:h-[1px] after:w-full relative"
                            to={item.link.android}
                          >
                            Android store
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </>
            )}
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
