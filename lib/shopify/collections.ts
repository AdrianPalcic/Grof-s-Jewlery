import { shopifyGraphql } from "./shopify";
import { GET_ALL_COLLECTIONS } from "./queries/collection";
import { Collection } from "@/types/types";

export async function getAllCollections(limit: number): Promise<Collection[]> {
  const data = await shopifyGraphql(GET_ALL_COLLECTIONS, { first: limit });

  if (!data) {
    console.error("Error in getAllCollections");
  }

  return data.collections.edges.map((edge: { node: Collection }) => edge.node);
}
