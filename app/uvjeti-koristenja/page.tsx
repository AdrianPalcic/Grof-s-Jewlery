import React from "react";

export const metadata = {
  title: "Grof's Jewelry | Uvjeti korištenja",
  description:
    "Pročitajte uvjete korištenja Grof's Jewlery webshopa – prava, obveze i informacije za korisnike.",
  openGraph: {
    title: "Grof's Jewelry | Uvjeti korištenja",
    description:
      "Pročitajte uvjete korištenja Grof's Jewlery webshopa – prava, obveze i informacije za korisnike.",
    url: "https://grofsjewelry.com",
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
    title: "Grof's Jewelry | Uvjeti korištenja",
    description:
      "Pročitajte uvjete korištenja Grof's Jewelry webshopa – prava, obveze i informacije za korisnike.",
    images: ["/hero-home.png"],
  },
};

const page = () => {
  return (
    <section className="max-w-4xl mx-auto p-6 sm:p-10">
      <h1 className="text-3xl font-bold mb-6">Uvjeti korištenja</h1>

      <p className="mb-4">
        Dobrodošli na naš webshop! Molimo vas da pažljivo pročitate ove uvjete
        korištenja prije nego što koristite naše usluge.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        1. Prihvaćanje uvjeta
      </h2>
      <p className="mb-4">
        Korištenjem ovog webshopa, prihvaćate ove uvjete korištenja i obvezujete
        se pridržavati ih. Ako se ne slažete s uvjetima, nemojte koristiti naš
        webshop.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        2. Korištenje webshopa
      </h2>
      <p className="mb-4">
        Slažete se da ćete webshop koristiti isključivo u legalne i dopuštene
        svrhe. Zabranjeno je:
      </p>
      <ul className="list-disc ml-6 mb-4">
        <li>Pristupati neovlaštenim dijelovima webshopa</li>
        <li>Krađa ili zlouporaba sadržaja i podataka</li>
        <li>Korištenje webshopa za ilegalne aktivnosti</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        3. Registracija i korisnički račun
      </h2>
      <p className="mb-4">
        Ako kreirate korisnički račun, odgovorni ste za očuvanje privatnosti
        vaših podataka i lozinke. Svi podaci koje pružite moraju biti točni i
        ažurni.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        4. Narudžbe i plaćanja
      </h2>
      <p className="mb-4">
        Svi proizvodi i cijene objavljeni na webshopu podložni su promjenama bez
        prethodne najave. Plaćanja se obrađuju putem sigurnih servisa (npr.
        Shopify Payments, PayPal). Cijene su u eurima i uključuju sve relevantne
        poreze ako nije drugačije naznačeno.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">5. Dostava i povrat</h2>
      <p className="mb-4">
        Dostava se vrši putem odabranih kurirskih službi. Rokovi i troškovi
        dostave navedeni su u procesu checkouta. Povrat robe je moguć prema
        našoj politici povrata koju možete pronaći na webshopu.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        6. Ograničenje odgovornosti
      </h2>
      <p className="mb-4">
        Trudimo se osigurati točnost informacija na webshopu, ali ne jamčimo da
        su svi podaci uvijek potpuni ili ažurni. Ne odgovaramo za bilo kakvu
        štetu nastalu korištenjem webshopa ili proizvoda kupljenih putem njega.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        7. Prava intelektualnog vlasništva
      </h2>
      <p className="mb-4">
        Svi sadržaji webshopa, uključujući tekstove, slike, logotipe i kod,
        zaštićeni su autorskim pravima i drugim pravima intelektualnog
        vlasništva. Zabranjeno je njihovo kopiranje ili distribucija bez našeg
        dopuštenja.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">8. Promjene uvjeta</h2>
      <p className="mb-4">
        Zadržavamo pravo izmjene ovih uvjeta korištenja u bilo kojem trenutku.
        Sve promjene bit će objavljene na ovoj stranici, a datum zadnje izmjene
        bit će naveden na dnu.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">9. Kontakt</h2>
      <p className="mb-4">
        Ako imate pitanja u vezi ovih uvjeta korištenja, slobodno nas
        kontaktirajte:
        <br />
        <strong>Email:</strong> grofsjewelry@gmail.com
      </p>

      <p className="text-sm mt-6">Zadnja izmjena: 19.10.2025.</p>
    </section>
  );
};

export default page;
