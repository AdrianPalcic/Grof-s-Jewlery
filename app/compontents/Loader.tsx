// Loader.tsx
import React from "react";

const Loader = () => {
  return (
    <div className="flex h-[60vh] w-full justify-center items-center gap-2 mt-10">
      <span className="w-4 h-4 bg-secondaryColor rounded-full animate-bounce-delay1"></span>
      <span className="w-4 h-4 bg-secondaryColor rounded-full animate-bounce-delay2"></span>
      <span className="w-4 h-4 bg-secondaryColor rounded-full animate-bounce-delay3"></span>
    </div>
  );
};

export default Loader;
