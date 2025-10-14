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
          Dobrodošli u naš Grof's čarobni svijet unikatnih poklona i poklon
          pakiranja u kojem počinjemo divne priče o poklanjanju...Vi nastavljate
          Grof's priče i prenosite ih dalje... Svaki poklon, komad nakita,
          poklon kutiju ili zahvalnicu kreiramo i ručno izrađujemo iz strasti,
          vođeni zahvalnošću za svaki novi dan koji je pred nama... Grof's priča
          je priča o prijateljstvu, o zahvalnosti, ljubavi i povezanosti u koju
          radosno uključujemo svakog od Vas
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
