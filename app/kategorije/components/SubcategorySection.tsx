import ButtonMain from "@/app/compontents/ButtonMain";
import GhostButton from "@/app/compontents/GhostButton";
import Link from "next/link";
import React from "react";

const SubcategorySection = ({ name }: { name: string }) => {
  const items = [
    {
      id: 1,
      itemCat: "package-design",
      img: "/kat1.png",
      title: "Papirnata Naušnica 1",
      price: "11.30€",
    },
    {
      id: 2,
      itemCat: "package-design",
      img: "/kat2.png",
      title: "Papirnata Naušnica 2",
      price: "12.50€",
    },
    {
      id: 3,
      itemCat: "package-design",
      img: "/kat3.png",
      title: "Papirnata Naušnica 3",
      price: "10.00€",
    },
    {
      id: 4,
      itemCat: "package-design",
      img: "/kat4.png",
      title: "Papirnata Naušnica 4",
      price: "15.20€",
    },
  ];

  return (
    <section className=" flex flex-col mb-6">
      <h1 className="text-2xl sm:text-4xl mb-2">{name}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-4 mb-5">
        {items.map((item) => (
          <div key={item.id}>
            <Link
              href={`/kategorije/${item.itemCat}/${name}/${item.title}`}
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
      <Link href={`/kategorije/${items[0].itemCat}/${name}`}>
        <ButtonMain text="Svi Artikli" />
      </Link>
    </section>
  );
};

export default SubcategorySection;
