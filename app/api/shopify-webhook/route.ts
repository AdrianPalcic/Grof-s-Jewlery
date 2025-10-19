// /app/api/shopify-webhook/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json(); // Shopify šalje JSON
    // financial_status može biti: "paid", "pending", "authorized", itd.
    const isPaid = body.financial_status === "paid";

    console.log("Webhook received:");
    console.log("Order ID:", body.id);
    console.log("Is paid?", isPaid);

    return NextResponse.json({ received: true });
  } catch (err) {
    console.error("Failed to process webhook:", err);
    return NextResponse.json({ received: false }, { status: 500 });
  }
}
