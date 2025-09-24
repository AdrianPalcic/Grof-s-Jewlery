export async function shopifyGraphql(
  query: string,
  variables: Record<string, any> = {}
) {
  const endpoint = process.env.SHOPIFY_STORE_URL!;
  const token = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN!;

  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": token,
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    });

    const json = await res.json();

    if (json.errors) {
      console.error("Shopify GraphQL Error:", json.errors);
      throw new Error("Shopify query failed");
    }

    return json.data;
  } catch (err) {
    console.error("Shopify fetch failed:", err);
    throw err;
  }
}
