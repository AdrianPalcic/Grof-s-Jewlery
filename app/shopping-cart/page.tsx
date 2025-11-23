"use client";

import React, { useEffect, useState } from "react";
import CartEmpty from "./components/CartEmpty";
import CartFull from "./components/CartFull";
import { useCartStore } from "@/store/cartStore";
import Loader from "../compontents/Loader";
import { Product } from "@/types/types";
import Head from "next/head";
import { syncCart } from "@/lib/shopify/syncCart";

const Page = () => {
  const cart = useCartStore((state) => state.cart);
  const clearCart = useCartStore((state) => state.clearCart);
  const removeItems = useCartStore((state) => state.removeItems);
  const [filtered, setFiltered] = useState<Product[]>([]);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    const fetchFreshProducts = async () => {
      if (!cart.length) return;
      const available: Product[] = [];
      const unavailable: Product[] = [];

      const ids = cart.map((item) => item.id);
      const freshProducts = await syncCart(ids);

      if (!freshProducts) return;

      freshProducts.forEach((product) => {
        if (product.availableForSale === true) {
          available.push(product);
        } else {
          unavailable.push(product);
        }
      });

      if (available.length > 0) {
        setFiltered(available);
      }

      if (unavailable.length > 0) {
        const idsToRemove = unavailable.map((p) => p.id);
        removeItems(idsToRemove);
      }

      setMounted(true);
    };
    fetchFreshProducts();
  }, [cart]);

  if (!mounted) return <Loader />;

  return (
    <>
      <Head>
        <title>Grof&apos;s Jewlery | Shopping Cart</title>
        <meta
          name="description"
          content="Pregledajte svoj shopping cart i upravljajte odabranim proizvodima u Grof's Jewlery webshopu."
        />
        <meta property="og:title" content="Grof's Jewlery | Shopping Cart" />
        <meta
          property="og:description"
          content="Pregledajte svoj shopping cart i upravljajte odabranim proizvodima u Grof's Jewlery webshopu."
        />
        <meta
          property="og:url"
          content="https://grof-s-jewlery.vercel.app/shopping-cart"
        />
        <meta property="og:site_name" content="Grof's Jewlery" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/hero-home.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Grof's Jewlery | Shopping Cart" />
        <meta
          name="twitter:description"
          content="Pregledajte svoj shopping cart i upravljajte odabranim proizvodima u Grof's Jewlery webshopu."
        />
        <meta name="twitter:image" content="/hero-home.png" />
      </Head>
      <section className="px-4 sm:px-10 mx-auto mt-10 mb-20">
        {filtered.length === 0 ? (
          <CartEmpty />
        ) : (
          <CartFull products={filtered} />
        )}
      </section>
    </>
  );
};

export default Page;
