import React from "react";

export const metadata = {
  title: "Grof's Jewelry | Uvjeti prodaje",
  description:
    "Pročitajte uvjete prodaje Grof's Jewelry web trgovine. Saznajte pravila narudžbe, plaćanja, dostave i povrata.",
  openGraph: {
    title: "Grof's Jewelry | Uvjeti prodaje",
    description:
      "Pročitajte uvjete prodaje Grof's Jewelry web trgovine. Saznajte pravila narudžbe, plaćanja, dostave i povrata.",
    url: "https://grofsjewelry.com/uvjeti-prodaje",
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
    title: "Grof's Jewelry | Uvjeti prodaje",
    description:
      "Pročitajte uvjete prodaje Grof's Jewelry web trgovine. Saznajte pravila narudžbe, plaćanja, dostave i povrata.",
    images: ["/hero-home.png"],
  },
};

const Page = () => {
  return (
    <section className="max-w-4xl mx-auto p-6 sm:p-10">
      <h1 className="text-3xl font-bold mb-6">Uvjeti prodaje</h1>

      <p className="mb-4">
        Ovi uvjeti prodaje reguliraju kupnju proizvoda u webshopu Grof&apos;s
        Jewelry, vlasništvo obrta Grof&apos;s Jewelry, obrt za usluge,
        proizvodnju i trgovinu, vl. Iva Peroš, Kopernikova 112, Zagreb, OIB:
        19706383007.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">1. Narudžba</h2>
      <p className="mb-4">
        Narudžba se smatra potvrđenom kada kupac primi e-mail potvrde narudžbe
        od webshopa. Svaki artikl može biti naručen po jednom primjerku po
        narudžbi.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">2. Cijene i plaćanje</h2>
      <p className="mb-4">
        Sve cijene izražene su u eurima (EUR). Plaćanje se vrši putem Shopify
        Payments. Cijene uključuju sve zakonske troškove osim dostave, osim ako
        nije drugačije navedeno.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">3. Dostava</h2>
      <p className="mb-4">
        Rok isporuke iznosi 7 do 14 radnih dana od potvrde narudžbe. Dostava je
        besplatna za narudžbe iznad 13 €. Webshop trenutno surađuje sa HR
        poštom.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        4. Povrat i reklamacije
      </h2>
      <p className="mb-4">
        Kupac ima pravo na povrat u roku od 14 dana od primitka proizvoda.
        Proizvod mora biti neoštećen i nekorišten. Personalizirani proizvodi
        (jedan primjerak po artiklu) nisu predmet povrata osim u slučaju
        proizvodne greške. Za reklamacije i povrat kontaktirajte nas na
        grofsjewelry@gmail.com.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">5. Odgovornost</h2>
      <p className="mb-4">
        Webshop nastoji pružiti točne informacije o proizvodima, ali ne jamči
        potpunu točnost svih podataka. Webshop ne odgovara za tehničke probleme
        ili privremenu nedostupnost stranice.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">6. Kontakt</h2>
      <p className="mb-4">
        Za sva pitanja u vezi narudžbi i uvjeta prodaje možete nas kontaktirati:
        <br />
        <strong>Email:</strong> grofsjewelry@gmail.com
      </p>

      <p className="text-sm mt-6">Zadnja izmjena: 28.11.2025.</p>
    </section>
  );
};

export default Page;
