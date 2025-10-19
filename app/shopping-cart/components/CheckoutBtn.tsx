"use client";

import { createCheckout } from "@/lib/shopify/checkout";
import { useCartStore } from "@/store/cartStore";
import { useState } from "react";

const CheckoutBtn = () => {
  const [loading, setLoading] = useState(false);
  const cart = useCartStore((state) => state.cart);

  const handleCheckout = async () => {
    if (cart.length === 0) return;
    setLoading(true);
    const lineItems = cart.map((item) => ({
      variantId: item.variants.edges[0].node.id,
      quantity: 1,
    }));

    try {
      const checkout = await createCheckout(lineItems);
      window.location.href = checkout;
    } catch (err) {
      console.error("Checkout failed", err);
      setLoading(false);
    }
  };

  return (
    <button onClick={handleCheckout} className="ghost" disabled={loading}>
      {loading ? <span>Učitavanje...</span> : <span>Checkout</span>}
    </button>
  );
};

export default CheckoutBtn;
