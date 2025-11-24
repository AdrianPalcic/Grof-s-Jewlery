import React from "react";
import Hero from "../../components/Hero";
import Link from "next/link";
import ButtonMain from "@/app/compontents/ButtonMain";
import { getProductsByTagPaginated } from "@/lib/shopify/getProductsPaginated";
import ProductList from "../../components/ProductList";

type PageProps = {
  params: Promise<{ podkategorija: string }>;
};

export async function generateMetadata({
  params,
}: {
  params: { podkategorija: string };
}) {
  const { podkategorija } = params;

  const subcatNames = [
    {
      text: "kutije-za-poklone",
      value: "Kutije za poklone",
    },
    {
      text: "vrecice-za-poklone",
      value: "Vrečice za poklone",
    },
  ];

  const formatName = (slug: string) => {
    const current = subcatNames.find((name) => name.text === slug);
    if (!current) return "Grof's Jewelry";
    return current.value;
  };

  const name = formatName(podkategorija);

  return {
    title: `Grof's Jewelry | ${name}`,
    description: `Otkrijte proizvode iz podkategorije ${name} u Grof's Jewelry webshopu – savršen izbor za vaše poklone.`,
    openGraph: {
      title: `Grof's Jewelry | ${name}`,
      description: `Otkrijte proizvode iz podkategorije ${name} u Grof's Jewelry webshopu – savršen izbor za vaše poklone.`,
      url: `https://grofsjewelry.com/kategorije/pakiranje-poklona/${podkategorija}`,
      siteName: "Grof's Jewelry",
      images: [
        {
          url: "/hero-home.png",
          width: 1200,
          height: 630,
        },
      ],
      locale: "hr_HR",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `Grof's Jewelry | ${name}`,
      description: `Otkrijte proizvode iz podkategorije ${name} u Grof's Jewelry webshopu – savršen izbor za vaše poklone.`,
      images: ["/hero-home.png"],
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { podkategorija } = await params;

  const subcatNames = [
    {
      text: "kutije-za-poklone",
      value: "Kutije za poklone",
    },
    {
      text: "vrecice-za-poklone",
      value: "Vrečice za poklone",
    },
  ];

  const formatName = (slug: string) => {
    const current = subcatNames.find((name) => name.text === slug);
    if (!current) return "Grof's Jewelry";
    return current.value;
  };

  const name = formatName(podkategorija);

  const { products: initialProducts } = await getProductsByTagPaginated(
    25,
    podkategorija
  );

  return (
    <main className="mt-10 mb-20 sm:px-10 px-4 mx-auto w-full">
      <Hero name={name} />
      <ProductList
        initialProducts={initialProducts}
        initialTag={podkategorija}
      />

      <div className="relative w-full overflow-hidden mt-10">
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
  );
}
