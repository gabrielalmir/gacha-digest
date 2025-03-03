import { createClient } from "@supabase/supabase-js";
import Link from "next/link";
import { redirect } from "next/navigation";
import Stripe from "stripe";

import { Button } from "@/components/ui/button";
import { use } from "react";

// Initialize Supabase client
const supabaseUrl = process.env.SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

// Initialize Stripe
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

interface SuccessPageParams {
  searchParams: Promise<{
    session_id?: string;
  }>;
}

export default async function SuccessPage({
  searchParams,
}: Readonly<SuccessPageParams>) {
  const sessionId = use(searchParams).session_id;

  if (!sessionId) {
    redirect("/");
  }

  try {
    // Retrieve the checkout session to get customer information
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    const email = session.customer_email || session.metadata?.email;

    if (email) {
      // Update subscriber status in database
      await supabase
        .from("subscribers")
        .update({ active: true, stripe_customer_id: session.customer })
        .eq("email", email);
    }
  } catch (error) {
    console.error("Error processing successful subscription:", error);
  }

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1 flex items-center justify-center p-6">
        <div className="max-w-md mx-auto text-center space-y-6">
          <div className="rounded-full bg-green-100 p-3 w-16 h-16 mx-auto flex items-center justify-center dark:bg-green-900">
            <svg
              className="h-8 w-8 text-green-600 dark:text-green-50"
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold">Subscription Successful!</h1>
          <p className="text-gray-500 dark:text-gray-400">
            Thank you for subscribing to Gacha Digest. You will start receiving
            our weekly newsletter with exclusive Zenless Zone Zero content.
          </p>
          <div className="bg-gray-50 p-4 rounded-lg dark:bg-gray-800">
            <h2 className="font-medium mb-2">What's Next?</h2>
            <ul className="text-sm text-gray-500 space-y-2 text-left dark:text-gray-400">
              <li className="flex items-start">
                <svg
                  className="h-5 w-5 mr-2 text-green-500 shrink-0"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>Check your email for a welcome message</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="h-5 w-5 mr-2 text-green-500 shrink-0"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>
                  Your first newsletter will arrive within the next week
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  className="h-5 w-5 mr-2 text-green-500 shrink-0"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>
                  Add our email to your contacts to ensure you receive all
                  newsletters
                </span>
              </li>
            </ul>
          </div>
          <Button asChild>
            <Link href="/">Return to Home</Link>
          </Button>
        </div>
      </main>
      <footer className="py-6 w-full border-t">
        <div className="container px-4 md:px-6">
          <p className="text-xs text-center text-gray-500 dark:text-gray-400">
            © 2025 Gacha Digest. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
