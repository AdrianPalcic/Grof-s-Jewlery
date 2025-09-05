"use client";
import React, { useState } from "react";

const reviews = [
  {
    text: "Kupila sam ogrlicu iz ljetne kolekcije Grof’s Jewelry i ostala bez riječi. Kvaliteta izrade i pažnja posvećena detaljima su nevjerojatni. Osjećam se posebno svaki put kad je nosim.",
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
  const [current, setCurrent] = useState(0);
  const [startX, setStartX] = useState(null);

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrent((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const handleTouchStart = (e: any) => {
    setStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: any) => {
    if (startX === null) return;
    const endX = e.changedTouches[0].clientX;
    if (startX - endX > 50) {
      handleNext(); // swipe left
    } else if (endX - startX > 50) {
      handlePrev(); // swipe right
    }
    setStartX(null);
  };

  const handleMouseDown = (e: any) => {
    setStartX(e.clientX);
  };

  const handleMouseUp = (e: any) => {
    if (startX === null) return;
    const endX = e.clientX;
    if (startX - endX > 50) {
      handleNext();
    } else if (endX - startX > 50) {
      handlePrev();
    }
    setStartX(null);
  };

  return (
    <section className="section text-center">
      <div className="max-w-2xl mx-auto">
        {/* Recenzija */}
        <div
          key={current}
          className="fade-in transition-opacity duration-500 select-none"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
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
