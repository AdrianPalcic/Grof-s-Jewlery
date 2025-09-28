export async function shopifyGraphql(
  query: string,
  variables: Record<string, unknown> = {}
) {
  const endpoint =
    typeof window === "undefined"
      ? process.env.SHOPIFY_STORE_URL
      : process.env.NEXT_PUBLIC_SHOPIFY_STORE_URL;

  const token =
    typeof window === "undefined"
      ? process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN
      : process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN;

  if (!endpoint || !token)
    throw new Error("Shopify endpoint or token not defined");

  const res = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": token!,
    },
    body: JSON.stringify({ query, variables }),
  });

  const json = await res.json();
  if (json.errors) {
    console.error("Shopify GraphQL Error:", json.errors);
    throw new Error("Shopify query failed");
  }
  return json.data;
}
