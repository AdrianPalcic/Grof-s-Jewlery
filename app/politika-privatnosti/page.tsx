import React from "react";

export const metadata = {
  title: "Grof's jewelry | Politika privatnosti",
  description:
    "Pročitajte našu politiku privatnosti i saznajte kako Grof's jewelry prikuplja, koristi i štiti vaše podatke.",
  openGraph: {
    title: "Grof's jewelry | Politika privatnosti",
    description:
      "Pročitajte našu politiku privatnosti i saznajte kako Grof's jewelry prikuplja, koristi i štiti vaše podatke.",
    url: "https://grofsjewelry.com/politika-privatnosti",
    siteName: "Grof's jewelry",
    images: [{ url: "/hero-home.png", width: 1200, height: 630 }],
    locale: "hr_HR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grof's jewelry | Politika privatnosti",
    description:
      "Pročitajte našu politiku privatnosti i saznajte kako Grof's jewelry prikuplja, koristi i štiti vaše podatke.",
    images: ["/hero-home.png"],
  },
};

const PrivacyPolicyPage = () => {
  return (
    <section className="max-w-4xl mx-auto p-6 sm:p-10 font-cinzel">
      <h1 className="text-3xl font-bold mb-6">Politika privatnosti</h1>

      <p className="mb-4">
        Ova Politika privatnosti opisuje kako Grof's Jewelry prikuplja, koristi
        i štiti vaše osobne podatke u skladu s Općom uredbom o zaštiti podataka
        (GDPR) i Zakonom o provedbi Opće uredbe o zaštiti podataka.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        1. Koje podatke prikupljamo
      </h2>
      <p className="mb-4">Prilikom korištenja webshopa prikupljamo:</p>

      <ul className="list-disc ml-6 mb-4 font-cinzel">
        <li>Ime i prezime</li>
        <li>Adresu dostave i adresu za naplatu</li>
        <li>Email adresu</li>
        <li>Broj telefona</li>
        <li>Podatke o narudžbi (proizvodi, količine, cijena)</li>
        <li>
          Podatke o plaćanju — napomena: Grof’s Jewelry ne prikuplja niti ne
          obrađuje podatke o karticama, sve se obrađuje putem sigurnih payment
          procesora integriranih u Shopify.
        </li>
        <li>
          Tehničke podatke poput IP adrese, tipa uređaja, preglednika, kolačića
          te informacije o korištenju stranice (prikuplja Shopify).
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        2. Zašto prikupljamo podatke
      </h2>
      <p className="mb-4">Podatke obrađujemo radi:</p>

      <ul className="list-disc ml-6 mb-4">
        <li>obrada narudžbi i dostave proizvoda,</li>
        <li>slanja potvrda i komunikacije s kupcima,</li>
        <li>poboljšanja rada webshopa i korisničkog iskustva,</li>
        <li>računovodstvenih i zakonskih obveza obrta,</li>
        <li>sigurnosti sustava i prevencije zloupotreba.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        3. Kolačići (Cookies)
      </h2>

      <p className="mb-4">
        Grof's Jewelry koristi kolačiće za različite svrhe:
      </p>

      <ul className="list-disc ml-6 mb-4">
        <li>
          <strong>Neobavezni kolačići (Essential):</strong> Potrebni za
          sigurnost i funkcioniranje webshopa — primjenjuju se automatski bez
          vašeg pristanka.
        </li>
        <li>
          <strong>Analitički kolačići:</strong> Koriste se samo nakon vašeg
          eksplicitnog pristanka za analizu korištenja stranice.
        </li>
        <li>
          <strong>Marketinški kolačići:</strong> Koriste se samo nakon vašeg
          eksplicitnog pristanka za personalizirane oglase i retargeting.
        </li>
      </ul>

      <p className="mb-4">
        <strong>Važno:</strong> Shopify koristi kolačiće za funkcioniranje
        webshopa. Samo Shopify kolačići potrebni za sigurnost i plaćanje
        postavljaju se bez pristanka. Svi ostali kolačići zahtijevaju vašu
        eksplicitnu suglasnost.
      </p>

      <p className="mb-4">
        Možete ponovno prikazati i konfigurirati banner za pristanak u bilo
        kojem trenutku ili direktno u postavkama vašeg preglednika.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        4. Dijeljenje podataka s trećim stranama
      </h2>

      <p className="mb-4">Podatke dijelimo isključivo s:</p>

      <ul className="list-disc ml-6 mb-4">
        <li>Shopify Inc. (platforma webshopa),</li>
        <li>procesorima plaćanja (Stripe, PayPal i dr.),</li>
        <li>dostavnim službama radi isporuke narudžbi,</li>
        <li>računovodstvom zbog zakonskih obveza.</li>
      </ul>

      <p className="mb-4">
        Ne prodajemo osobne podatke i ne dijelimo ih u marketinške svrhe.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        5. Sigurnost podataka
      </h2>
      <p className="mb-4">
        Primjenjujemo tehničke i organizacijske mjere zaštite kako bismo
        spriječili neovlašteni pristup, gubitak ili zloupotrebu podataka.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">6. Prava korisnika</h2>

      <p className="mb-4">Kupac ima pravo:</p>

      <ul className="list-disc ml-6 mb-4">
        <li>zatražiti pristup svojim osobnim podacima,</li>
        <li>zatražiti ispravak netočnih podataka,</li>
        <li>zatražiti brisanje podataka (ako to nije protivno zakonu),</li>
        <li>zatražiti ograničenje obrade,</li>
        <li>zatražiti prijenos podataka,</li>
        <li>podnijeti prigovor na obradu podataka.</li>
      </ul>

      <p className="mb-4">
        Za ostvarivanje prava možete nas kontaktirati na:
        <br />
        <strong>Email:</strong> grofsjewelry@gmail.com
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        7. Rješavanje sporova
      </h2>
      <p className="mb-4">
        Kupci mogu podnijeti pritužbe putem platforme za online rješavanje
        sporova:{" "}
        <a
          href="https://ec.europa.eu/consumers/odr/"
          className="text-blue-600 underline"
        >
          https://ec.europa.eu/consumers/odr/
        </a>
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        8. Kontakt za zaštitu podataka
      </h2>
      <p className="mb-4">
        Za sva pitanja vezana uz privatnost i zaštitu podataka kontaktirajte
        nas:
        <br />
        <strong>Email:</strong> grofsjewelry@gmail.com
      </p>

      <p className="text-sm mt-6">Zadnja izmjena: 28.11.2025.</p>
    </section>
  );
};

export default PrivacyPolicyPage;
