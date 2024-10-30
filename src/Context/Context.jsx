import { createContext, useContext, useRef, useState } from "react";
import { json } from "react-router-dom";

export const Context = createContext({
  showsignpop: true,
});

export const ContextProvider = ({ children }) => {
  const sectionRefs = useRef([]);
  const [loading, setLoading] = useState(false);
  const [showsignpop, setShowSignPop] = useState(false);
  const [showhidecontext, setShowHideContext] = useState(null);
  const scrollToNextSection = (index) => {
    sectionRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
    });
  };

  ////////////////    SignUpUser   //////////////

  async function SignUpUser(email, password) {
    setLoading(true);
    try {
      const response = await fetch(
        "https://gerapps-440892549125.us-central1.run.app/api/auth/email_sign_up",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
            source_of_registration: "main_site",
          }),
        }
      );
      setLoading(false);

      if (response.status === 404) {
        return { success: false, message: "Account already exists" };
      }

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      return { success: true };
    } catch (error) {
      setLoading(false);
      console.error("Signup failed:", error);
      return { success: false, message: "Server error occurred" };
    }
  }

  ///////////        loginUser    ///////////////

  async function LoginUser(email, password) {
    setLoading(true);
    try {
      let response = await fetch(
        "https://gerapps-440892549125.us-central1.run.app/api/auth/email_login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );
      setLoading(false);

      if (response.status === 200) {
        return { success: true, message: "Account Successfully login" };
      }

      if (response.status === 404) {
        return { success: false, message: "Something Went Wrong" };
      }

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
    } catch (error) {
      setLoading(false);
      console.error("SignIn failed:", error);
    }
  }

  ///////////////       logoutUser   ////////////

  async function LogoutUser() {
    setLoading(true);
    try {
      let response = await fetch(
        "https://gerapps-440892549125.us-central1.run.app/api/auth/logout",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setLoading(false);
      if (response.status === 200) {
        return { success: true, message: "Logout successfully" };
      }

      if (response.status === 404) {
        return { success: false, message: "Logged out Failed" };
      }
    } catch (error) {
      console.error("Logout failed:", error);
      setLoading(false);
    }
  }

  //////////////

  return (
    <Context.Provider
      value={{
        showsignpop,
        setShowSignPop,
        scrollToNextSection,
        sectionRefs,
        showhidecontext,
        setShowHideContext,
        SignUpUser,
        LoginUser,
        LogoutUser,
        loading,
        setLoading,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export function useThem() {
  return useContext(Context);
}
