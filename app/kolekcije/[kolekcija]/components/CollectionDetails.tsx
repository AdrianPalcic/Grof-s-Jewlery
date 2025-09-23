import Hero from "./Hero";
import AboutCollection from "./AboutCollection";
import ItemGrid from "@/app/compontents/ItemGrid";
import CTA from "@/app/compontents/CTA";

const CollectionDetails = async ({ collection }: { collection: string }) => {
  return (
    <main className="mt-10 mb-20 sm:px-10 px-4 mx-auto w-full">
      <Hero />
      <AboutCollection />
      <ItemGrid />
      <CTA text="Razgovarajmo o Custom Narudžbi" link="kontakt" />
    </main>
  );
};

export default CollectionDetails;
