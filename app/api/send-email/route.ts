import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

const GOOGLE_SCRIPT_WEBHOOK_URL = process.env.GOOGLE_SCRIPT_WEBHOOK_URL

export async function POST(req: Request) {
  const data = await req.json()
  const {
    name,
    email,
    phone,
    company,
    jobTitle,
    industry,
    requestType,
    message,
    type,
  } = data

  try {
    // Send email
    await resend.emails.send({
      from: "GMEC Registration <info@asiahealthfive.com>",
      to: "avalasandeep89@gmail.com",
      subject: `New ${type} Registration`,
      html: `
        <h2>New ${type} Registration</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Job Title:</strong> ${jobTitle}</p>
        <p><strong>Industry:</strong> ${industry}</p>
        <p><strong>Request Type:</strong> ${requestType}</p>
        <p><strong>Message:</strong> ${message || "N/A"}</p>
      `,
    })

    // Send to Google Sheet
    if (GOOGLE_SCRIPT_WEBHOOK_URL) {
      // console.log("Sending to Google Sheet...")
      await fetch(GOOGLE_SCRIPT_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
    } else {
      console.warn("GOOGLE_SCRIPT_WEBHOOK_URL is not defined")
    }

    return NextResponse.json({ status: "ok" })
  } catch (err) {
    console.error("Error submitting registration:", err)
    return NextResponse.json({ error: "Failed to process registration" }, { status: 500 })
  }
}
