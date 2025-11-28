import Hero from "./compontents/Hero";
import KolekcijaHome from "./compontents/KolekcijaHome";
import OnamaHome from "./compontents/OnamaHome";
import Bestsellers from "./compontents/Bestsellers";
import Categories from "./compontents/Categories";
import Reviews from "./compontents/Reviews";
import BuildGift from "./compontents/BuildGift";
import CTA from "./compontents/CTA";
import { getAllCollections } from "@/lib/shopify/collections";
import { getCollectionProducts } from "@/lib/shopify/collectionProducts";

// ✅ SEO Metadata za Home stranicu
export const metadata = {
  title: "Grof's Jewelry | Unique Gifts",
  description:
    "Dobrodošli u Grof's Jewlery – otkrijte najbolje proizvode, kolekcije i poklon setove.",
  openGraph: {
    title: "Grof's Jewlery | Unique Gifts",
    description:
      "Dobrodošli u Grof's Jewlery – otkrijte najbolje proizvode, kolekcije i poklon setove.",
    url: "https://grofsjewelry.com",
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
    title: "Grof's Jewelry | Unique Gifts",
    description:
      "Dobrodošli u Grof's Jewelry – otkrijte najbolje proizvode, kolekcije i poklon setove.",
    images: ["/hero-home.png"],
  },
};

export default async function Home() {
  const collections = await getAllCollections(2);
  const filteredCollections = collections.filter(
    (col) => col.handle !== "frontpage"
  );

  const fiveProducts = await getCollectionProducts({
    handle: filteredCollections[0].handle,
    first: 25,
  });

  return (
    <main className="mx-auto w-full max-w-[1700px]">
      <Hero />
      {filteredCollections &&
        filteredCollections.map((collection, idx) => (
          <KolekcijaHome collection={collection} idx={idx + 1} key={idx} />
        ))}
      <OnamaHome />
      <Bestsellers products={fiveProducts} />
      <Categories />
      <Reviews />
      <BuildGift />
      <CTA text="Kontakt" link="kontakt" />
    </main>
  );
}
