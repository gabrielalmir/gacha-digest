import { createClient } from "@supabase/supabase-js"
import { headers } from "next/headers"
import { NextResponse } from "next/server"
import Stripe from "stripe"

// Initialize Supabase client
const supabaseUrl = process.env.SUPABASE_URL!
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!
const supabase = createClient(supabaseUrl, supabaseKey)

// Initialize Stripe
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!

export async function POST(req: Request) {
  const body = await req.text()
  const signature = (await headers()).get("stripe-signature") as string

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret)
  } catch (err) {
    return NextResponse.json(
      { error: `Webhook Error: ${err instanceof Error ? err.message : "Unknown error"}` },
      { status: 400 },
    )
  }

  // Handle the event
  switch (event.type) {
    case "customer.subscription.created":
    case "customer.subscription.updated":
      const subscription = event.data.object as Stripe.Subscription

      if (subscription.status === "active") {
        const customerId = subscription.customer as string

        // Get customer to find email
        const customer = await stripe.customers.retrieve(customerId)

        if (customer && !customer.deleted && customer.email) {
          // Update subscriber status in database
          await supabase
            .from("subscribers")
            .update({
              active: true,
              stripe_customer_id: customerId,
              stripe_subscription_id: subscription.id,
              subscription_status: subscription.status,
              current_period_end: new Date(subscription.current_period_end * 1000).toISOString(),
            })
            .eq("email", customer.email)
        }
      }
      break

    case "customer.subscription.deleted":
      const canceledSubscription = event.data.object as Stripe.Subscription
      const customerId = canceledSubscription.customer as string

      // Get customer to find email
      const customer = await stripe.customers.retrieve(customerId)

      if (customer && !customer.deleted && customer.email) {
        // Update subscriber status in database
        await supabase
          .from("subscribers")
          .update({
            active: false,
            subscription_status: canceledSubscription.status,
          })
          .eq("email", customer.email)
      }
      break
  }

  return NextResponse.json({ received: true })
}

