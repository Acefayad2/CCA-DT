import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { firstName, lastName, email, phone, message } = body

    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    const scriptUrl = process.env.GOOGLE_SCRIPT_URL
    if (!scriptUrl) {
      console.error("GOOGLE_SCRIPT_URL is not set. Add it to .env.local")
      return NextResponse.json(
        { error: "Form is not configured. Please contact the site owner." },
        { status: 503 }
      )
    }

    const payload = {
      firstName: String(firstName).trim(),
      lastName: String(lastName).trim(),
      email: String(email).trim(),
      phone: phone ? String(phone).trim() : "",
      message: String(message).trim(),
      timestamp: new Date().toISOString(),
    }

    const res = await fetch(scriptUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })

    if (!res.ok) {
      console.error("Google Script error:", await res.text())
      return NextResponse.json(
        { error: "Failed to save submission. Please try again or contact Devyn at (301) 266-6365." },
        { status: 502 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error("Contact form error:", err)
    return NextResponse.json(
      { error: "Something went wrong. Please try again or contact Devyn at (301) 266-6365." },
      { status: 500 }
    )
  }
}
