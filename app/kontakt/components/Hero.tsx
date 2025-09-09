import React from "react";

const Hero = () => {
  return (
    <section className="mx-auto  mt-20 mb-5">
      <div className="flex flex-col w-full">
        <div className="flex flex-col md:flex-row w-full justify-between items-center mb-6 ">
          <h1 className="sm:text-5xl text-4xl text-center md:text-left">
            Započnimo <span className="acc">razgovor</span>
          </h1>
          <p className="text-center md:text-left">
            Vaša ideja zaslužuje jedinstven komad. Razgovarajmo kako ćemo je
            ostvariti.
          </p>
        </div>
        <div className="w-full flex items-center justify-center min-h-[300px] h-[300px] sm:h-[500px]">
          <img
            src="/kontakt.png"
            alt="Ručno rađeni papirnati nakit"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
