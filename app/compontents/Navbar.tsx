"use client";
import { ChevronDown, ShoppingCart, Menu, X, Gift } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

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

  return (
    <header className="w-full px-6 py-4 font-cinzel font-regular border-b border-gray-200">
      <nav className="flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center text-secondaryColor text-lg"
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

        {/* Desktop Nav */}
        <ul className="hidden navbreak:flex justify-center text-[15px] gap-6 uppercase">
          {links.map((cat) => (
            <li
              key={cat.slug}
              className="relative group flex items-center  cursor-pointer hover:text-secondaryColor transition-colors duration-300"
            >
              <span className="flex items-center gap-1">
                {cat.text} <ChevronDown size={14} />
              </span>

              {cat.links.length > 0 && (
                <ul
                  className="absolute left-0 top-6  w-48 bg-white border border-gray-200 rounded-sm shadow-md 
                  opacity-0 invisible pointer-events-none
                  transition-all duration-300 ease-out 
                  group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto gtoup-hover:top-full text-textColor z-10"
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

        <div className="flex items-center gap-4">
          <Link href="/shopping-cart">
            <ShoppingCart className="transition-colors duration-300 hover:text-secondaryColor" />
          </Link>
          <Link href="/gift-box-builder">
            <Gift className="transition-colors duration-300 hover:text-secondaryColor" />
          </Link>
          <button
            className="navbreak:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      <div
        className={`navbreak:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileOpen ? "max-h-[1200px] opacity-100 mt-4" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-4 uppercase text-sm p-2">
          {links.map((cat) => (
            <li key={cat.slug} className="flex flex-col">
              <span className="flex items-center gap-1">
                {cat.text} <ChevronDown size={14} />
              </span>
              {cat.links.length > 0 && (
                <ul className="ml-4 mt-2 flex flex-col gap-2 text-gray-600">
                  {cat.links.map((sublink) => (
                    <li key={sublink.slug}>
                      <Link
                        href={`/kategorije/${cat.slug}/${sublink.slug}`}
                        className="block hover:text-secondaryColor transition-colors duration-300"
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
