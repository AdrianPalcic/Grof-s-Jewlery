"use client";

import React, { useEffect, useState } from "react";
import Head from "next/head";
import BuilderFull from "./components/BuilderFull";
import Hero from "./components/Hero";
import { useGiftStore } from "@/store/giftStore";
import Loader from "../compontents/Loader";
import toast from "react-hot-toast";

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
    <>
      <Head>
        <title>Grof&apos;s Jewlery | DIY Gift Box</title>
        <meta
          name="description"
          content="Kreirajte svoju savršenu poklon kutiju s Grof's Jewlery. Odaberite proizvode, prilagodite i sastavite poklon po želji."
        />
        {/* Open Graph */}
        <meta property="og:title" content="Grof's Jewlery | DIY Gift Box" />
        <meta
          property="og:description"
          content="Kreirajte svoju savršenu poklon kutiju s Grof's Jewlery. Odaberite proizvode, prilagodite i sastavite poklon po želji."
        />
        <meta property="og:image" content="/hero-home.png" />
        <meta
          property="og:url"
          content="https://grof-s-jewlery.vercel.app/gift-box-builder"
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="hr_HR" />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Grof's Jewlery | DIY Gift Box" />
        <meta
          name="twitter:description"
          content="Kreirajte svoju savršenu poklon kutiju s Grof's Jewlery. Odaberite proizvode, prilagodite i sastavite poklon po želji."
        />
        <meta name="twitter:image" content="/hero-home.png" />
      </Head>
      <section className="section mt-10">
        <Hero />
        {giftBox && <BuilderFull />}
      </section>
    </>
  );
};

export default Page;
