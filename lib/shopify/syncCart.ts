import { Product } from "@/types/types";
import { shopifyGraphql } from "./shopify";
import { GET_PRODUCTS_BY_ID } from "./queries/getProductsById";

export async function syncCart(ids: string[]): Promise<Product[]> {
  const data = await shopifyGraphql(GET_PRODUCTS_BY_ID, { ids });
  if (!data) {
    console.error("Failed to fetch items for cart");
    return [];
  }

  return data.nodes
    .filter((node: Product | null): node is Product => node !== null)
    .map((node: Product) => node);
}
