"use client";

import React, { useState } from "react";

const reviews = [
  {
    text: "Kupila sam ogrlicu iz ljetne kolekcije Grof&apos;ss Jewelry i ostala bez riječi. Kvaliteta izrade i pažnja posvećena detaljima su nevjerojatni. Osjećam se posebno svaki put kad je nosim.",
    author: "Franka Nevistić",
  },
  {
    text: "Narukvica koju sam dobila je još ljepša uživo! Pakiranje, brzina dostave i usluga su na vrhunskoj razini.",
    author: "Ana Horvat",
  },
  {
    text: "Prsten iz kolekcije je jednostavno savršen. Minimalistički, a opet poseban. Nosim ga svaki dan.",
    author: "Maja Kovač",
  },
  {
    text: "Poklonila sam lančić prijateljici i bila je oduševljena! Definitivno ću ponovno naručivati.",
    author: "Ivana Babić",
  },
];

const Reviews = () => {
  const [current, setCurrent] = useState<number>(0);

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrent((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="section text-center">
      <div className="max-w-2xl mx-auto">
        {/* Recenzija */}
        <div
          key={current}
          className="fade-in transition-opacity duration-500 select-none"
        >
          <h3 className="text-lg sm:text-xl italic mb-4 !normal-case">
            "{reviews[current].text}"
          </h3>
          <p className="font-semibold">{reviews[current].author}</p>
        </div>

        {/* Navigacija */}
        <div className="flex items-center justify-center gap-4 mt-6">
          <button
            onClick={handlePrev}
            className="px-3 py-1 border rounded-md cursor-pointer"
          >
            ←
          </button>

          <div className="flex gap-2">
            {reviews.map((_, idx) => (
              <div
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`dot border border-secondaryColor w-[15px] h-[15px] rounded-full cursor-pointer ${
                  current === idx ? "active" : ""
                }`}
              ></div>
            ))}
          </div>

          <button
            onClick={handleNext}
            className="px-3 py-1 border rounded-md cursor-pointer"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
