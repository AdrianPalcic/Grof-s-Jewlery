import ButtonMain from "@/app/compontents/ButtonMain";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CTA = () => {
  return (
    <div className="relative w-full overflow-hidden mt-10">
      <Image
        src="/one.png"
        alt="Poklon pozadina"
        className="w-full h-[50vh] object-cover min-h-[400px]"
        width={500}
        height={500}
      />
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-2xl sm:text-4xl font-bold text-white">
          Kreiraj poklon koji govori više od riječi
        </h1>
        <p className="text-center mb-5 text-white">
          Odaberi nakit, dodaj osobnu poruku i upakiraj ga na svoj način –
          poklon koji je poseban baš kao i osoba kojoj ga daruješ.
        </p>
        <Link href="/gift-box-builder">
          <ButtonMain text="Izradite Poklon" />
        </Link>
      </div>
    </div>
  );
};

export default CTA;
