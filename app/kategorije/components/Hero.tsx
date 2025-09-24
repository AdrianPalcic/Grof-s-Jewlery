import React from "react";

const Hero = ({ name }: { name: string }) => {
  return (
    <section className="mb-20 w-full ">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl sm:text-5xl" id="subcat-text">
          {name}
        </h1>
        <h2 className="mt-2">Suptilni dodaci koji govore bez riječi.</h2>
      </div>
    </section>
  );
};

export default Hero;
