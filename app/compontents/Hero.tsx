import React from "react";
import ButtonMain from "./ButtonMain";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="hero-section h-[80dvh] relative mb-32">
      <div className="img-overlay w-full h-full  absolute top-0 left-0 z-[-10]">
        <img
          src="/hero-home.png"
          alt="Handmade paper jewlery"
          className="w-full h-full object-cover z-[-10]"
        />
      </div>
      <div className="content z-10 w-full h-full flex flex-col justify-center items-center">
        <h1 className="text-3xl sm:text-5xl md:text-6xl mb-2 text-white text-center">
          ISPISUJEMO PRIČE <span className="acc">POKLONIMA</span>
        </h1>
        <h2 className="text-[16px] sm:text-lg md:text-xl text-white mb-4 text-center">
          {" "}
          UNIQUE AND HANDCRAFTED GIFTS, GIFT BOXES AND ORIGINAL PACKAGING
          SOLUTIONS
        </h2>
        <Link href="/">
          <ButtonMain text="Započnite kupovinu" />
        </Link>
      </div>
    </div>
  );
};

export default Hero;
