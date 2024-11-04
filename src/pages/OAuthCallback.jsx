import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

function OAuthCallback() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  useEffect(() => {
    const token = searchParams.get("token");
    if (token) {
      localStorage.setItem("token", token);
      localStorage.setItem("userlogin", true);
      navigate("/");
    }
  }, []);

  return <div className=" flex justify-center items-center h-screen text-3xl">Loading...</div>;
}

export default OAuthCallback;
