"use client";

import React, { useState, useEffect } from "react";
import ButtonMain from "./ButtonMain";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const Hero = () => {
  const [firstRender, setFirstRender] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    setFirstRender(false);
  }, []);

  const categories = [
    { text: "Nakit od Papira", slug: "nakit-od-papira", img: "/novanaus.jpg" },
    {
      text: "Dodaci Poklonima",
      slug: "dodaci-poklonima",
      img: "/dodaci.jpg",
    },
    { text: "Gift Boxes", slug: "gift-boxes", img: "gift.jpg" },
    {
      text: "Grof's corporate collection",
      slug: "grofs-corporate-collection",
      img: "/business.jpg",
    },
    {
      text: "Pakiranje Poklona",
      slug: "pakiranje-poklona",
      img: "/pakiranje.jpg",
    },
    {
      text: "Unikatni pokloni",
      slug: "unikatni-pokloni",
      img: "/unikatni.jpg",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % categories.length);
    }, 15000);
    return () => clearInterval(interval);
  }, [categories.length]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
    }),
  };

  const swipeConfidenceThreshold = 100;
  const handleSwipe = (offsetX: number) => {
    if (offsetX < -swipeConfidenceThreshold) {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % categories.length);
    } else if (offsetX > swipeConfidenceThreshold) {
      setDirection(-1);
      setCurrentIndex(
        (prev) => (prev - 1 + categories.length) % categories.length
      );
    }
  };

  return (
    <div className="mx-auto w-full sm:w-[95%] hero-section h-[80dvh] relative mb-32 overflow-hidden">
      <AnimatePresence custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={variants}
          initial={firstRender ? false : "enter"}
          animate="center"
          exit="exit"
          transition={{ duration: 1 }}
          className="absolute inset-0"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={(e, info) => handleSwipe(info.offset.x)}
        >
          <img
            src={categories[currentIndex].img}
            alt={categories[currentIndex].text}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </motion.div>
      </AnimatePresence>

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
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
        {categories.map((_, idx) => (
          <button
            key={idx}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              idx === currentIndex ? "bg-white" : "bg-white/50"
            }`}
            onClick={() => {
              setDirection(idx > currentIndex ? 1 : -1);
              setCurrentIndex(idx);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
