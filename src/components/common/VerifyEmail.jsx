import React, { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useThem } from "../../Context/Context";
import Loader from "./Loader";

function VerifyEmail() {
  const { VerifyEmail, useremail, loading } = useThem();
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const navigate = useNavigate();
  useEffect(() => {
    VerifyEmail(token)
      .then((result) => {
        if (result.success) {
          navigate("/subscriptions");
          localStorage.setItem("token", token);
          localStorage.setItem("userlogin", true);
        } else {
         throw new Error(result.message || "Login failed");
        }
      })
      .catch((error) => {
        console.error("Verify error:", error);
      });
  }, []);

  return <div>{loading && <Loader />}</div>;
}

export default VerifyEmail;
