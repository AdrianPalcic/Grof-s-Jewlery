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

export default async function Home() {
  const collections = await getAllCollections(2);
  const collection = collections.filter((col) => col.handle !== "frontpage");

  const fiveProducts = await getFiveProducts(5);

  return (
    <main className="mx-auto w-full max-w-[1700px]">
      <Hero />
      <KolekcijaHome collection={collection[0]} />
      <OnamaHome />
      <Bestsellers products={fiveProducts} />
      <Categories />
      <Reviews />
      <BuildGift />
      <CTA text="Kontakt" link="kontakt" />
    </main>
  );
}
