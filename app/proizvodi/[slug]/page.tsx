import AddToCartBtn from "@/app/compontents/AddToCartBtn";
import AddToGiftBoxBtn from "@/app/compontents/AddToGiftBoxBtn";
import ButtonMain from "@/app/compontents/ButtonMain";
import ItemImages from "@/app/compontents/ItemImages";
import { getProductByHandle } from "@/lib/shopify/product";
import { ProductImageConnection } from "@/types/types";
import Link from "next/link";
import React from "react";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function Page({ params }: PageProps) {
  const { slug } = await params;

  const product = await getProductByHandle(slug);

  const images = product.images.edges.map((edge) => edge.node);
  console.log(images);

  return (
    <section className="px-4 sm:px-10 mx-auto mt-10 mb-20">
      <div className="flex flex-col-reverse lg:flex-row-reverse px-2 sm:px-10 items-center  gap-2 lg:gap-10 mx-auto mb-20  py-10">
        <div className="flex-[0.6]">
          <h2 className=" text-3xl  ">{product.title}</h2>
          <p className="text-2xl font-cormorant">
            {product.priceRange?.minVariantPrice?.amount}€
          </p>
          <div className="w-full h-[1px] bg-secondaryColor mt-2 "></div>

          <p className="text-xl smm:w-[90%] mt-2 mb-4">{product.description}</p>
          {product.availableForSale ? (
            <div className="flex flex-col sm:flex-row w-full items-center justify-between gap-3 mb-5">
              <AddToCartBtn product={product} />
              <AddToGiftBoxBtn product={product} />
            </div>
          ) : (
            <button className="btn w-full opacity-50 mb-2" disabled={true}>
              Rasprodano
            </button>
          )}
          <div className="w-full h-[1px] bg-secondaryColor mb-2 "></div>

          <h3 className="text-2xl">Za posebne prigode</h3>
          <p className="mb-4">
            Ovaj artikl možemo izraditi u većem broju primjeraka isključivo za
            vas.
          </p>
          <Link href="/kontakt">
            <ButtonMain text="Kontaktiraj nas za posebnu ponudu" />
          </Link>
        </div>

        <ItemImages images={images} />
      </div>
    </section>
  );
}
