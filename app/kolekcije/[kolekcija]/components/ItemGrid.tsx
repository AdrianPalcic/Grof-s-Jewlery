import GhostButton from "@/app/compontents/GhostButton";
import Link from "next/link";
import React from "react";

const ItemGrid = ({ col }: { col: string }) => {
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
    <section id="item-grid" className="mb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-4">
        {items.map((item) => (
          <div key={item.id}>
            <Link
              href={`/kolekcije/${col}/${item.title}`}
              className="overflow-hidden"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full min-h-[250px] h-[300px] object-cover transition-opacity duration-300 hover:opacity-70"
              />
            </Link>
            <div className="flex flex-col items-start justify-start w-full">
              <h2 className="mt-2 text-xl font-semibold">{item.title}</h2>
              <p className="mb-2">{item.price}</p>
              <GhostButton text="Dodaj u košaricu" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ItemGrid;
