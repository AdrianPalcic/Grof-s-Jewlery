"use client";

import React, { useState } from "react";

const ItemImages = () => {
  const [activeImg, setActiveImg] = useState("/2.png");

  const images = ["/1.png", "/2.png", "/3.png", "/4.png", "/5.png"];

  return (
    <div className="flex-[0.4] w-full flex flex-col gap-3">
      <div className="w-full">
        <img
          id="main-img"
          src={activeImg}
          alt="Najbolje kolekcije papirnatih nakita"
          className="w-full max-w-[700px] h-full object-cover max-h-[700px] "
        />
      </div>

      <div className="flex gap-2 overflow-x-auto py-1 lg:justify-start lg:flex-wrap mb-3">
        {images.map((img) => (
          <img
            key={img}
            src={img}
            alt="Papirnata Naušnica"
            className={`flex-shrink-0 w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] object-cover  cursor-pointer transition-opacity duration-300 hover:opacity-70 ${
              activeImg === img ? "ring-2 ring-secondaryColor" : ""
            }`}
            onClick={() => setActiveImg(img)}
          />
        ))}
      </div>
    </div>
  );
};

export default ItemImages;
