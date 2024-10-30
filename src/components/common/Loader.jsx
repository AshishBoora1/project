import React from "react";

function Loader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-[100]">
      <div className="w-16 h-16 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}

export default Loader;
