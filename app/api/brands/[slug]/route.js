import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

const WooCommerce = new WooCommerceRestApi({
  url: process.env.WC_URL,
  consumerKey: process.env.WC_CONSUMER_KEY,
  consumerSecret: process.env.WC_CONSUMER_SECRET,
  version: "wc/v3",
});

export async function GET(req) {
  const url = new URL(req.url);
  const slug = url.pathname.split("/").pop(); // zadnji segment

  if (!slug) {
    return new Response(JSON.stringify({ error: "Slug not provided" }), {
      status: 400,
    });
  }

  try {
    const { data } = await WooCommerce.get("products/brands", {
      per_page: 1,
      slug: slug,
    });

    const brand = data[0];

    return new Response(JSON.stringify(brand), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
        "Access-Control-Allow-Headers": "Authorization, Content-Type",
        "Cache-Control": "public, s-maxage=3600",
      },
    });
  } catch (error) {
    console.error("API Route Error:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch brand" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
