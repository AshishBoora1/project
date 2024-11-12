import { createContext, useContext, useRef, useState } from "react";
const api = import.meta.env.VITE_API_URL;
export const Context = createContext({
  showsignpop: true,
  loading: false,
  useremail: "",
  showpop: false,
  showhidecontext: null,
  getsubscriptionsdata: [],
  scrollToNextSection: () => {},
  SignUpUser: () => {},
  LogoutUser: () => {},
  VerifyEmail: () => {},
  DeleteUser: () => {},
  UserName: () => {},
  LoginGoogle: () => {},
  UserProfile: () => {},
});

export const ContextProvider = ({ children }) => {
  const sectionRefs = useRef([]);
  const [loading, setLoading] = useState(false);
  const [useremail, setUserEmail] = useState("");
  const [showsignpop, setShowSignPop] = useState(false);
  const [showpop, setShowPop] = useState(false);
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
        `${api}/email_sign_up`,
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
        `${api}/email_login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );
      const data = await response.json();

      if (response.ok) {
        setUserEmail(email);
        localStorage.setItem("token", data.user_token);
        return { success: true, message: "Account Successfully logged in" };
      }

      // Handle specific status codes
      if (response.status === 404) {
        return {
          success: false,
          message: "Please check your email or password.",
        };
      }

      // Generic error for other non-200 status codes
      return { success: false, message: `Login failed` };
    } catch (error) {
      console.error("Login failed:", error);
      return {
        success: false,
        message: "An error occurred. Please try again later.",
      };
    } finally {
      setLoading(false); // Ensure loading state is reset
    }
  }

  ///////////////       logoutUser   ////////////

  async function LogoutUser() {
    setLoading(true);
    try {
      let response = await fetch(
       `${api}/logout`,
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
        `${api}/verify_email?token=${token}`
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
        `${api}/user/get_user_apps`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ user_token: token }),
        }
      );

      if (response.status === 200) {
        const data = await response.json();
        let storedata = [];
        for (const key in data) {
          storedata.push(data[key]);
        }
        setGetSubscriptionsData(storedata);
        setLoading(false);
      } else {
        setGetSubscriptionsData([]);
        setLoading(false);
      }
    } catch (error) {
      console.error("subscriptions failed:", error);
      setLoading(false);
    }
  }

  /////  user name change ////

  async function UserName(newUserName) {
    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      let response = await fetch(
        `${api}/user/change_user_name`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            new_user_name: newUserName,
            user_token: token,
          }),
        }
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
        `${api}/user/delete_user?user_token=${token}`
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

  ///////////       Login user Google   ////////////

  async function LoginGoogle() {
    setLoading(true);
    const loginUrl =
      `${api}/google_oauth_login?source_of_registration=main_site`;
    window.location.href = loginUrl;
    setLoading(false);
  }

  //////////////     user profile  ///////////////

  async function UserProfile() {
    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      let response = await fetch(
        `${api}/user/get_profile_data`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ user_token: token }),
        }
      );

      if (response.status === 200) {
        const data = await response.json();
        setLoading(false);
        return data
      } else {
        setLoading(false);
      }
    } catch (error) {
      console.error("UserProfile failed:", error);
      setLoading(false);
    }
  }

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
        setShowPop,
        showpop,
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
        UserProfile,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export function useThem() {
  return useContext(Context);
}
