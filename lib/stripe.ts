import { loadStripe } from "@stripe/stripe-js";
import Stripe from "stripe";
const stripePromise = Promise <Stripe | null>
const getStripePromise = ()=>{
    const key = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
    if(!stripePromise && !!key){}
}
export default getStripePromise