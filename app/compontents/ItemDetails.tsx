import React from "react";
import ItemImages from "./ItemImages";
import Link from "next/link";
import ButtonMain from "./ButtonMain";

type Props = {
  artiklSlug: string;
};

const ItemDetails = ({ artiklSlug }: Props) => {
  return (
    <div className="flex flex-col-reverse lg:flex-row-reverse px-2 sm:px-10 items-center  gap-2 lg:gap-10 mx-auto mb-20  py-10">
      <div className="flex-[0.6]">
        <h2 className=" text-3xl  ">
          Priča utkana u svaki detalj {artiklSlug}
        </h2>
        <p>45.20€</p>
        <div className="w-full h-[1px] bg-secondaryColor mt-2 "></div>

        <p className="text-xl smm:w-[90%] mt-2 mb-4">
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
        <div className="flex w-full items-center justify-between gap-3 mb-5">
          <button className="btn w-full">Dodaj u košaricu</button>
          <button className="ghost w-full">Dodaj u Gift Box</button>
        </div>
        <div className="w-full h-[1px] bg-secondaryColor my-2"></div>
        <h3 className="text-2xl">Za posebne prigode</h3>
        <p className="mb-4">
          Ovaj dizajn možemo izraditi u većem broju primjeraka isključivo za
          vas.
        </p>
        <Link href="/kontakt">
          <ButtonMain text="Kontaktiraj nas za posebnu ponudu" />
        </Link>
      </div>
      <ItemImages />
    </div>
  );
};

export default ItemDetails;
