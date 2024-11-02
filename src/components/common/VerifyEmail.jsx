import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useThem } from "../../Context/Context";
import { toast, ToastContainer } from "react-toastify";

function VerifyEmail() {
  const { VerifyEmail, useremail } = useThem();
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
   const isLoggedIn =
     localStorage.getItem("token") && localStorage.getItem("userlogin");
  const navigate = useNavigate();
  const onhandelverfy = () => {
    VerifyEmail(token)
      .then((result) => {
        if (result.success) {
          toast.success(result.message, {
            onClose: () => {
              navigate("/");
              localStorage.setItem("token", token);
              localStorage.setItem("userlogin", true);
            },
            autoClose: 1500,
          });
        } else {
          toast.error(result.message || "Login failed");
        }
      })
      .catch((error) => {
        console.error("Verify error:", error);
        toast.error("An error occurred during Verify.");
      });
  };

  return (
    <div>
      {isLoggedIn ? (
        <div className="w-full bg-white h-screen relative flex  items-center justify-center px-3">
          {/* Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-800 mb-2">
              Email Verification
            </h2>

            {/* Success Message */}
            <p className="text-green-600 font-bold text-lg mt-4 mb-2 ">
              🎉 Your email has been verified successfully!
            </p>

            {/* Email Prompt */}
            <p className="text-gray-500 mb-6 mt-5 text-sm sm:text-base">
              Thank you for verifying your email address,{" "}
              <span className="font-semibold">
                {useremail ? useremail : "johnsmith@example.com"}
              </span>
              !
            </p>

            <hr className="my-4 border-gray-300" />

            {/* Verification Message */}
            <p className="text-gray-600 mt-6 md:mt-12 mb-6 text-sm sm:text-base">
              You can now access your account and enjoy all the features we
              offer. Explore our services and get started!
            </p>

            {/* Continue Button */}
            <div className="text-end mt-10">
              <button
                onClick={() => navigate("/")} 
                className="bg-green-600 text-white py-3 px-6 rounded-lg shadow-md hover:bg-green-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
              >
                Continue to Home Page
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full bg-white h-screen relative flex flex-col items-center justify-center">
          <div className="bg-green-600 h-10 w-full absolute top-0"></div>

          {/* Content */}
          <div className="p-4 text-center w-full  md:w-[80%] ">
            <h2 className="text-3xl sm:text-4xl lgtext-6xl font-semibold text-gray-800 mb-2 text-start">
              Email Verification
            </h2>

            {/* Email Prompt */}
            <p className="text-gray-500 mb-6 text-start mt-5 text-sm sm:text-base ">
              Email Verification for{" "}
              {useremail ? useremail : "johnsmith@example.com"}
            </p>

            <hr className="my-4" />

            {/* Verification Message */}
            <p className="text-gray-600 mt-6 md:mt-12 text-start mb-6 text-sm sm:text-base">
              Please verify the email address for{" "}
              {useremail ? useremail : "johnsmith@example.com"}
            </p>

            {/* Verify Button */}
            <div className=" text-end">
              <button
                onClick={onhandelverfy}
                className="bg-green-600 text-white py-2 px-4 rounded"
              >
                Verify
              </button>
            </div>
          </div>
        </div>
      )}
      <ToastContainer />
    </div>
  );
}

export default VerifyEmail;
