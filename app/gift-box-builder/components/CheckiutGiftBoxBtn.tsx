"use client";

import { useGiftStore } from "@/store/giftStore";
import { createCheckout } from "@/lib/shopify/checkout";
import { useState } from "react";

const CheckoutGiftBoxBtn = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const baseBox = useGiftStore((state) => state.baseBox);
  const selectedItems = useGiftStore((state) => state.selectedItems);

  const handleCheckout = async () => {
    if (!baseBox) return;
    setLoading(true);

    // Kreiraj lineItems
    const lineItems = [
      { variantId: baseBox.variants.edges[0].node.id, quantity: 1 },
      ...selectedItems.map((item) => ({
        variantId: item.variants.edges[0].node.id,
        quantity: 1,
        customAttributes: [{ key: "Custom Gift box", value: "true" }],
      })),
    ];

    try {
      const checkoutUrl = await createCheckout(
        lineItems,
        "Gift box narudžba",
        "SMYJFZY5AE4H"
      );
      window.location.href = checkoutUrl;
    } catch (err) {
      console.error("Checkout failed", err);
      setLoading(false);
    }
  };

  return (
    <button onClick={handleCheckout} className="ghost">
      {loading ? <span>Učitavanje...</span> : <span>Checkout</span>}
    </button>
  );
};

export default CheckoutGiftBoxBtn;
