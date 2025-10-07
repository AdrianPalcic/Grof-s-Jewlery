"use client";

import { useCartStore } from "@/store/cartStore";
import { Product } from "@/types/types";
import React, { useState } from "react";
import { X } from "lucide-react";
import Link from "next/link";
import { useGiftStore } from "@/store/giftStore";

const AddToCartBtn = ({ product }: { product: Product }) => {
  const [modalContent, setModalContent] = useState({
    h2: "",
    p: "",
    linkText: "",
    link: "",
  });
  const [isOpen, setIsOpen] = useState<Boolean>(false);
  const cart = useCartStore((state) => state.cart);
  const addToCart = useCartStore((state) => state.addToCart);
  const baseBox = useGiftStore((state) => state.baseBox);
  const selectedItems = useGiftStore((state) => state.selectedItems);

  const addCart = () => {
    const isSame = cart.some((p) => p.id === product.id);

    if (isSame) {
      setModalContent({
        h2: "Ovaj Artikl Vam je već u košarici",
        p: "Za više primjeraka molimo Vas",
        linkText: "Kontaktirajte nas",
        link: "/kontakt",
      });

      setIsOpen(true);
      return;
    }

    if (
      (baseBox && baseBox.id === product.id) ||
      selectedItems.some((selectedItem) => selectedItem.id === product.id)
    ) {
      setModalContent({
        h2: "Ovaj Artikl Vam je u poklonu",
        p: "Za zasebnu kupnju, maknite ga iz poklona",
        linkText: "Moj poklon",
        link: "/gift-box-builder",
      });
      setIsOpen(true);
      return;
    }

    addToCart(product);
  };

  return (
    <div className="relative w-full">
      <button className="ghost w-full" onClick={addCart}>
        Dodaj u košaricu
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
            {modalContent.p} {""}
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

export default AddToCartBtn;
