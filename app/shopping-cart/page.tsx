"use client";

import React, { useEffect, useState } from "react";
import CartEmpty from "./components/CartEmpty";
import CartFull from "./components/CartFull";
import { useCartStore } from "@/store/cartStore";
import Loader from "../compontents/Loader";

const Page = () => {
  const cart = useCartStore((state) => state.cart);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <Loader />;

  return (
    <section className="px-4 sm:px-10 mx-auto mt-10 mb-20">
      {cart.length === 0 ? <CartEmpty /> : <CartFull products={cart} />}
    </section>
  );
};

export default Page;
