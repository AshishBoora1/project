import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function OAuthCallback() {
    const navigate = useNavigate();
    // useEffect(() => {
    //     async function fetchUserData() {
    //         const callbackUrl = "https://gerapps-440892549125.us-central1.run.app/api/auth/google_oauth_callback";
    //         try {
    //             const response = await fetch(callbackUrl, {
    //                 method: "GET",
    //                 headers: {
    //                     "Content-Type": "application/json",
    //                 },

    //             });

    //             if (!response.ok) {
    //                 throw new Error(`Error: ${response.status} - ${response.statusText}`);
    //             }
    //             const userData = await response.json();
    //             console.log("User Data:", userData);
    //             localStorage.setItem("token", JSON.stringify(userData));
    //             navigate("/");
    //         } catch (error) {
    //             console.error("Callback error:", error);
    //         }
    //     }

    //     fetchUserData();
    // }, [navigate]);

    return <div>Loading...</div>;
}

export default OAuthCallback;