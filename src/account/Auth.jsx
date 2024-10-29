import React, { useState } from "react";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import { useThem } from "../Context/Context";

function Auth() {
  const { showhidecontext, setShowHideContext } = useThem();
  return (
    <div>
      {showhidecontext === <div></div> ? null : showhidecontext === false ? (
        <SignUp />
      ) : (
        <SignIn />
      )}
    </div>
  );
}

export default Auth;
