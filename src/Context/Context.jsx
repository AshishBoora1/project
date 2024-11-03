import { createContext, useContext, useRef, useState } from "react";
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

      if (response.status === 200) {
        setUserEmail(email);
        return { success: true };
      }

      if (response.status === 404) {
        return { success: false, message: "Account already exists" };
      }

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
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
      const data = await response.json();

      if (response.status === 200) {
        setUserEmail(email);
        localStorage.setItem("token", data.user_token);
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
    setLoading(true);
    try {
      let response = await fetch(
        `https://gerapps-440892549125.us-central1.run.app/api/auth/verify_email?token=${token}`
      );
      setLoading(false);
      if (response.status === 200) {
        localStorage.setItem("token", token);
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
      const token = localStorage.getItem("token");
      let response = await fetch(
        `https://gerapps-440892549125.us-central1.run.app/api/user/get_user_apps?user_token=${token}`
      );

      if (response.status === 200) {
        let data = await response.json();
        let storedata = [];
        for (const key in data) {
          storedata.push(data[key]);
        }
        setLoading(false);
        setGetSubscriptionsData(storedata);
      } else {
        setGetSubscriptionsData([]);
      }
    } catch (error) {
      console.error("subscriptions failed:", error);
      setLoading(false);
    }
  }

  async function UserName(newUserName) {
    // console.log(newUserName);

    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      let response = await fetch(
        `https://gerapps-440892549125.us-central1.run.app/api/user/change_user_name?new_user_name=${newUserName}&user_token=${token}`
      );

      setLoading(false);
      if (response.status === 200) {
        let data = await response.json();
        return { success: true, message: data[0] };
      } else {
        return { success: false, message: "UserName change failed" };
      }
    } catch (error) {
      console.error("UserName change failed:", error);
      setLoading(false);
    }
  }

  ///////////////        delete user

  async function DeleteUser() {
    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      let response = await fetch(
        `https://gerapps-440892549125.us-central1.run.app/api/user/delete_user?user_token=${token}`
      );

      setLoading(false);
      if (response.status === 200) {
        let data = await response.json();
        return {
          success: true,
          message: data.data,
        };
      } else {
        return { success: false, message: "User has not been deleted" };
      }
    } catch (error) {
      console.error("User has not been deleted", error);
      setLoading(false);
    }
  }

  ///////////       Login user Google ////////////

  // async function LoginGoogle() {
  //   setLoading(true);
  //   const loginUrl = "https://gerapps-440892549125.us-central1.run.app/api/auth/google_oauth_login?source_of_registration=main_site";
  //   window.location.href = loginUrl;
  //   setLoading(false);
  // }
  
  async function LoginGoogle() {
    setLoading(true);
    try {
      let response = await fetch(
        "https://gerapps-440892549125.us-central1.run.app/api/auth/google_oauth_login?source_of_registration=main_site"
      );

      setLoading(false);
      if (response.status === 200) {
        let data = await response.json();
        console.log(data);
      } else {
       console.log("LoginGoogle change failed:" ,error);
       
      }
    } catch (error) {
      console.error("LoginGoogle change failed:", error);
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
        DeleteUser,
        LoginGoogle,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export function useThem() {
  return useContext(Context);
}
