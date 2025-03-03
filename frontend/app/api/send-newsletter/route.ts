import { NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"
import sgMail from "@sendgrid/mail"

// Initialize Supabase client
const supabaseUrl = process.env.SUPABASE_URL!
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!
const supabase = createClient(supabaseUrl, supabaseKey)

// Initialize SendGrid
sgMail.setApiKey(process.env.SENDGRID_API_KEY!)

export async function POST(req: Request) {
  try {
    // Verify API key for security
    const authHeader = req.headers.get("authorization")
    if (authHeader !== `Bearer ${process.env.NEWSLETTER_API_KEY}`) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { title, content } = await req.json()

    if (!title || !content) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Get all active subscribers
    const { data: subscribers, error } = await supabase.from("subscribers").select("email").eq("active", true)

    if (error) {
      console.error("Error fetching subscribers:", error)
      return NextResponse.json({ error: "Failed to fetch subscribers" }, { status: 500 })
    }

    if (!subscribers || subscribers.length === 0) {
      return NextResponse.json({ message: "No active subscribers found" }, { status: 200 })
    }

    // Store newsletter in database
    const { error: insertError } = await supabase.from("newsletters").insert([
      {
        title,
        content,
        sent_at: new Date().toISOString(),
      },
    ])

    if (insertError) {
      console.error("Error storing newsletter:", insertError)
    }

    // Send emails to all subscribers
    const emails = subscribers.map((sub) => sub.email)

    const msg = {
      to: process.env.SENDER_EMAIL!, // Using BCC for actual recipients
      from: {
        email: process.env.SENDER_EMAIL!,
        name: "Gacha Digest",
      },
      bcc: emails,
      subject: `Gacha Digest: ${title}`,
      html: content,
    }

    await sgMail.send(msg)

    return NextResponse.json({
      success: true,
      message: `Newsletter sent to ${subscribers.length} subscribers`,
    })
  } catch (error) {
    console.error("Error sending newsletter:", error)
    return NextResponse.json(
      {
        error: "Failed to send newsletter",
      },
      { status: 500 },
    )
  }
}

