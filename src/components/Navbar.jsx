import React, { useState } from "react";
import { CrossIcon, Logo, ThreeLineIcon } from "../components/icons/Icons";
import { NavLink } from "react-router-dom";
import { useThem } from "../Context/Context";

function Navbar({ show }) {
  const [isOpen, setIsOpen] = useState(false);
  const { setShowSignPop, scrollToNextSection } = useThem();

  return (
    <nav className={show && " border-0 md:border-b border-[#29272726]"}>
      <div
        className={`container xl:max-w-[1328px] mx-auto px-3 pt-5 pb-4 ${
          !show && " border-0 md:border-b border-[#29272726]"
        }`}
      >
        <div className="flex items-center justify-between">
          <Logo />

          <div className="lg:hidden">
            <button onClick={() => setIsOpen(true)} className="text-[#292727]">
              {!isOpen && <ThreeLineIcon />}
            </button>
          </div>

          <div
            className={`flex-col fixed lg:relative left-0 bg-white lg:bg-transparent z-50 min-h-[400px] lg:min-h-full justify-between py-10 lg:py-0 w-full lg:top-0 lg:left-0 lg:h-auto lg:w-auto lg:flex-row flex gap-6 px-5 lg:px-0 xl:gap-[45px] items-center ${
              isOpen ? "top-0" : "-top-full"
            }`}
          >
            <div className=" w-full flex justify-end lg:hidden">
              <button onClick={() => setIsOpen(false)}>
                <CrossIcon />
              </button>
            </div>
            <NavLink
              className="text-xl lg:text-base xl:text-xl font-normal text-[#292727] hover:text-[#1A1615]"
              to=""
              onClick={() => (setIsOpen(false), scrollToNextSection(1))}
            >
              Tech History
            </NavLink>
            <div className=" h-[1px] w-full bg-[#00000040] lg:hidden"></div>
            <NavLink
              className="text-xl lg:text-base xl:text-xl font-normal text-[#292727] hover:text-[#1A1615]"
              to=""
              onClick={() => (setIsOpen(false), scrollToNextSection(2))}
            >
              ML Summary
            </NavLink>
            <div className=" h-[1px] w-full bg-[#00000040] lg:hidden"></div>
            <NavLink
              className="text-xl lg:text-base xl:text-xl font-normal text-[#292727] hover:text-[#1A1615]"
              to=""
              onClick={() => (setIsOpen(false), scrollToNextSection(3))}
            >
              Space Block Puzzle
            </NavLink>
            <div className=" h-[1px] w-full bg-[#00000040] lg:hidden"></div>
            <button
              className="text-xl lg:text-base xl:text-xl font-normal text-white w-[207px] lg:w-auto text-center bg-[#B99976] rounded-[5px] py-2 px-5"
              onClick={() => (setIsOpen(false), setShowSignPop(true))}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
