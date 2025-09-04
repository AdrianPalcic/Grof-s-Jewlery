import Link from "next/link";
import React from "react";
import ButtonMain from "./ButtonMain";

const KolekcijaHome = () => {
  return (
    <section className="flex flex-col lg:flex-row px-2 sm:px-10 items-center  gap-10 mx-auto mb-20">
      <div className="flex-1">
        <h2 className="text-center sm:text-left text-3xl mb-4 border-b-2 border-solid border-secondaryColor">
          Jesenska Kolekcija
        </h2>
        <p className="text-xl text-black mb-4">
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
        <Link
          href={"/kolekcija/slug"}
          className="flex justify-center sm:justify-normal"
        >
          <ButtonMain text="Pregledajte Proizvode" />
        </Link>
      </div>
      <div className="flex-1 w-full">
        <img
          src="/collection.png"
          alt="Najbolje kolekcije papirnatih nakita"
          className="w-full h-full object-cover max-h-[700px]"
        />
      </div>
    </section>
  );
};

export default KolekcijaHome;
