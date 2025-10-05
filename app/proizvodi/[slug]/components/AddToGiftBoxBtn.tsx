"use client";

import { useGiftStore } from "@/store/giftStore";
import { Product } from "@/types/types";
import React, { useState } from "react";

const AddToGiftBoxBtn = ({ product }: { product: Product }) => {
  const baseBox = useGiftStore((state) => state.baseBox);
  const setBaseBox = useGiftStore((state) => state.setBaseBox);
  const setSelectedItems = useGiftStore((state) => state.addItem);
  const selectedItems = useGiftStore((state) => state.selectedItems);

  const handleClick = () => {
    if (product.productType.includes("pakiranje-poklona")) {
      setBaseBox(product);
    } else if (baseBox === null) {
      alert(
        "Molimo Vas prvo odaberite kutiju ili vrecicu u koju cete staviti poklon"
      );
    } else if (
      baseBox !== null &&
      !product.productType.includes("pakiranje-poklona")
    ) {
      setSelectedItems(product);
    }

    console.log(selectedItems);
    console.log("Ovo je base box:", baseBox);
  };

  return (
    <button onClick={() => handleClick()} className="ghost w-full">
      Dodaj u gift box
    </button>
  );
};

export default AddToGiftBoxBtn;
