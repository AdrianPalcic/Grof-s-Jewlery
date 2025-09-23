import React from "react";

const Hero = () => {
  return (
    <section className="relative h-[60vh] w-full mb-20">
      {/* Slika */}
      <img
        src={"/kat1.png"}
        alt="Pregledajte našu jesensku kolekciju"
        className="w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center text-white px-4">
        <h1 className="text-4xl sm:text-5xl font-bold mb-2">{"Kolekcija"}</h1>
        <h2 className="text-xl sm:text-2xl">Umjetnost koju nosite sa sobom.</h2>
      </div>
    </section>
  );
};

export default Hero;
