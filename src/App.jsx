import React from "react";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SignUp from "./account/SignUp";
import SignIn from "./account/SignIn";
import Home from "./pages/Home";
import MyProfile from "./pages/MyProfile";
import Subscriptions from "./pages/Subscriptions";
import { Route, Routes } from "react-router-dom";
import { useThem } from "./Context/Context";
import Auth from "./account/Auth";

function App() {
  const { showsignpop, showhidecontext } = useThem();

  return (
    <div>
      {showhidecontext !== null ? (
        <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-md z-[80]"></div>
      ) : (
        ""
      )}
      {/* {showsignpop && ( */}
      <div
        className={`fixed top-1/2 left-1/2 -translate-x-1/2 duration-700 -translate-y-1/2 z-[100] w-full md:w-auto ${
          showhidecontext === null ? "scale-0" : " scale-100"
        }`}
      >
        <Auth />
      </div>
      {/* )} */}
      <Routes>
        <Route index element={<Home />} />
        <Route path="my-profile" element={<MyProfile />} />
        <Route path="subscriptions" element={<Subscriptions />} />
      </Routes>
    </div>
  );
}

export default App;
