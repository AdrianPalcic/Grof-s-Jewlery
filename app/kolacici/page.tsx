import React from "react";

export const metadata = {
  title: "Grof's Jewelry | Politika kolačića",
  description:
    "Saznajte kako Grof's Jewelry webshop koristi kolačiće za poboljšanje iskustva i funkcioniranje stranice.",
  openGraph: {
    title: "Grof's Jewelry | Politika kolačića",
    description:
      "Saznajte kako Grof's Jewelry webshop koristi kolačiće za poboljšanje iskustva i funkcioniranje stranice.",
    url: "https://grofsjewelry.com/kolacici",
    siteName: "Grof's Jewelry",
    images: [
      {
        url: "/hero-home.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "hr_HR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grof's Jewelry | Politika kolačića",
    description:
      "Saznajte kako Grof's Jewelry webshop koristi kolačiće za poboljšanje iskustva i funkcioniranje stranice.",
    images: ["/hero-home.png"],
  },
};

const Page = () => {
  return (
    <section className="max-w-4xl mx-auto p-6 sm:p-10">
      <h1 className="text-3xl font-bold mb-6">Politika kolačića</h1>

      <p className="mb-4">
        Ova stranica koristi kolačiće radi poboljšanja korisničkog iskustva,
        pravilnog funkcioniranja košarice i postupka kupnje, te analize
        korištenja webshopa. Korištenjem ove stranice pristajete na upotrebu
        kolačića sukladno ovoj politici.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">1. Što su kolačići?</h2>
      <p className="mb-4">
        Kolačići su male tekstualne datoteke koje se spremaju na vaš uređaj kada
        posjetite web stranicu. Omogućuju prepoznavanje uređaja, pamćenje vaših
        postavki i ispravno funkcioniranje web trgovine.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        2. Koje vrste kolačića koristimo
      </h2>
      <ul className="list-disc ml-6 mb-4">
        <li>
          <strong>Neophodni kolačići:</strong> omogućuju osnovne funkcije web
          trgovine, poput dodavanja proizvoda u košaricu, funkcioniranje
          checkouta i sigurnosne provjere. Ovi kolačići ne mogu biti isključeni
          jer su neophodni za rad webshopa.
        </li>
        <li>
          <strong>Analitički kolačići:</strong> koriste se za praćenje
          statistike posjeta i ponašanja korisnika. Aktiviraju se samo ako
          korisnik prihvati kolačiće.
        </li>
        <li>
          <strong>Marketinški kolačići:</strong> omogućuju prikaz ciljanih
          oglasa i remarketing (npr. putem Facebook Piksela ili Google Ads-a,
          ako su postavljeni). Aktiviraju se samo uz privolu.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        3. Prihvaćanje kolačića
      </h2>
      <p className="mb-4">
        Prilikom prvog posjeta prikazuje se obavijest o kolačićima s opcijom
        &quot;Prihvaćam sve&quot;. Klikom na tu opciju pristajete na korištenje
        svih vrsta kolačića. Vaša odluka pohranjuje se u pregledniku kako se
        banner ne bi ponovno prikazivao.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        4. Upravljanje i brisanje kolačića
      </h2>
      <p className="mb-4">
        Korisnik može u bilo kojem trenutku obrisati ili blokirati kolačiće
        putem postavki svog preglednika (Chrome, Firefox, Safari, Edge).
        Onemogućavanje neophodnih kolačića može uzrokovati nepravilno
        funkcioniranje webshopa, uključujući košaricu i checkout.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">5. Kontakt</h2>
      <p className="mb-4">
        Za dodatne informacije možete nas kontaktirati na:
        <br />
        <strong>Email:</strong> grofsjewelry@gmail.com
      </p>

      <p className="text-sm mt-6">Zadnja izmjena: 28.11.2025.</p>
    </section>
  );
};

export default Page;
