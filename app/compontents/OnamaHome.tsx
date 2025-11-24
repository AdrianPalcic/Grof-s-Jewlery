import Link from "next/link";
import React from "react";
import ButtonMain from "./ButtonMain";
import ButtonSecondary from "./ButtonSecondary";
import Image from "next/image";

const OnamaHome = () => {
  return (
    <section className="flex flex-col lg:flex-row-reverse px-2 sm:px-10 items-center  gap-10 mx-auto mb-20 text-white bg-secondaryColor py-10">
      <div className="flex-1">
        <h2 className="text-center sm:text-left text-3xl mb-4 border-b-2 border-solid border-secondaryColor">
          Priča utkana u svaki detalj
        </h2>
        <p className="text-xl text-white mb-4">
          {" "}
          Dobrodošli u naš Grof&apos;s čarobni svijet unikatnog nakita, posebnih
          poklona i poklon pakiranja...
          <br /> Ja sam Iva... Kreiram i ručno izrađujem sa strašću svaki komad
          nakita, poklon, poklon kutiju ili zahvalnicu koji ćete pronaći kod
          nas, kako bi mogli poklanjati neponovljive i posebne poklone koji nose
          male priče i podsjetnike...
          <br /> Vi nastavljate Grof&apos;s priče i prenosite ih dalje...
          <br /> Grof&apos;s priča je priča o prijateljstvu, o zahvalnosti,
          ljubavi i povezanosti u koju radosno uključujemo svakog od Vas..
          <br />. Poklanjajmo od srca, ostavljajmo vlastite tragove svakim
          poklonom koji darujemo i Spread love and light,
          <br /> Love,
          <br /> Grof&apos;s Jewelry
        </p>
        <Link href={"/onama"} className="flex justify-center sm:justify-normal">
          <ButtonSecondary text="Naša Priča" />
        </Link>
      </div>
      <div className="flex-1 w-full">
        <Image
          src="/puna.jpeg"
          alt="Vlasnici Grof's jewlery"
          className="w-full h-full object-cover max-h-[700px]"
        />
      </div>
    </section>
  );
};

export default OnamaHome;
