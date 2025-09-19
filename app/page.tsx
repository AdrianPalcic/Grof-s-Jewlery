import Hero from "./compontents/Hero";
import KolekcijaHome from "./compontents/KolekcijaHome";
import OnamaHome from "./compontents/OnamaHome";
import Bestsellers from "./compontents/Bestsellers";
import Categories from "./compontents/Categories";
import Reviews from "./compontents/Reviews";
import BuildGift from "./compontents/BuildGift";
import CTA from "./compontents/CTA";

// Tip za pojedinu kategoriju
type Category = {
  id: number;
  name: string;
  slug: string;
  parent: number;
  description: string;
  display: string;
  count: number;
  menu_order: number;
  image: string | null;
  _links?: any;
  children: Category[];
};

// Mapa kategorija po ID-u
type CategoriesMap = Record<number, Category>;

export default async function Home() {
  let categories: Category[] = [];

  try {
    const res = await fetch("http://localhost:3000/api/wc-categories", {
      next: { revalidate: 3600 },
    });

    if (res.ok) {
      const data: Category[] = await res.json();
      const categoriesMap: CategoriesMap = {};

      data.forEach((cat) => {
        categoriesMap[cat.id] = { ...cat, children: [] };
      });

      const topLevelCategories: Category[] = [];
      data.forEach((cat) => {
        if (cat.parent === 0) {
          topLevelCategories.push(categoriesMap[cat.id]);
        } else if (categoriesMap[cat.parent]) {
          categoriesMap[cat.parent].children.push(categoriesMap[cat.id]);
        }
      });

      // Filter nepotrebnih kategorija
      const NeededCategories = topLevelCategories.filter(
        (cat) => cat.name !== "Uncategorized"
      );

      console.log(NeededCategories);
      categories = NeededCategories;
    } else {
      console.error("Proxy fetch error:", await res.text());
    }
  } catch (err) {
    console.error("Error fetching categories via proxy:", err);
  }

  return (
    <main className="mx-auto w-full max-w-[1700px]">
      <Hero />
      <KolekcijaHome />
      <OnamaHome />
      <Bestsellers />
      <Categories />
      <Reviews />
      <BuildGift />
      <CTA text="Kontakt" link="kontakt" />
    </main>
  );
}
