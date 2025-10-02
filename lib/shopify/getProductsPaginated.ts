import { Product } from "@/types/types";
import { GET_PRODUCTS_BY_TAG_W_CURSOR } from "./queries/getProductsByTagWithCursor";
import { shopifyGraphql } from "./shopify";

export async function getProductsByTagPaginated(
  first: number,
  tag: string,
  after?: string
): Promise<{ products: Product[]; hasNextPage: boolean; endCursor?: string }> {
  const variables = {
    tag: `tag:"${tag}"`,
    first,
    after,
  };

  const data = await shopifyGraphql(GET_PRODUCTS_BY_TAG_W_CURSOR, variables);

  if (!data) {
    console.error("Failed to fetch paginated products");
    return { products: [], hasNextPage: false };
  }

  const edges = data.products.edges;
  const products = edges.map((edge: { node: Product }) => edge.node);
  const endCursor = edges.length > 0 ? edges[edges.length - 1].cursor : null;

  return {
    products,
    hasNextPage: data.products.pageInfo.hasNextPage,
    endCursor,
  };
}
