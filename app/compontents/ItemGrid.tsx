import GhostButton from "@/app/compontents/GhostButton";
import Link from "next/link";
import React from "react";
import { Products } from "../page";

const ItemGrid = ({ proizvodi = [] }: { proizvodi?: Partial<Products>[] }) => {
  return (
    <section id="item-grid" className="mb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-4">
        {proizvodi.map((item) => (
          <div key={item.id}>
            <Link href={`/proizvodi/${item.slug}`} className="overflow-hidden">
              <img
                src={item?.images?.[0]?.src}
                alt={item.name}
                className="w-full min-h-[250px] h-[300px] object-cover transition-opacity duration-300 hover:opacity-70"
              />
            </Link>
            <div className="flex flex-col items-start justify-start w-full">
              <h2 className="mt-2 text-xl font-semibold">{item.name}</h2>
              <p className="mb-2">{"€" + item.price}</p>
              <GhostButton text="Dodaj u košaricu" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ItemGrid;
