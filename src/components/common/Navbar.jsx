import React, { useEffect, useState } from "react";
import { CrossIcon, Logo, ThreeLineIcon } from "../../components/icons/Icons";
import { NavLink, useNavigate } from "react-router-dom";
import { useThem } from "../../Context/Context";
import { toast, ToastContainer } from "react-toastify";

function Navbar({ show }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropDownOpen, setIsOpenDownOpen] = useState(false);
  const { scrollToNextSection, setShowHideContext, LogoutUser } = useThem();
  const [showbtn, setShowBtn] = useState(false);
  const login = localStorage.getItem("userlogin");
  useEffect(() => {
    setShowBtn(!!login);
  }, [login]);

  const navigate = useNavigate();
  function LogoutBtn() {
    localStorage.removeItem("userlogin"), setShowBtn(false);
    LogoutUser()
      .then((result) => {
        if (result.success) {
          navigate("/");
          toast.success(result.message);
          setIsOpenDownOpen(false);
        } else {
          toast.error(result.message || "Logout failed");
        }
      })
      .catch((error) => {
        console.error("Logout error:", error);
        toast.error("An error occurred during Logout.");
      });
  }

  return (
    <nav className={show && " border-0 md:border-b border-[#29272726]"}>
      <div
        className={`container xl:max-w-[1328px] mx-auto px-3 pt-5 pb-4 ${
          !show && " border-0 md:border-b border-[#29272726]"
        }`}
      >
        <div className="flex items-center justify-between">
          <NavLink to={"/"}>
            <Logo />
          </NavLink>

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
            {showbtn ? (
              <>
                <div className="relative ml-3">
                  <div>
                    <button
                      type="button"
                      onClick={() => setIsOpenDownOpen(!isDropDownOpen)}
                      className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                      id="user-menu-button"
                      aria-expanded="false"
                      aria-haspopup="true"
                    >
                      <span className="absolute -inset-1.5"></span>
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </button>
                  </div>

                  {isDropDownOpen && (
                    <div
                      className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="user-menu-button"
                      tabIndex="-1"
                    >
                      <NavLink
                        to="/my-profile"
                        className="font-normal block px-4 py-2 text-sm text-gray-700"
                        role="menuitem"
                        tabIndex="-1"
                        onClick={() => setIsOpenDownOpen(false)}
                        id="user-menu-item-0"
                      >
                        Your Profile
                      </NavLink>
                      <button
                        className="font-normal block px-4 py-2 text-sm text-gray-700"
                        onClick={LogoutBtn}
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <button
                className="text-xl lg:text-base xl:text-xl font-normal text-white w-[207px] lg:w-auto text-center bg-[#B99976] rounded-[5px] py-2 px-5"
                onClick={() => (setIsOpen(false), setShowHideContext(false))}
              >
                Sign Up
              </button>
            )}
          </div>
        </div>
      </div>
      <ToastContainer />
    </nav>
  );
}

export default Navbar;
