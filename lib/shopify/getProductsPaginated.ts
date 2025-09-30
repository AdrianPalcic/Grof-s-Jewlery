import { Product } from "@/types/types";
import { GET_PRODUCTS_BY_TAG_W_CURSOR } from "./queries/getProductsByTagWithCursor";
import { shopifyGraphql } from "./shopify";

export async function getProductsByTagPaginated(
  first: number,
  tag: string,
  after?: string
): Promise<{ products: Product[]; hasNextPage: boolean; endCursor?: string }> {
  const data = await shopifyGraphql(GET_PRODUCTS_BY_TAG_W_CURSOR, {
    tag,
    first,
    after,
  });

  if (!data) {
    console.error("Failed to fetch paginated products");
    return { products: [], hasNextPage: false };
  }

  const products = data.products.edges.map((edge: any) => edge.node);
  return {
    products,
    hasNextPage: data.products.pageInfo.hasNextPage,
    endCursor: data.products.pageInfo.endCursor,
  };
}
