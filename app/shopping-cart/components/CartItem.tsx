"use client";

import { Trash } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

type SubItem = {
  id: number;
  title: string;
  price: number;
  qty: number;
};

type CartItemType = {
  id: number | string;
  title: string;
  price: number;
  type?: "giftbox" | "normal";
  items?: SubItem[];
};

const CartItem = () => {
  // Dummy data za testiranje
  const [item] = useState<CartItemType>({
    id: "giftbox-1",
    title: "Moj Gift Box",
    price: 41.3,
    type: "giftbox",
    items: [
      { id: 101, title: "Papirnata Naušnica 1", price: 11.3, qty: 1 },
      { id: 102, title: "Papirnata Naušnica 2", price: 12.5, qty: 2 },
    ],
  });

  const [isOpen, setIsOpen] = useState(false);

  const deleteItem = (id: number | string) => {
    console.log("Delete:", id);
  };

  return (
    <div
      id="item"
      className="w-full flex flex-col py-2 border-b border-gray-200"
    >
      {/* Glavni artikl */}
      <div className="w-full flex items-center justify-between">
        <div className="flex gap-4">
          <Link href="/taj-artikl" className="w-[100px] smm:w-[150px]">
            <img
              src="/1.png"
              alt="Artikl"
              className="w-full h-full object-cover"
            />
          </Link>

          <div className="flex flex-col gap-1 justify-between">
            <div>
              <h3 className="text-lg sm:text-xl">{item.title}</h3>
              <h3 className="text-[15px] smm:text-[16px]">{item.price}€</h3>
            </div>
            <div className="flex gap-1">
              <span onClick={() => deleteItem(item.id)}>
                <Trash
                  className="opacity-65 transition-all duration-300 hover:text-secondaryColor hover:opacity-100 cursor-pointer"
                  size={15}
                />
              </span>
            </div>
          </div>
        </div>

        {/* Cijena desno */}
        <div>
          <h3 className="text-lg sm:text-2xl">{item.price}€</h3>
        </div>
      </div>

      {/* Dropdown samo za giftbox */}
      {item.type === "giftbox" && (
        <div className="mt-2 ml-4">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-sm text-secondaryColor "
          >
            {isOpen ? "Sakrij sadržaj" : "Prikaži Sadržaj"}
          </button>

          {isOpen && (
            <div className="mt-2 space-y-1">
              {item.items?.map((sub) => (
                <div
                  key={sub.id}
                  className="flex justify-between text-sm border-b border-gray-100 pb-1"
                >
                  <span>{sub.title}</span>
                  <span>{sub.price}€</span>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CartItem;
