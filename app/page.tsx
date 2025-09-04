import Link from "next/link";
import ButtonMain from "./compontents/ButtonMain";
import Hero from "./compontents/Hero";
import KolekcijaHome from "./compontents/KolekcijaHome";
import OnamaHome from "./compontents/OnamaHome";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-[1700px]">
      <Hero />
      <KolekcijaHome />
      <OnamaHome />
    </main>
  );
}
