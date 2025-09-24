import { Product } from "@/types/types";
import { shopifyGraphql } from "./shopify";
import { GET_COLLECTION_PRODUCTS } from "./queries/collectionProducts";

export async function getCollectionProducts({
  handle,
  first,
}: {
  handle: string;
  first: number;
}): Promise<Product[]> {
  const data = await shopifyGraphql(GET_COLLECTION_PRODUCTS, { handle, first });

  if (!data?.collection?.products?.edges) {
    console.error("Error fetching products by collection");
    return [];
  }

  // map edges → node
  return data.collection.products.edges.map(
    (edge: { node: Product }) => edge.node
  );
}
