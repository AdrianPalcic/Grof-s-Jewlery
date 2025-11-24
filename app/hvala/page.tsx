import Link from "next/link";
import React from "react";
import ButtonMain from "../compontents/ButtonMain";

export const metadata = {
  title: "Grof's Jewelry | Hvala na poruci",
  description:
    "Hvala Vam na poruci! Javit ćemo Vam se u najkraćem roku. Nastavite pregledavati naš webshop.",
  openGraph: {
    title: "Grof's Jewelry | Hvala na poruci",
    description:
      "Hvala Vam na poruci! Javit ćemo Vam se u najkraćem roku. Nastavite pregledavati naš webshop.",
    url: "https://grofsjewelry.com/hvala",
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
    title: "Grof's Jewelry | Hvala na poruci",
    description:
      "Hvala Vam na poruci! Javit ćemo Vam se u najkraćem roku. Nastavite pregledavati naš webshop.",
    images: ["/hero-home.png"],
  },
};

const page = () => {
  return (
    <div className="w-full h-dvh flex flex-col items-center justify-center">
      <h1 className="text-center text-4xl sm:text-6xl">
        <span className="acc">Hvala Vam</span> na poruci!
      </h1>
      <p className="mb-4">
        Javiti čemo Vam se u najkračem roku. Do tada browsajte po našem webu.
      </p>
      <Link href="/">
        <ButtonMain text="Povratak na Naslovnu" />
      </Link>
    </div>
  );
};

export default page;
