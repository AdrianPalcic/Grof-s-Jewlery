import Hero from "./compontents/Hero";
import KolekcijaHome from "./compontents/KolekcijaHome";
import OnamaHome from "./compontents/OnamaHome";
import Bestsellers from "./compontents/Bestsellers";
import Categories from "./compontents/Categories";
import Reviews from "./compontents/Reviews";
import BuildGift from "./compontents/BuildGift";
import CTA from "./compontents/CTA";
import { getAllCollections } from "@/lib/shopify/collections";
import { getFiveProducts } from "@/lib/shopify/fiveProducts";

// ✅ SEO Metadata za Home stranicu
export const metadata = {
  title: "Grof's Jewlery | Handmade Paper Jewelry",
  description:
    "Dobrodošli u Grof's Jewlery – otkrijte najbolje proizvode, kolekcije i poklon setove.",
  openGraph: {
    title: "Grof's Jewlery | Handmade Paper Jewelry",
    description:
      "Dobrodošli u Grof's Jewlery – otkrijte najbolje proizvode, kolekcije i poklon setove.",
    url: "grof-s-jewlery.vercel.app",
    siteName: "Grof's Jewlery",
    images: [
      {
        url: "/hero-home.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "hr_HR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grof's Jewlery | Handmade Paper Jewelry",
    description:
      "Dobrodošli u Grof's Jewlery – otkrijte najbolje proizvode, kolekcije i poklon setove.",
    images: ["/hero-home.png"],
  },
};

export default async function Home() {
  const collections = await getAllCollections(2);
  const collection = collections.filter((col) => col.handle !== "frontpage");

  const fiveProducts = await getFiveProducts(5);
  console.log(fiveProducts[0]);

  return (
    <main className="mx-auto w-full max-w-[1700px]">
      <Hero />
      {collection ? <KolekcijaHome collection={collection[0]} /> : ""}
      <OnamaHome />
      <Bestsellers products={fiveProducts} />
      <Categories />
      <Reviews />
      <BuildGift />
      <CTA text="Kontakt" link="kontakt" />
    </main>
  );
}
