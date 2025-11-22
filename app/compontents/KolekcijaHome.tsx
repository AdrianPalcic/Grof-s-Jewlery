import Link from "next/link";
import React from "react";
import ButtonMain from "./ButtonMain";
import { Collection } from "@/types/types";
import Image from "next/image";

const KolekcijaHome = ({
  collection,
  idx,
}: {
  collection: Partial<Collection>;
  idx: number;
}) => {
  if (!collection) return;

  return (
    <section
      className={`flex px-2 sm:px-10 items-center gap-10 mx-auto mb-20 flex-col 
    ${idx % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"}`}
    >
      <div className="flex-1">
        <h2 className="text-center sm:text-left text-3xl mb-4 border-b-2 border-solid border-secondaryColor">
          {collection.title}
        </h2>
        <p className="text-xl text-black mb-4">{collection.description}</p>
        <Link
          href={`/kolekcije/${collection.handle}`}
          className="flex justify-center sm:justify-normal w-fit"
        >
          <ButtonMain text="Pregledajte Proizvode" />
        </Link>
      </div>
      <div className="flex-1 w-full">
        <Image
          src={collection.image?.url || "/collection.png"}
          alt={collection.image?.altText || "Grof's jewelry kolekcija"}
          className="w-full h-full object-cover max-h-[700px]"
          width={350}
          height={350}
        />
      </div>
    </section>
  );
};

export default KolekcijaHome;
