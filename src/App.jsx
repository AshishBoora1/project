import React, { useEffect } from "react";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SignUp from "./account/SignUp";
import SignIn from "./account/SignIn";
import VerifyEmail from "./components/common/VerifyEmail";
import Home from "./pages/Home";
import MyProfile from "./pages/MyProfile";
import Subscriptions from "./pages/Subscriptions";
import { Route, Routes } from "react-router-dom";
import { useThem } from "./Context/Context";
import Auth from "./account/Auth";
import Loader from "./components/common/Loader";
import ProtectRoute from "./components/protectroute/ProtectRoute";
import OAuthCallback from "./pages/OAuthCallback";

function App() {
  const { showhidecontext, loading } = useThem();
  return (
    <div>
      {showhidecontext !== null ? (
        <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-md z-[80]"></div>
      ) : (
        ""
      )}
      <div
        className={`fixed top-1/2 left-1/2 -translate-x-1/2 duration-700 -translate-y-1/2 z-[100] h-screen w-screen flex justify-center items-center ${
          showhidecontext === null ? "scale-0" : " scale-100"
        }`}
      >
        <Auth />
      </div>

      {loading && <Loader />}
      {/* )} */}
      <Routes>
        <Route index element={<Home />} />
        <Route path="verify_email" element={<VerifyEmail />} />
        <Route
          path="my-profile"
          element={<ProtectRoute Component={MyProfile} />}
        />
        <Route
          path="subscriptions"
          element={<ProtectRoute Component={Subscriptions} />}
        />
        {/* <Route path="/auth/callback" element={<OAuthCallback />} /> */}
      </Routes>
    </div>
  );
}

export default App;
