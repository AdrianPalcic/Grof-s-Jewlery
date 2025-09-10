import ButtonMain from "@/app/compontents/ButtonMain";
import Link from "next/link";
import React from "react";

const CartEmpty = () => {
  return (
    <div className="w-full h-[60vh] flex flex-col items-center justify-center">
      <h1 className="text-center text-4xl sm:text-5xl">
        {" "}
        Vaša košarica je prazna{" "}
      </h1>
      <p className="text-center mb-2">
        Dodajte proizvode i vratite se ovdje kako biste dovršili kupovinu.
      </p>
      <Link href="/">
        <ButtonMain text="Pregledajte Proizvode" />
      </Link>
    </div>
  );
};

export default CartEmpty;
