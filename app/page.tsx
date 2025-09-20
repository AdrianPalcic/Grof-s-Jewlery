import Hero from "./compontents/Hero";
import KolekcijaHome from "./compontents/KolekcijaHome";
import OnamaHome from "./compontents/OnamaHome";
import Bestsellers from "./compontents/Bestsellers";
import Categories from "./compontents/Categories";
import Reviews from "./compontents/Reviews";
import BuildGift from "./compontents/BuildGift";
import CTA from "./compontents/CTA";

export type Image = {
  alt: string;
  date_created: string;
  date_created_gmt: string;
  date_modified: string;
  date_modified_gmt: string;
  id: number;
  name: string;
  src: string;
};

export type Products = {
  id: number;
  name: string;
  slug: string;
  images: Image[];
  price: string;
};

export default async function Home() {
  let products;

  try {
    const res = await fetch("http://localhost:3000/api/random-products", {
      next: { revalidate: 3600 },
    });
    if (res.ok) {
      products = await res.json();
      console.log(products);
    } else {
      console.error("Failed fetching random products", await res.text());
    }
  } catch (error) {
    console.error("Error at api/featured-products", error);
  }

  return (
    <main className="mx-auto w-full max-w-[1700px]">
      <Hero />
      <KolekcijaHome />
      <OnamaHome />
      <Bestsellers products={products} />
      <Categories />
      <Reviews />
      <BuildGift products={products} />
      <CTA text="Kontakt" link="kontakt" />
    </main>
  );
}
