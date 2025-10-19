"use client";

import React, { useEffect, useState } from "react";
import CartEmpty from "./components/CartEmpty";
import CartFull from "./components/CartFull";
import { useCartStore } from "@/store/cartStore";
import Loader from "../compontents/Loader";
import { Product } from "@/types/types";
import toast from "react-hot-toast";

const Page = () => {
  const cart = useCartStore((state) => state.cart);
  const removeItem = useCartStore((state) => state.removeFromCart);
  const [filtered, setFiltered] = useState<Product[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const availableProducts = cart.filter(
      (product) => product.availableForSale === true
    );
    setFiltered(availableProducts);

    const unavailable = cart.filter((p) => p.availableForSale === false);
    if (unavailable.length > 0) {
      unavailable.forEach((item) => removeItem(item.id));
      toast.error("Neki od vaših artikala su se rasprodali");
    }

    setMounted(true);
  }, [cart, removeItem]);

  if (!mounted) return <Loader />;

  return (
    <section className="px-4 sm:px-10 mx-auto mt-10 mb-20">
      {cart.length === 0 ? <CartEmpty /> : <CartFull products={filtered} />}
    </section>
  );
};

export default Page;
