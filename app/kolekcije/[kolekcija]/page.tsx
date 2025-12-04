import { getCollectionProducts } from "@/lib/shopify/collectionProducts";
import AboutCollection from "./components/AboutCollection";
import CTA from "@/app/compontents/CTA";
import ItemGrid from "@/app/compontents/ItemGrid";
import { getAllCollections } from "@/lib/shopify/collections";
import { Image } from "@/types/types";
import { Hero } from "./components/Hero";

// Metadata za SEO
export async function generateMetadata({
  params,
}: {
  params: { kolekcija: string };
}) {
  const { kolekcija } = params;

  const collections = await getAllCollections(2);
  const collection = collections.find((c) => c.handle === kolekcija);

  const title = collection?.title
    ? `${collection.title} | Grof's Jewelry`
    : "Grof's Jewelry | Kolekcija";

  const description =
    collection?.description || "Otkrijte naše proizvode u kolekciji.";

  const image = collection?.image?.url || "/collection.png";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://grofsjewelry.com/kolekcije/${kolekcija}`,
      siteName: "Grof's Jewelry",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
        },
      ],
      locale: "hr_HR",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

// PageProps tip
type PageProps = {
  params: { kolekcija: string };
};

// Page komponenta
const Page = async ({ params }: PageProps) => {
  const { kolekcija } = params;

  // Dohvati kolekcije i nađi ovu po handle-u
  const collections = await getAllCollections(2);
  const collection = collections.find((c) => c.handle === kolekcija);

  const image: Image = collection?.image || {
    url: "/collection.png",
    altText: "Collection",
  };

  // Dohvati proizvode za kolekciju
  const products = await getCollectionProducts({
    handle: kolekcija,
    first: 25,
  });

  return (
    <main className="mt-10 mb-20 sm:px-10 px-4 mx-auto w-full">
      <Hero image={image} name={collection?.title || ""} />
      <AboutCollection description={collection?.description || ""} />
      <ItemGrid products={products} />
      <CTA text="Razgovarajmo o Custom Narudžbi" link="kontakt" />
    </main>
  );
};

export default Page;
