import { createContext, useContext, useRef, useState } from "react";
import Cookies from "js-cookie";
export const Context = createContext({
  showsignpop: true,
});

export const ContextProvider = ({ children }) => {
  const sectionRefs = useRef([]);
  const [loading, setLoading] = useState(false);
  const [useremail, setUserEmail] = useState("");
  const [showsignpop, setShowSignPop] = useState(false);
  const [showhidecontext, setShowHideContext] = useState(null);
  const [getsubscriptionsdata, setGetSubscriptionsData] = useState([]);
  const [getusername, setGetUserName] = useState("");
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
      let response = await fetch("https://gerapps-440892549125.us-central1.run.app/api/auth/email_login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
        credentials: "include" // Ensure cookies are received and stored
      });
      setLoading(false);

      if (response.status === 200) {
        const data = await response.json();
        return { success: true, message: "Account Successfully logged in" };
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

  //////////////        verify email  /////////////

  async function VerifyEmail(token) {
    console.log("...............................", token);

    setLoading(true);
    try {
      // localStorage.setItem("token", token);
      let response = await fetch(
        `https://gerapps-440892549125.us-central1.run.app/api/auth/verify_email?token=${token}`
      );
      setLoading(false);
      if (response.status === 200) {
        return { success: true, message: "Login successfully" };
      }

      if (response.status === 404) {
        return { success: false, message: "VerifyEmail Failed" };
      }
    } catch (error) {
      console.error("VerifyEmail failed:", error);
      setLoading(false);
    }
  }
  ////////////            Subscriptions            //////////////
  async function subscriptions() {
    setLoading(true);
    try {
      let response = await fetch("https://gerapps-440892549125.us-central1.run.app/api/user/get_user_apps", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include" // Ensure cookies are sent with the request
      });

      setLoading(false);

      if (response.status === 200) {
        let data = await response.json();
        setGetSubscriptionsData(data);
      } else {
        setGetSubscriptionsData([]);
      }
    } catch (error) {
      console.error("subscriptions failed:", error);
      setLoading(false);
    }
  }
  // Change Username API call
  async function UserName(newUserName) {
    setLoading(true);
    try {
      const userToken = Cookies.get("user_token"); // Get user_token from cookies

      let response = await fetch(`https://gerapps-440892549125.us-central1.run.app/api/user/change_user_name?new_user_name=${newUserName}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          // "Authorization": `Bearer ${userToken}`, // Use token from cookies
        },
        credentials: "include" // Include cookies in the request
      });

      setLoading(false);

      if (response.status === 200) {
        let data = await response.json();
        setGetUserName(data);
      } else {
        setGetUserName("");
      }
    } catch (error) {
      console.error("UserName change failed:", error);
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
        VerifyEmail,
        setUserEmail,
        useremail,
        getsubscriptionsdata,
        UserName,
        subscriptions,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export function useThem() {
  return useContext(Context);
}
