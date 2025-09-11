import React from "react";
import Hero from "./Hero";
import AboutCollection from "./AboutCollection";
import GhostButton from "@/app/compontents/GhostButton";
import Link from "next/link";
import ItemGrid from "./ItemGrid";
import CTA from "@/app/compontents/CTA";

const CollectionDetails = ({ collection }: { collection: string }) => {
  const items = [
    { id: 1, img: "/kat1.png", title: "Papirnata Naušnica 1", price: "11.30€" },
    { id: 2, img: "/kat2.png", title: "Papirnata Naušnica 2", price: "12.50€" },
    { id: 3, img: "/kat3.png", title: "Papirnata Naušnica 3", price: "10.00€" },
    { id: 4, img: "/kat4.png", title: "Papirnata Naušnica 4", price: "15.20€" },
    { id: 5, img: "/kat5.png", title: "Papirnata Naušnica 5", price: "9.80€" },
    { id: 6, img: "/kat1.png", title: "Papirnata Naušnica 6", price: "14.00€" },
    { id: 7, img: "/kat2.png", title: "Papirnata Naušnica 7", price: "13.30€" },
    { id: 8, img: "/kat3.png", title: "Papirnata Naušnica 8", price: "16.40€" },
  ];

  return (
    <main className="mt-10 mb-20 sm:px-10 px-4 mx-auto w-full">
      <Hero />
      <AboutCollection />
      <ItemGrid col={typeof collection === "string" ? collection : ""} />
      <CTA text="Razgovarajmo o Custom Narudžbi" link="kontakt" />
    </main>
  );
};

export default CollectionDetails;
