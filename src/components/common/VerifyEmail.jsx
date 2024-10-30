import React from "react";

function VerifyEmail() {
  return (
    <div>
      <div className="w-full bg-white h-screen relative flex flex-col items-center justify-center">
        <div className="bg-green-600 h-10 w-full absolute top-0"></div>

        {/* Content */}
        <div className="p-4 text-center w-full  md:w-[80%] ">
          <h2 className="text-3xl sm:text-4xl lgtext-6xl font-semibold text-gray-800 mb-2 text-start">
            Email Verification
          </h2>

          {/* Email Prompt */}
          <p className="text-gray-500 mb-6 text-start mt-5 text-sm sm:text-base ">
            Email Verification for johnsmith@example.com
          </p>

          <hr className="my-4" />

          {/* Verification Message */}
          <p className="text-gray-600 mt-6 md:mt-12 text-start mb-6 text-sm sm:text-base">
            Please verify the email address for johnsmith@example.com
          </p>

          {/* Verify Button */}
          <div className=" text-end">
            <button className="bg-green-600 text-white py-2 px-4 rounded">
              Verify
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VerifyEmail;
