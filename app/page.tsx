import Hero from "./compontents/Hero";
import KolekcijaHome from "./compontents/KolekcijaHome";
import OnamaHome from "./compontents/OnamaHome";
import Bestsellers from "./compontents/Bestsellers";
import Categories from "./compontents/Categories";
import Reviews from "./compontents/Reviews";
import BuildGift from "./compontents/BuildGift";
import CTA from "./compontents/CTA";


export default  function Home() {


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
