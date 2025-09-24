import { getCollectionProducts } from "@/lib/shopify/collectionProducts";
import AboutCollection from "./components/AboutCollection";
import CTA from "@/app/compontents/CTA";
import ItemGrid from "@/app/compontents/ItemGrid";
import { getAllCollections } from "@/lib/shopify/collections";
import { Image } from "@/types/types";
import { Hero } from "./components/Hero";

type PageProps = {
  params: Promise<{ kolekcija: string }>;
};

const Page = async ({ params }: PageProps) => {
  const { kolekcija } = await params;

  const collections = await getAllCollections(2);
  const collection = collections.find(
    (collection) => collection.handle === kolekcija
  );

  const image: Image = collection?.image || {
    url: "/collection.png",
    altText: "Collection",
  };

  console.log(collection);

  const products = await getCollectionProducts({
    handle: kolekcija,
    first: 20,
  });
  return (
    <main className="mt-10 mb-20 sm:px-10 px-4 mx-auto w-full">
      <Hero image={image} name={collection?.title || ""} />
      <AboutCollection />
      <ItemGrid products={products} />
      <CTA text="Razgovarajmo o Custom Narudžbi" link="kontakt" />
    </main>
  );
};

export default Page;
