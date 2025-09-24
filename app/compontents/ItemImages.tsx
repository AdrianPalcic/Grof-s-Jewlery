"use client";

import { Image, ProductImageConnection } from "@/types/types";
import React, { useState } from "react";

const ItemImages = ({ images }: { images: Image[] }) => {
  const [activeImg, setActiveImg] = useState(images[0]);

  return (
    <div className="flex-[0.4] w-full flex flex-col gap-3 ">
      <div className="w-full">
        <img
          id="main-img"
          src={activeImg.url}
          alt="Najbolje kolekcije papirnatih nakita"
          className="w-full  h-full object-cover max-h-[700px] "
        />
      </div>

      <div className="flex gap-2 overflow-x-auto py-1 px-1 lg:justify-start lg:flex-wrap mb-3">
        {images.map((img) => (
          <img
            key={img.altText}
            src={img.url}
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
