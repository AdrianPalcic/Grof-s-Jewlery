import Link from "next/link";
import React from "react";
import ButtonMain from "./ButtonMain";
import GhostButton from "./GhostButton";
import { Products } from "../page";

const BuildGift = ({ products = [] }: { products?: Partial<Products>[] }) => {
  return (
    <section className="section  flex items-center justify-center">
      <div className="flex flex-col gap-3 w-full">
        <div className="relative w-full overflow-hidden">
          {/* Slika */}
          <img
            src="/one.png"
            alt="Poklon pozadina"
            className="w-full h-[50vh] object-cover min-h-[400px]"
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

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 ">
          <div className="flex flex-col items-center">
            <Link href={`/proizvodi/${products[0].slug}`}>
              <img
                src={products[0]?.images?.[0]?.src}
                alt={products[0]?.images?.[0]?.alt}
                className="w-full min-h-[250px] h-[300px] object-cover "
              />
            </Link>
            <div className="flex flex-col items-start justify-start w-full">
              <h2 className="mt-2 text-lg font-semibold ">
                {products[0].name}
              </h2>
              <GhostButton text="Izradi Poklon" />
            </div>
          </div>
          <div className="flex flex-col items-center w-full">
            <Link href={`/proizvodi/${products[1].slug}`} className="w-full">
              <img
                src={products[1]?.images?.[0]?.src}
                alt={products[1]?.images?.[0]?.alt}
                className="w-full h-[300px] object-cover min-h-[250px] "
              />
            </Link>
            <div className="flex flex-col items-start justify-start w-full">
              <h2 className="mt-2 text-lg font-semibold ">
                {products[1].name}
              </h2>
              <GhostButton text="Izradi Poklon" />
            </div>{" "}
          </div>
          <div className="flex flex-col items-center">
            <Link href={`/proizvodi/${products[2].slug}`}>
              <img
                src={products[2]?.images?.[0]?.src}
                alt={products[2]?.images?.[0]?.alt}
                className="w-full h-[300px] object-cover min-h-[250px] "
              />
            </Link>
            <div className="flex flex-col items-start justify-start w-full">
              <h2 className="mt-2 text-lg font-semibold ">
                {products[2].name}
              </h2>
              <GhostButton text="Izradi Poklon" />
            </div>{" "}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuildGift;
