// app/api/wc-categories/route.js
import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

const WooCommerce = new WooCommerceRestApi({
  url: process.env.WC_URL,
  consumerKey: process.env.WC_CONSUMER_KEY,
  consumerSecret: process.env.WC_CONSUMER_SECRET,
  version: "wc/v3",
});

export async function GET() {
  try {
    let allCategories = [];
    let page = 1;
    let fetched = [];

    do {
      const { data } = await WooCommerce.get("products/categories", {
        per_page: 100,
        page,
      });
      fetched = data;
      allCategories.push(...fetched);
      page++;
    } while (fetched.length === 100); // ako ima još, nastavi fetchati

    return new Response(JSON.stringify(allCategories), {
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
      JSON.stringify({ error: "Failed to fetch categories" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
