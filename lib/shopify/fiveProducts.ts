import { Product } from "@/types/types";
import { GET_PRODUCTS } from "./queries/products";
import { shopifyGraphql } from "./shopify";

export async function getFiveProducts(count: number): Promise<Product[]> {
  const data = await shopifyGraphql(GET_PRODUCTS, { count });

  if (!data) {
    console.error("Error inside getFiveProducts");
  }

  return data.products.edges.map((edge: { node: Product }) => edge.node);
}
