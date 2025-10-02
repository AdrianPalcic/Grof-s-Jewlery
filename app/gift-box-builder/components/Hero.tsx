"use client";
import { PenBox } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const Hero = () => {
  const [name, setName] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      id="hero"
      className="flex flex-col sm:flex-row gap-4 justify-between items-center mb-4"
    >
      <div className="flex relative gap-2 items-center">
        <h1 className="text-3xl sm:text-4xl sm:mb-2 max-w-[500px] overflow-x-auto overflow-y-hidden hide-scrollbar">
          {name === "" ? "Vaš Poklon" : name}
        </h1>
        <button className="p-2 rounded-full" onClick={() => setIsOpen(!isOpen)}>
          <PenBox
            size={20}
            className="duration-300 transition-colors hover:text-secondaryColor"
          />
        </button>
        {isOpen && (
          <div className="bg-secondaryColor px-4 py-10 border-[1px] border-solid border-secondaryColor absolute top-10">
            <input
              type="text"
              name="gift"
              placeholder="Ime vašeg poklona"
              className="font-cormorant py-2 px-3 border-[1px] border-solid border-secondaryColor"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        )}
      </div>

      <Link href="/">
        <button className="ghost">Nastavite s kupnjom</button>
      </Link>
    </div>
  );
};

export default Hero;
