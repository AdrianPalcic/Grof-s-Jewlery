import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

const WooCommerce = new WooCommerceRestApi({
  url: process.env.WC_URL,
  consumerKey: process.env.WC_CONSUMER_KEY,
  consumerSecret: process.env.WC_CONSUMER_SECRET,
  version: "wc/v3",
});

export async function GET() {
  try {
    const { data } = await WooCommerce.get("products", {
      per_page: 10,
    });

    const randomProducts = data.sort(() => 0.5 - Math.random()).slice(0, 5);

    return new Response(JSON.stringify(randomProducts), {
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
    return new Response(
      JSON.stringify({ error: "Failed to fetch featured products" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
