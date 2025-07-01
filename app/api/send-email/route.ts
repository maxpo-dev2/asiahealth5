// app/api/send-email/route.ts

import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

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
    await resend.emails.send({
      from: "GMEC Registration <info@asiahealthfive.com>", // ✅ Updated sender
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
        <p><strong>Message:</strong> ${message}</p>
      `,
    })

    return NextResponse.json({ status: "ok" })
  } catch (err) {
    console.error("Email error:", err)
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
  }
}
