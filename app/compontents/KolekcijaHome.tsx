import Link from "next/link";
import React from "react";
import ButtonMain from "./ButtonMain";
import { Collection } from "@/types/types";

const KolekcijaHome = ({ collection }: { collection: Partial<Collection> }) => {
  return (
    <section className="flex flex-col lg:flex-row px-2 sm:px-10 items-center  gap-10 mx-auto mb-20">
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
        <img
          src={collection.image?.url}
          alt={collection.image?.altText}
          className="w-full h-full object-cover max-h-[700px]"
        />
      </div>
    </section>
  );
};

export default KolekcijaHome;
