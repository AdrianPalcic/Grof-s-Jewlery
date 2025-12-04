import { Product } from "@/types/types";
import { GET_PRODUCTS_BY_TAG_W_CURSOR } from "./queries/getProductsByTagWithCursor";
import { shopifyGraphql } from "./shopify";

export async function getProductsByTagPaginated(
  first: number,
  tag: string,
  after?: string
): Promise<{
  products: Product[];
  hasNextPage: boolean;
  endCursor: string | null;
}> {
  const variables = {
    tag: tag,
    first,
    after: after || undefined, // ⬅ FIX: undefined, ne null
  };

  const data = await shopifyGraphql(GET_PRODUCTS_BY_TAG_W_CURSOR, variables);

  const edges = data?.products?.edges || [];
  const products = edges.map((edge: { node: Product }) => edge.node);
  const endCursor = edges.length > 0 ? edges[edges.length - 1].cursor : null;
  const hasNextPage = data?.products?.pageInfo?.hasNextPage;
  console.log(data.products.pageInfo);

  return {
    products,
    hasNextPage,
    endCursor,
  };
}
