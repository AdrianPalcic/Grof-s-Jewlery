"use client";

import React, { useEffect, useState } from "react";
import BuilderFull from "./components/BuilderFull";
import Hero from "./components/Hero";
import { useGiftStore } from "@/store/giftStore";
import Loader from "../compontents/Loader";

const Page = () => {
  const giftBox = useGiftStore((state) => state.baseBox);
  const resetGift = useGiftStore((state) => state.resetGift);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (giftBox?.availableForSale === false) {
      resetGift();
    }
    setMounted(true);
  }, [giftBox]);

  if (!mounted) return <Loader />;

  return (
    <section className="section mt-10">
      <Hero />
      {giftBox && <BuilderFull />}
    </section>
  );
};

export default Page;
