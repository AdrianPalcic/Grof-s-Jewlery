import React from "react";
import Hero from "../../components/Hero";
import Link from "next/link";
import ButtonMain from "@/app/compontents/ButtonMain";
import { getProductsByTagPaginated } from "@/lib/shopify/getProductsPaginated";
import ProductList from "../../components/ProductList";
import CTA from "../../components/CTA";

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
      text: "zimski-gift-boxevi",
      value: "Zimski Gift Boxevi",
    },
    {
      text: "jesenski-gift-boxevi",
      value: "Jesenski Gift Boxevi",
    },
    {
      text: "bozicni-gift-boxevi",
      value: "Božićni Gift Boxevi",
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
      url: `https://grofsjewelry.com/kategorije/gift-boxes/${podkategorija}`,
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
      text: "zimski-gift-boxevi",
      value: "Zimski Gift Boxevi",
    },
    {
      text: "jesenski-gift-boxevi",
      value: "Jesenski Gift Boxevi",
    },
    {
      text: "bozicni-gift-boxevi",
      value: "Božićni Gift Boxevi",
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

      <CTA />
    </main>
  );
}
