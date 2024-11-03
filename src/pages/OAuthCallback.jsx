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
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function OAuthCallback() {
    const navigate = useNavigate();

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const token = urlParams.get("user_token");

        if (token) {
            localStorage.setItem("user_token", token);
            toast.success("Login successful!");
            navigate("/"); // Redirect to home
        } else {
            toast.error("Failed to retrieve user token.");
            navigate("/signin"); // Redirect to sign-in page if token is missing
        }
    }, [navigate]);

    return <div>Loading...</div>; // Optional loading message while redirecting
}

export default OAuthCallback;
