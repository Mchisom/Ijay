"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Loader2, CreditCard, CheckCircle, AlertCircle } from "lucide-react"

declare global {
  interface Window {
    Square: any
  }
}

export default function SquarePaymentForm() {
  const [payments, setPayments] = useState<any>(null)
  const [card, setCard] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState("")
  const [messageType, setMessageType] = useState<"success" | "error" | "">("")
  const [amount, setAmount] = useState("150.00")

  useEffect(() => {
    const initializeSquare = async () => {
      if (!window.Square) {
        const script = document.createElement("script")
        script.src = "https://sandbox.web.squarecdn.com/v1/square.js"
        script.async = true
        script.onload = () => initSquarePayments()
        document.head.appendChild(script)
      } else {
        initSquarePayments()
      }
    }

    const initSquarePayments = async () => {
      try {
        const payments = window.Square.payments(
          process.env.NEXT_PUBLIC_SQUARE_APPLICATION_ID,
          process.env.NEXT_PUBLIC_SQUARE_ENVIRONMENT || "sandbox",
        )
        setPayments(payments)

        const card = await payments.card()
        await card.attach("#card-container")
        setCard(card)
      } catch (error) {
        console.error("Failed to initialize Square payments:", error)
        setMessage("Failed to load payment form. Please refresh the page.")
        setMessageType("error")
      }
    }

    initializeSquare()
  }, [])

  const handlePayment = async () => {
    if (!card) {
      setMessage("Payment form not loaded. Please refresh the page.")
      setMessageType("error")
      return
    }

    setIsLoading(true)
    setMessage("")

    try {
      const result = await card.tokenize()

      if (result.status === "OK") {
        const response = await fetch("/api/process-payment", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            sourceId: result.token,
            amountMoney: {
              amount: Math.round(Number.parseFloat(amount) * 100), // Convert to cents
              currency: "USD",
            },
          }),
        })

        const data = await response.json()

        if (response.ok) {
          setMessage(`Payment successful! Transaction ID: ${data.payment.id}`)
          setMessageType("success")

          // Redirect to success page after 3 seconds
          setTimeout(() => {
            window.location.href = "/success"
          }, 3000)
        } else {
          setMessage(data.error || "Payment failed")
          setMessageType("error")
        }
      } else {
        setMessage(result.errors?.[0]?.message || "Payment failed")
        setMessageType("error")
      }
    } catch (error) {
      console.error("Payment error:", error)
      setMessage("Payment processing failed. Please try again.")
      setMessageType("error")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4 pt-24">
      {/* Navigation Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <a
            href="/"
            className="text-2xl font-black bg-gradient-to-r from-purple-400 to-rose-400 bg-clip-text text-transparent"
          >
            EraPivot
          </a>
          <div className="flex space-x-4">
            <a href="/" className="text-gray-300 hover:text-white transition-colors">
              ← Back to Home
            </a>
          </div>
        </div>
      </nav>
      <Card className="w-full max-w-md bg-gray-900 border-gray-700">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-rose-400 bg-clip-text text-transparent">
            EraPivot Summit Payment
          </CardTitle>
          <p className="text-gray-400">Complete your registration</p>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Amount Selection */}
          <div>
            <Label className="text-purple-300 font-semibold">Amount</Label>
            <div className="grid grid-cols-2 gap-4 mt-2">
              <Button
                variant={amount === "150.00" ? "default" : "outline"}
                onClick={() => setAmount("150.00")}
                className="bg-gradient-to-r from-purple-600 to-rose-600"
              >
                Early Bird - $150
              </Button>
              <Button
                variant={amount === "200.00" ? "default" : "outline"}
                onClick={() => setAmount("200.00")}
                className="border-gray-600"
              >
                Regular - $200
              </Button>
            </div>
          </div>

          {/* Payment Form */}
          <div>
            <Label className="text-purple-300 font-semibold">Payment Details</Label>
            <div
              id="card-container"
              className="mt-2 p-4 border border-gray-600 rounded-lg bg-gray-800"
              style={{ minHeight: "100px" }}
            />
          </div>

          {/* Test Card Info */}
          <div className="bg-blue-900/20 p-4 rounded-lg border border-blue-500/30">
            <h4 className="font-semibold text-blue-300 mb-2">Test Card Numbers:</h4>
            <div className="text-sm text-blue-200 space-y-1">
              <p>
                <strong>Visa:</strong> 4111 1111 1111 1111
              </p>
              <p>
                <strong>Mastercard:</strong> 5555 5555 5555 4444
              </p>
              <p>
                <strong>CVV:</strong> Any 3 digits
              </p>
              <p>
                <strong>Expiry:</strong> Any future date
              </p>
            </div>
          </div>

          {/* Messages */}
          {message && (
            <Alert
              className={
                messageType === "success" ? "border-green-500 bg-green-900/20" : "border-red-500 bg-red-900/20"
              }
            >
              {messageType === "success" ? (
                <CheckCircle className="h-4 w-4 text-green-400" />
              ) : (
                <AlertCircle className="h-4 w-4 text-red-400" />
              )}
              <AlertDescription className={messageType === "success" ? "text-green-300" : "text-red-300"}>
                {message}
              </AlertDescription>
            </Alert>
          )}

          {/* Payment Button */}
          <Button
            onClick={handlePayment}
            disabled={isLoading || !card}
            className="w-full bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 hover:from-purple-700 hover:via-pink-700 hover:to-rose-700 text-white py-3 text-lg font-bold"
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Processing...
              </>
            ) : (
              <>
                <CreditCard className="mr-2 h-5 w-5" />
                Pay ${amount}
              </>
            )}
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
