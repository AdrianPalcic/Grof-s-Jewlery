import React from "react";
import Hero from "../../components/Hero";
import Link from "next/link";
import ButtonMain from "@/app/compontents/ButtonMain";
import { getProductsByTag } from "@/lib/shopify/productsByTag";
import ItemGrid from "@/app/compontents/ItemGrid";

type PageProps = {
  params: Promise<{ podkategorija: string }>;
};

export default async function Page({ params }: PageProps) {
  const { podkategorija } = await params;

  function formatName(slug: string) {
    return slug
      .split("-")
      .map((w) => w[0].toUpperCase() + w.slice(1))
      .join(" ");
  }

  const products = await getProductsByTag(20, podkategorija);
  console.log(products);

  return (
    <div>
      <main className="mt-10 mb-20 sm:px-10 px-4 mx-auto w-full">
        <Hero name={formatName(podkategorija)} />
        <ItemGrid products={products} />
        <div className="relative w-full overflow-hidden">
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
      </main>
    </div>
  );
}
