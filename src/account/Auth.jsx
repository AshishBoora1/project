import React, { useState } from "react";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import { useThem } from "../Context/Context";
function Auth() {
  const { showhidecontext } = useThem();
  return (
    <div>
      {showhidecontext ===
      (
        <div>
        </div>
      ) ? null : showhidecontext === false ? (
        <div>
          {" "}
          <SignUp />
        </div>
      ) : (
        <div>
          <SignIn />
        </div>
      )}
    </div>
  );
}

export default Auth;
