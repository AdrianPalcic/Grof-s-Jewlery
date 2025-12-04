import { getProductByHandle } from "@/lib/shopify/product";
import AddToCartBtn from "@/app/compontents/AddToCartBtn";
import AddToGiftBoxBtn from "@/app/compontents/AddToGiftBoxBtn";
import ItemImages from "@/app/compontents/ItemImages";

import { Metadata } from "next";

type PageProps = {
  params: {
    slug: string;
  };
};

// Metadata za SEO i OG
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const product = await getProductByHandle(params.slug);
  const ogImage = product.images.edges[0]?.node.url || "/hero-home.png";

  return {
    title: `Grof's Jewelry | ${product.title}`,
    description:
      product.description || "Pregledajte naš unikatni nakit i poklone.",
    openGraph: {
      title: `Grof's Jewelry | ${product.title}`,
      description:
        product.description || "Pregledajte naš unikatni nakit i poklone.",
      url: `https://grofsjewelry.com/proizvodi/${params.slug}`,
      siteName: "Grof's Jewelry",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
        },
      ],
      locale: "hr_HR",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `Grof's Jewelry | ${product.title}`,
      description:
        product.description || "Pregledajte naš unikatni nakit i poklone.",
      images: [ogImage],
    },
  };
}

// Page komponenta
export default async function Page({ params }: PageProps) {
  const product = await getProductByHandle(params.slug);
  const images = product.images.edges.map((edge) => edge.node);

  return (
    <section className="px-4 sm:px-10 mx-auto mt-10 mb-20">
      <div className="flex flex-col-reverse lg:flex-row-reverse px-2 sm:px-10 items-center gap-2 lg:gap-10 mx-auto mb-20 py-10">
        {/* Info */}
        <div className="flex-[0.6]">
          <h2 className="text-3xl">{product.title}</h2>
          <p className="text-2xl font-cormorant">
            {product.priceRange?.minVariantPrice?.amount}0€
          </p>
          <div className="w-full h-[1px] bg-secondaryColor mt-2"></div>

          <p className="text-xl smm:w-[90%] mt-2 mb-4">{product.description}</p>

          {product.availableForSale ? (
            <div className="flex flex-col sm:flex-row w-full items-center justify-between gap-3 mb-5">
              <AddToCartBtn product={product} />
              <AddToGiftBoxBtn product={product} />
            </div>
          ) : (
            <button className="btn w-full opacity-50 mb-2" disabled>
              Rasprodano
            </button>
          )}

          <div className="w-full h-[1px] bg-secondaryColor mb-2"></div>
        </div>

        {/* Slike */}
        <ItemImages images={images} />
      </div>
    </section>
  );
}
