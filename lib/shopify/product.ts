import { Product } from "@/types/types";
import { shopifyGraphql } from "./shopify";
import { GET_PRODUCT_BY_HANDLE } from "./queries/product";

export async function getProductByHandle(handle: string): Promise<Product> {
  const data = await shopifyGraphql(GET_PRODUCT_BY_HANDLE, { handle });

  if (!data) {
    console.error("Failed to fetch product by handle");
  }

  return data.product;
}
