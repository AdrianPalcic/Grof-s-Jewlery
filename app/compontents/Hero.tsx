"use client";

import React, { useState, useEffect } from "react";
import ButtonMain from "./ButtonMain";
import Link from "next/link";

const Hero = () => {
  const categories = [
    { text: "Nakit od Papira", slug: "nakit-od-papira", img: "/1.png" },
    {
      text: "Dodaci Poklonima",
      slug: "dodaci-poklonima",
      img: "/hero-home.png",
    },
    { text: "Gift Boxes", slug: "gift-boxes", img: "/2.png" },
    { text: "Package Design", slug: "package-design", img: "/3.png" },
    { text: "Pakiranje Poklona", slug: "pakiranje-poklona", img: "/4.png" },
    { text: "Pokloni", slug: "pokloni", img: "/5.png" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % categories.length);
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mx-auto w-full sm:w-[95%] hero-section h-[80dvh] relative mb-32 overflow-hidden">
      {categories.map((cat, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            idx === currentIndex ? "opacity-100 z-0" : "opacity-0 z-[-1]"
          }`}
        >
          <img
            src={cat.img}
            alt={cat.text}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
      ))}

      <div className="content z-10 w-full h-full flex flex-col justify-center items-center sm:items-start sm:justify-end px-10 sm:pb-32 text-center sm:text-left">
        <h1 className="text-3xl md:text-5xl mb-2 text-white z-10">
          {categories[currentIndex].text}
        </h1>
        <h2 className="text-[16px] sm:text-lg text-white mb-4 z-10">
          Unique and handcrafted gifts, gift boxes and original packaging
          solutions
        </h2>
        <Link
          href={`/kategorije/${categories[currentIndex].slug}`}
          className="z-10"
        >
          <ButtonMain text="Započnite kupovinu" />
        </Link>
      </div>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
        {categories.map((_, idx) => (
          <button
            key={idx}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              idx === currentIndex ? "bg-white" : "bg-white/50"
            }`}
            onClick={() => setCurrentIndex(idx)}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
