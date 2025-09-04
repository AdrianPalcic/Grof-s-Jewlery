import Link from "next/link";
import React from "react";
import ButtonMain from "./ButtonMain";
import ButtonSecondary from "./ButtonSecondary";

const OnamaHome = () => {
  return (
    <section className="flex flex-col lg:flex-row-reverse px-2 sm:px-10 items-center  gap-10 mx-auto mb-20 text-white bg-secondaryColor py-10">
      <div className="flex-1">
        <h2 className="text-center sm:text-left text-3xl mb-4 border-b-2 border-solid border-secondaryColor">
          Priča utkana u svaki detalj
        </h2>
        <p className="text-xl text-white mb-4">
          Više od tri desetljeća, Grof’s Jewelry simbol je vrhunske izrade i
          bezvremenskog dizajna. Svaki komad pomno je ručno izrađen od strane
          naših majstora obrtnika, koristeći samo najfinije materijale. Naša
          predanost izvrsnosti nadilazi samu estetiku – obuhvaća i etičko
          podrijetlo te održivu praksu, osiguravajući da svaki komad ne samo da
          ukrašava, već i priča priču o vještini, tradiciji i poštovanju prema
          materijalu. <br /> <br /> Naša predanost izvrsnosti nadilazi samu
          estetiku – obuhvaća i etičko podrijetlo te održivu praksu,
          osiguravajući da svaki komad ne samo da ukrašava, već i priča priču o
          vještini, tradiciji i poštovanju prema materijalu.
        </p>
        <Link href={"/onama"} className="flex justify-center sm:justify-normal">
          <ButtonSecondary text="Naša Priča" />
        </Link>
      </div>
      <div className="flex-1 w-full">
        <img
          src="/onamaph.png"
          alt="Najbolje kolekcije papirnatih nakita"
          className="w-full h-full object-cover max-h-[700px]"
        />
      </div>
    </section>
  );
};

export default OnamaHome;
