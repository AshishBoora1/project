// import { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// function OAuthCallback() {
//     const navigate = useNavigate();
//     useEffect(() => {
//         async function fetchUserData() {
//             const callbackUrl = "https://gerapps-440892549125.us-central1.run.app/api/auth/google_oauth_callback";
//             try {
//                 const response = await fetch(callbackUrl, {
//                     method: "GET",
//                     headers: {
//                         "Content-Type": "application/json",
//                     },

//                 });

//                 if (!response.ok) {
//                     throw new Error(`Error: ${response.status} - ${response.statusText}`);
//                 }
//                 const userData = await response.json();
//                 console.log("User Data:", userData);
//                 localStorage.setItem("token", JSON.stringify(userData));
//                 navigate("/");
//             } catch (error) {
//                 console.error("Callback error:", error);
//             }
//         }

//         fetchUserData();
//     }, [navigate]);

//     return <div>Loading...</div>;
// }

// export default OAuthCallback;
// OAuthCallback.jsx
// OAuthCallback.jsx
// OAuthCallback.jsx
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

function OAuthCallback() {
    const navigate = useNavigate();

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get("code");

        if (code) {
            // Send code to backend to obtain token
            axios
                .post("https://gerapps-440892549125.us-central1.run.app/api/auth/google_oauth_token_exchange", {
                    code: code,
                })
                .then((response) => {
                    const { user_token } = response.data;

                    if (user_token) {
                        localStorage.setItem("user_token", user_token);
                        window.history.replaceState({}, document.title, "/"); // Clean up the URL
                        toast.success("Login successful!");
                        navigate("/");
                    } else {
                        throw new Error("Token not found in response");
                    }
                })
                .catch((error) => {
                    console.error("Error during token exchange:", error);
                    toast.error("Authentication failed.");
                    navigate("/signin");
                });
        } else {
            toast.error("Authorization code not found.");
            navigate("/signin");
        }
    }, [navigate]);

    return <div>Loading...</div>;
}

export default OAuthCallback;
