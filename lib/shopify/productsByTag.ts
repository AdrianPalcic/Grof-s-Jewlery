import { Product } from "@/types/types";
import { shopifyGraphql } from "./shopify";
import { GET_PRODUCTS_BY_TAG } from "./queries/productsByTag";

export async function getProductsByTag(
  first: number,
  tag: string
): Promise<Product[]> {
  const data = await shopifyGraphql(GET_PRODUCTS_BY_TAG, { tag, first });

  if (!data) {
    console.log("Ne mogu dohvatit podatke - Products by tag");
    return [];
  }
  return data.products.edges.map((edge: { node: Product }) => edge.node);
}
