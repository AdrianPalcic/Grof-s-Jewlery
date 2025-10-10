"use client";
import { useCartStore } from "@/store/cartStore";
import {
  ChevronDown,
  ShoppingCart,
  Menu,
  X,
  Gift,
  Hammer,
  HammerIcon,
  ToolCase,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import CartModal from "./CartModal";
import { useGiftStore } from "@/store/giftStore";
import GiftModal from "./GiftModal";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const modalOpen = useCartStore((state) => state.modalOpen);
  const lastAdded = useCartStore((state) => state.lastAdded);
  const cart = useCartStore((state) => state.cart);
  const baseBox = useGiftStore((state) => state.baseBox);
  const giftModalOpen = useGiftStore((state) => state.modalOpen);
  const giftLastAdded = useGiftStore((state) => state.lastAdded);

  const links = [
    {
      text: "Nakit od papira",
      slug: "nakit-od-papira",
      links: [
        { text: "Naušnice i ukosnice", slug: "nausnice-ukosnice" },
        { text: "Broševi", slug: "brosevi" },
        { text: "Prstenje", slug: "prstenje" },
        { text: "Ukosnice", slug: "ukosnice" },
        { text: "Ogrlice", slug: "ogrlice" },
      ],
    },
    {
      text: "Pokloni",
      slug: "pokloni",
      links: [
        { text: "Okviri za slike", slug: "okviri-za-slike" },
        { text: "Mala slikarska platna", slug: "mala-slikarska-platna" },
        { text: "Dekorativne vaze", slug: "dekorativne-vaze" },
        { text: "Dekorativne teglice", slug: "dekorativne-teglice" },
        { text: "Magneti", slug: "magneti" },
        { text: "Notesi", slug: "notesi" },
        { text: "Drvene kutije", slug: "drvene-kutije" },
        { text: "Dekoracije za dom", slug: "dekoracije-za-dom" },
        { text: "Mikrobuketi", slug: "mikrobuketi" },
      ],
    },
    {
      text: "Pakiranje poklona",
      slug: "pakiranje-poklona",
      links: [
        { text: "Kutije za poklone", slug: "kutije-za-poklone" },
        { text: "Vrečice za poklone", slug: "vrecice-za-poklone" },
      ],
    },
    {
      text: "Dodaci poklonima",
      slug: "dodaci-poklonima",
      links: [
        { text: "Čestitke", slug: "cestitke" },
        { text: "Zahvalnice", slug: "zahvalnice" },
        { text: "Inspirativne kartice", slug: "inspirativne-kartice" },
        { text: "Knjižne oznake", slug: "knjizne-oznake" },
      ],
    },
    {
      text: "Gift Boxes",
      slug: "gift-boxes",
      links: [{ text: "Mjesečni gift boxevi", slug: "mjesecni-gift-boxevi" }],
    },
    {
      text: "Package Design",
      slug: "package-design",
      links: [
        { text: "Handcrafted vizitke", slug: "handcrafted-vizitke" },
        { text: "Poklon paketići", slug: "poklon-paketici" },
        { text: "Zahvalnice za goste", slug: "zahvalnice-za-goste" },
      ],
    },
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="w-full px-6 py-4 font-cinzel font-regular border-b bg-bgColor border-gray-200 sticky top-0 z-50 ">
      <nav className="flex items-center justify-between">
        <div className="hidden navbreak:flex items-center">
          <Link href="/gift-box-builder" className="relative">
            <Gift className="transition-colors duration-300 hover:text-secondaryColor" />
            {mounted && baseBox ? (
              <span className="absolute -right-2 top-3 bg-gray-300 text-textColor rounded-full w-6 h-6 flex items-center justify-center">
                <Hammer className="w-3 h-3" />
              </span>
            ) : (
              ""
            )}
          </Link>
        </div>

        <Link
          href="/"
          className="flex items-center text-secondaryColor text-lg mx-auto"
        >
          <Image
            src="/logo.jpg"
            alt="logo"
            width={60}
            height={60}
            className="mix-blend-darken"
          />
          <h4 className="ml-2">Grof&apos;s Jewelry</h4>
        </Link>

        <div className="flex items-center gap-4">
          <Link
            href="/shopping-cart"
            className="relative"
            onClick={mobileOpen ? () => setMobileOpen(false) : undefined}
          >
            <ShoppingCart className="transition-colors duration-300 hover:text-secondaryColor" />
            {mounted && cart.length > 0 ? (
              <span className="text-sm absolute font-cormorant -right-2 top-3 bg-gray-300 text-textColor rounded-full w-5 h-5 flex items-center justify-center p-2">
                {cart.length}
              </span>
            ) : (
              ""
            )}
          </Link>
          {modalOpen && lastAdded && <CartModal product={lastAdded} />}

          <Link
            href="/gift-box-builder"
            className="navbreak:hidden relative"
            onClick={mobileOpen ? () => setMobileOpen(false) : undefined}
          >
            <Gift className="transition-colors duration-300 hover:text-secondaryColor" />
            {mounted && baseBox ? (
              <span className="absolute -right-2 top-3 bg-gray-300 text-textColor rounded-full w-5 h-5 flex items-center justify-center">
                <Hammer className="w-3 h-3" />
              </span>
            ) : (
              ""
            )}
          </Link>
          {giftModalOpen && giftLastAdded && (
            <GiftModal product={giftLastAdded} />
          )}

          <button
            className="navbreak:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      <div className="hidden navbreak:block mt-4 z-20">
        <ul className="flex justify-center text-[15px] gap-6 uppercase">
          {links.map((cat) => (
            <li
              key={cat.slug}
              className="relative group flex items-center cursor-pointer hover:text-secondaryColor transition-colors duration-300"
            >
              <span className="flex items-center gap-1">
                {cat.text} <ChevronDown size={14} />
              </span>
              {cat.links.length > 0 && (
                <ul
                  className="absolute left-0 top-6 w-48 bg-white border border-gray-200 rounded-sm shadow-md 
                    opacity-0 invisible pointer-events-none
                    transition-all duration-300 ease-out 
                    group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto group-hover:top-full text-textColor z-10"
                >
                  {cat.links.map((sublink) => (
                    <li key={sublink.slug}>
                      <Link
                        href={`/kategorije/${cat.slug}/${sublink.slug}`}
                        className="block px-4 py-2 text-sm hover:text-secondaryColor transition-colors duration-300"
                      >
                        {sublink.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>

      <div
        className={`navbreak:hidden  transition-all duration-300 ease-in-out overflow-y-auto   ${
          mobileOpen
            ? "max-h-[1400px] h-[550px] opacity-100 mt-4 overflow-y-auto"
            : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-4 uppercase text-sm p-2 h-full ">
          {links.map((cat) => (
            <li key={cat.slug} className="flex flex-col font-cinzel">
              <span className="flex items-center gap-1 font-cinzel">
                {cat.text} <ChevronDown size={14} />
              </span>
              {cat.links.length > 0 && (
                <ul className="ml-4 mt-2 flex flex-col gap-2 text-gray-600 font-cormorant">
                  {cat.links.map((sublink) => (
                    <li key={sublink.slug}>
                      <Link
                        href={`/kategorije/${cat.slug}/${sublink.slug}`}
                        className="block font-cormorant hover:text-secondaryColor transition-colors duration-300"
                        onClick={() => setMobileOpen(false)}
                      >
                        {sublink.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
