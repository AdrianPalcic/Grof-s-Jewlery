import React from "react";
import CTA from "../compontents/CTA";

const page = () => {
  return (
    <main className="px-4 sm:px-10 mx-auto mt-10 mb-20 ">
      <h1 className="text-3xl sm:text-5xl">O nama</h1>
      <div className="w-full flex items-center justify-center min-h-[300px] h-[300px] sm:h-[500px] mt-5">
        <img
          src="/kontakt.png"
          alt="Ručno rađeni papirnati nakit"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-full my-5">
        <p>
          {" "}
          Više od tri desetljeća, Grof’s Jewelry simbol je vrhunske izrade i
          bezvremenskog dizajna. Svaki komad pomno je ručno izrađen od strane
          naših majstora obrtnika, koristeći samo najfinije materijale. Naša
          predanost izvrsnosti nadilazi samu estetiku – obuhvaća i etičko
          podrijetlo te održivu praksu, osiguravajući da svaki komad ne samo da
          ukrašava, već i priča priču o vještini, tradiciji i poštovanju prema
          materijalu. <br /> <br /> Naša predanost izvrsnosti nadilazi samu
          estetiku – obuhvaća i etičko podrijetlo te održivu praksu,
          osiguravajući da svaki komad ne samo da ukrašava, već i priča priču o
          vještini, tradiciji i poštovanju prema materijalu. Više od tri
          desetljeća, Grof’s Jewelry simbol je vrhunske izrade i bezvremenskog
          dizajna. Svaki komad pomno je ručno izrađen od strane naših majstora
          obrtnika, koristeći samo najfinije materijale. Naša predanost
          izvrsnosti nadilazi samu estetiku – obuhvaća i etičko podrijetlo te
          održivu praksu, osiguravajući da svaki komad ne samo da ukrašava, već
          i priča priču o vještini, tradiciji i poštovanju prema materijalu.{" "}
          <br /> <br /> Naša predanost izvrsnosti nadilazi samu estetiku –
          obuhvaća i etičko podrijetlo te održivu praksu, osiguravajući da svaki
          komad ne samo da ukrašava, već i priča priču o vještini, tradiciji i
          poštovanju prema materijalu. Više od tri desetljeća, Grof’s Jewelry
          simbol je vrhunske izrade i bezvremenskog dizajna. Svaki komad pomno
          je ručno izrađen od strane naših majstora obrtnika, koristeći samo
          najfinije materijale. Naša predanost izvrsnosti nadilazi samu estetiku
          – obuhvaća i etičko podrijetlo te održivu praksu, osiguravajući da
          svaki komad ne samo da ukrašava, već i priča priču o vještini,
          tradiciji i poštovanju prema materijalu. <br /> <br /> Naša predanost
          izvrsnosti nadilazi samu estetiku – obuhvaća i etičko podrijetlo te
          održivu praksu, osiguravajući da svaki komad ne samo da ukrašava, već
          i priča priču o vještini, tradiciji i poštovanju prema materijalu.
        </p>
      </div>
      <CTA text="kontaktirajte nas!" link="kontakt" />
    </main>
  );
};

export default page;
