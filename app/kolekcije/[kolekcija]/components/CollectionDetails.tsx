import Hero from "./Hero";
import AboutCollection from "./AboutCollection";
import ItemGrid from "@/app/compontents/ItemGrid";
import CTA from "@/app/compontents/CTA";
import { Image, Products } from "@/app/page";

type Brand = {
  id: number;
  name: string;
  slug: string;
  description: string;
  image: Image;
};

interface Props {
  collection: string;
}

const CollectionDetails = async ({ collection }: Props) => {
  try {
    // Fetch brand by slug
    const brandRes = await fetch(
      `http://localhost:3000/api/brands/${collection}`,
      {
        cache: "no-store",
      }
    );

    if (!brandRes.ok) {
      throw new Error("Failed to fetch brand");
    }

    const brand: Brand = await brandRes.json();

    // Fetch products by brand id
    const productsRes = await fetch(
      `http://localhost:3000/api/brands/products/${brand.id}`,
      {
        cache: "no-store",
      }
    );

    if (!productsRes.ok) {
      throw new Error("Failed to fetch products");
    }

    const productsData = await productsRes.json();
    const products: Products[] = productsData.products;

    return (
      <main className="mt-10 mb-20 sm:px-10 px-4 mx-auto w-full">
        <Hero image={brand.image} name={brand.name} />
        <AboutCollection name={brand.name} description={brand.description} />
        <ItemGrid proizvodi={products} />
        <CTA text="Razgovarajmo o Custom Narudžbi" link="kontakt" />
      </main>
    );
  } catch (error) {
    console.error("Error in CollectionDetails page:", error);
    return <div>Došlo je do greške pri učitavanju kolekcije.</div>;
  }
};

export default CollectionDetails;
