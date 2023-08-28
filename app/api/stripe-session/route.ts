import Stripe from "stripe";
import { NextRequest, NextResponse } from "next/server";

const key = process.env.STRIPE_SECRET_KEY || "";
const stripe = new Stripe(key, {
  apiVersion: "2022-11-15"
})

export async function POST(request: NextRequest) {
  const body = await request.json()
  console.log(body)
  try {
    if (body.length > 0) {

      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create({
        submit_type: "pay",
        payment_method_types: ["card"],
        billing_address_collection: "auto",
        shipping_options: [{ shipping_rate: "shr_1NeaFuDJGlI9OKFMZLy7sDa5" }, { shipping_rate: "shr_1NeaHODJGlI9OKFMpv9dnpNS" }],
        mode: 'payment',
        line_items: body.map((item: any) => {
          return {
            price_data: {
              currency: "pkr",
              product_data: {
                name: item.name
              }
            },
            unit_amount:item.price*100,
            quantity:1,
            adjustable_quantity: {
              enabled: true,
              minimum: 1,
              maximum: 10,
            },
          }
        }),
        phone_number_collection: {
          enabled: true,
        },
        success_url: `${request.headers.get(origin)}/?success=true`,
        cancel_url: `${request.headers.get(origin)}/?canceled=true`,
      });
      return NextResponse.json({ session })
      // res.redirect(303, session.url);
    } else {
      return NextResponse.json({ messege: "No Data Found" })
    }
  } catch (err: any) {
    return NextResponse.json(err.message)
    // res.status(err.statusCode || 500).json(err.message);
  }
}