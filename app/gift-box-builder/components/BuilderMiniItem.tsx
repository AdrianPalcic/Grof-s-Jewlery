import Link from "next/link";
import React from "react";

const BuilderMiniItem = () => {
  return (
    <div className="flex gap-4">
      <Link href="/" className="w-[50px] h-[50px]">
        <img
          src="/kat1.png"
          alt="adasd"
          className="w-full h-full object-cover"
        />
      </Link>
      <p className="text-sm">Naziv artikla</p>
    </div>
  );
};

export default BuilderMiniItem;
