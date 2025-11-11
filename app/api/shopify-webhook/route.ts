// /app/api/shopify-webhook/route.ts

interface Api {
  customAttributes: string;
  title: string;
}

import { Product } from "@/types/types";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json(); // Shopify šalje JSON
    const isPaid = body.financial_status === "paid";

    console.log("Webhook received:");
    console.log("Order ID:", body.id);
    console.log("Is paid?", isPaid);

    body.line_items.forEach((item: Api) => {
      if (item.customAttributes && item.customAttributes.length > 0) {
        console.log("🎁 Gift Box kupljen:", item.title);
      } else {
        console.log("🛒 Regularni proizvod:", item.title);
      }
    });

    return NextResponse.json({ received: true });
  } catch (err) {
    console.error("Failed to process webhook:", err);
    return NextResponse.json({ received: false }, { status: 500 });
  }
}
