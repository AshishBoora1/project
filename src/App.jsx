import React from "react";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SignUp from "./account/SignUp";
import SignIn from "./account/SignIn";
import Home from "./pages/Home";
import MyProfile from "./pages/MyProfile";
import Subscriptions from "./pages/Subscriptions";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route index element={<Home />} />
        <Route path="my-profile" element={<MyProfile />} />
        <Route path="subscriptions" element={<Subscriptions />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="sign-in" element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App;
