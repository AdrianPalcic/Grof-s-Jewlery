"use client";

import { useCartStore } from "@/store/cartStore";
import { useGiftStore } from "@/store/giftStore";
import { Product } from "@/types/types";
import { X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const AddToGiftBoxBtn = ({ product }: { product: Product }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [modalContent, setModalContent] = useState({
    h2: "",
    p: "",
    linkText: "",
    link: "",
  });
  const baseBox = useGiftStore((state) => state.baseBox);
  const setBaseBox = useGiftStore((state) => state.setBaseBox);
  const setSelectedItems = useGiftStore((state) => state.addItem);
  const selectedItems = useGiftStore((state) => state.selectedItems);
  const cart = useCartStore((state) => state.cart);

  const handleClick = () => {
    if (cart.some((cartItem) => cartItem.id === product.id)) {
      setModalContent({
        h2: "Ovaj Artikl Vam je u košarici",
        p: "Za pretvaranje u poklon maknite ga iz košarice",
        linkText: "moja košarica",
        link: "/shopping-cart",
      });
      setIsOpen(true);
      return;
    }

    const exists = selectedItems.some((item) => item.id === product.id);

    if ((baseBox && baseBox.id === product.id) || exists) {
      setModalContent({
        h2: "Ovaj artikl Vam je več u poklonu",
        p: "Za više primjeraka molimo Vas",
        linkText: "Kontaktirajte nas",
        link: "/kontakt",
      });
      setIsOpen(true);
      return;
    }

    if (product.productType.includes("pakiranje-poklona")) {
      setBaseBox(product);
    } else if (baseBox === null) {
      setMessage("Prvo odaberite pakiranje za Vaš poklon");
      setIsOpen(true);
      return;
    } else if (
      baseBox !== null &&
      !product.productType.includes("pakiranje-poklona")
    ) {
      setSelectedItems(product);
    }
  };

  return (
    <div className="w-full relative">
      <button onClick={() => handleClick()} className="ghost w-full">
        Dodaj u gift box
      </button>

      {isOpen && (
        <div className="absolute left-0 top-full mt-2 w-[260px] p-3 bg-white border rounded shadow-lg z-50">
          <button
            className="absolute top-1 right-1"
            onClick={() => setIsOpen(false)}
          >
            <X size={16} />
          </button>
          <h2 className="font-semibold text-lg mt-2">{modalContent.h2}</h2>
          <p className="">
            {modalContent.p}{" "}
            <Link
              href={modalContent.link}
              className="text-secondaryColor underline inline-block w-full"
            >
              {modalContent.linkText}
            </Link>
          </p>
        </div>
      )}
    </div>
  );
};

export default AddToGiftBoxBtn;
