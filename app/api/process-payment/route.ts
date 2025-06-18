import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { sourceId, amountMoney } = await request.json()

    const accessToken = process.env.SQUARE_ACCESS_TOKEN
    const environment = process.env.SQUARE_ENVIRONMENT || "sandbox"

    if (!accessToken) {
      return NextResponse.json({ error: "Square access token not configured" }, { status: 500 })
    }

    // Use sandbox URL for testing
    const baseUrl = environment === "sandbox" ? "https://connect.squareupsandbox.com" : "https://connect.squareup.com"

    const response = await fetch(`${baseUrl}/v2/payments`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
        "Square-Version": "2023-10-18",
      },
      body: JSON.stringify({
        source_id: sourceId,
        amount_money: amountMoney,
        idempotency_key: `${Date.now()}-${Math.random()}`,
      }),
    })

    const data = await response.json()

    if (response.ok) {
      return NextResponse.json({
        success: true,
        payment: data.payment,
        message: "Payment processed successfully!",
      })
    } else {
      console.error("Square API Error:", data)
      return NextResponse.json(
        {
          error: data.errors?.[0]?.detail || "Payment failed",
        },
        { status: 400 },
      )
    }
  } catch (error) {
    console.error("Payment processing error:", error)
    return NextResponse.json(
      {
        error: "Internal server error",
      },
      { status: 500 },
    )
  }
}
