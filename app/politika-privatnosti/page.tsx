import React from "react";

export const metadata = {
  title: "Grof's Jewelry | Politika privatnosti",
  description:
    "Pročitajte našu politiku privatnosti i saznajte kako Grof's Jewelry prikuplja, koristi i štiti vaše podatke.",
  openGraph: {
    title: "Grof's Jewelry | Politika privatnosti",
    description:
      "Pročitajte našu politiku privatnosti i saznajte kako Grof's Jewelry prikuplja, koristi i štiti vaše podatke.",
    url: "https://grof-s-Jewelry.vercel.app/politika-privatnosti",
    siteName: "Grof's Jewelry",
    images: [{ url: "/hero-home.png", width: 1200, height: 630 }],
    locale: "hr_HR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grof's Jewelry | Politika privatnosti",
    description:
      "Pročitajte našu politiku privatnosti i saznajte kako Grof's Jewelry prikuplja, koristi i štiti vaše podatke.",
    images: ["/hero-home.png"],
  },
};

const PrivacyPolicyPage = () => {
  return (
    <section className="max-w-4xl mx-auto p-6 sm:p-10">
      <h1 className="text-3xl font-bold mb-6">Politika privatnosti</h1>

      <p className="mb-4">
        Vaša privatnost nam je važna. Ova politika privatnosti objašnjava kako
        prikupljamo, koristimo i štitimo vaše podatke kada koristite naš
        webshop.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        1. Prikupljanje podataka
      </h2>
      <p className="mb-4">
        Prikupljamo informacije koje nam dobrovoljno dajete, uključujući:
      </p>
      <ul className="list-disc ml-6 mb-4">
        <li>Osobne podatke (ime, prezime, e-mail, adresa za dostavu)</li>
        <li>Podatke o plaćanju (npr. putem Shopify Payments)</li>
        <li>Podatke o narudžbama i povijest kupnje</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        2. Korištenje podataka
      </h2>
      <p className="mb-4">Vaše podatke koristimo kako bismo:</p>
      <ul className="list-disc ml-6 mb-4">
        <li>Obradili narudžbe i izvršili dostavu</li>
        <li>Komunicirali s vama u vezi narudžbi i promocija</li>
        <li>Poboljšali naš webshop i korisničko iskustvo</li>
        <li>Pratili statistiku i analitiku posjeta</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        3. Kolačići i praćenje
      </h2>
      <p className="mb-4">
        Koristimo kolačiće i slične tehnologije kako bismo poboljšali
        funkcionalnost weba i analizirali promet. Možete kontrolirati postavke
        kolačića putem vašeg preglednika.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        4. Dijeljenje podataka s trećim stranama
      </h2>
      <p className="mb-4">
        Ne prodajemo vaše podatke. Podatke možemo dijeliti s:
      </p>
      <ul className="list-disc ml-6 mb-4">
        <li>Servisima za obradu plaćanja (Shopify Payments, PayPal itd.)</li>
        <li>Dostavnim službama radi izvršenja narudžbi</li>
        <li>
          Analitičkim alatima i marketing platformama (Google Analytics, Shopify
          apps)
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        5. Sigurnost podataka
      </h2>
      <p className="mb-4">
        Poduzimamo odgovarajuće tehničke i organizacijske mjere kako bismo
        zaštitili vaše podatke od neovlaštenog pristupa, izmjene ili gubitka.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">6. Vaša prava</h2>
      <p className="mb-4">
        Imate pravo zatražiti pristup, ispravak ili brisanje svojih osobnih
        podataka. Također možete se odjaviti s marketinških obavijesti u bilo
        kojem trenutku.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">7. Kontakt</h2>
      <p className="mb-4">
        Ako imate pitanja u vezi ove politike privatnosti, kontaktirajte nas na:
        <br />
        <strong>Email:</strong> grofsJewelry@gmail.com
      </p>

      <p className="text-sm mt-6">Zadnja izmjena: 19.10.2025.</p>
    </section>
  );
};

export default PrivacyPolicyPage;
