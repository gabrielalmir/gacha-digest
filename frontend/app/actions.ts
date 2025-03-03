"use server"

import { createClient } from "@supabase/supabase-js"
import { headers } from "next/headers"
import Stripe from "stripe"

// Initialize Supabase client
const supabaseUrl = process.env.SUPABASE_URL!
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!
const supabase = createClient(supabaseUrl, supabaseKey)

// Initialize Stripe
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

export async function createSubscription(email: string) {
  try {
    // Check if user already exists
    const { data: existingUser } = await supabase.from("subscribers").select("*").eq("email", email).single()

    if (existingUser?.active) {
      return { error: "This email is already subscribed." }
    }

    // Create or update user in database
    if (!existingUser) {
      await supabase.from("subscribers").insert([
        {
          email,
          active: false,
        },
      ])
    }

    // Get host for success and cancel URLs
    const host = (await headers()).get("host") || "localhost:3000"
    const protocol = process.env.NODE_ENV === "production" ? "https" : "http"

    // Create Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "Gacha Digest - Monthly Subscription",
              description: "Weekly Zenless Zone Zero newsletter with exclusive content",
            },
            unit_amount: 100,
            recurring: {
              interval: "month",
            },
          },
          quantity: 1,
        },
      ],
      mode: "subscription",
      success_url: `${protocol}://${host}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${protocol}://${host}/`,
      customer_email: email,
      metadata: {
        email,
      },
    })

    return { url: session.url }
  } catch (error) {
    console.error("Subscription error:", error)
    return { error: "Failed to create subscription. Please try again." }
  }
}

