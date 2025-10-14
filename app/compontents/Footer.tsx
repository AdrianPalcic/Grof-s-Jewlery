"use client";

import { Facebook, Instagram } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { categories, infoLinks } from "../constants";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    console.log("Newsletter email submitted:", email);
    setSubmitted(true);
    setEmail("");
  };

  return (
    <footer className="flex w-full flex-wrap gap-5 px-4 sm:px-8 mb-4">
      <div className="flex-1 min-w-[250px]">
        <h2 className="text-3xl mb-2">Grof&apos;s Jewlery</h2>
        <p className="font-cormorant">
          Izuzetan nakit izrađen za one koji cijene najfinije stvari u životu.
        </p>
      </div>

      <div className="flex-1 min-w-[250px]">
        <h3 className="uppercase text-lg font-semibold mb-2">Kupujte</h3>
        <ul className="flex flex-col gap-2">
          {categories.map((link) => (
            <Link
              href={`/kategorije/${link.slug}`}
              key={link.slug}
              className=" font-cormorant font-regular text-lg text-[#5A5A5A] transition-colors duration-300 hover:text-secondaryColor"
            >
              <li>{link.text}</li>
            </Link>
          ))}
        </ul>
      </div>

      <div className="flex-1 min-w-[250px]">
        <h3 className="uppercase text-lg font-semibold mb-2">Informacije</h3>
        <ul className="flex flex-col gap-2">
          {infoLinks.map((link) => (
            <Link
              href={`/${link.slug}`}
              key={link.slug}
              className=" font-cormorant font-regular text-lg text-[#5A5A5A] transition-colors duration-300 hover:text-secondaryColor"
            >
              <li>{link.text}</li>
            </Link>
          ))}
        </ul>
      </div>

      <div className="flex-1 min-w-[250px]">
        <h3 className="uppercase text-lg font-semibold mb-2">Zapratite nas</h3>
        <div className="flex gap-2 items-center mt-2">
          <Link href="https://www.facebook.com" className="group">
            <Facebook
              color="#5A5A5A"
              className="group-hover:text-secondaryColor "
            />
          </Link>
          <Link href="https://www.instagram.com" className="group">
            <Instagram
              color="#5A5A5A"
              className="group-hover:text-secondaryColor"
            />
          </Link>
        </div>

        <div className="mt-4">
          <h3 className="uppercase text-lg font-semibold mb-2">Newsletter</h3>
          <form onSubmit={handleSubmit} className="flex flex-col gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Vaš email"
              className="p-2 border border-secondaryColor font-cinzel  w-full"
              required
            />
            <button type="submit" className="ghost">
              Prijavi se
            </button>
            {submitted && (
              <p className="text-green-600 text-sm">Hvala na prijavi!</p>
            )}
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
