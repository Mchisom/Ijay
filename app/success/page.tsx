"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Calendar, MapPin, Mail, ArrowRight } from "lucide-react"

export default function PaymentSuccess() {
  return (
    <div className="min-h-screen bg-black text-white">
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

      {/* Success Content */}
      <div className="flex items-center justify-center min-h-screen p-4 pt-24">
        <Card className="w-full max-w-2xl bg-gradient-to-br from-green-900/20 to-emerald-900/20 border-green-500/30">
          <CardHeader className="text-center pb-8">
            <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full mx-auto mb-6 flex items-center justify-center">
              <CheckCircle className="h-10 w-10 text-white" />
            </div>
            <CardTitle className="text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              Payment Successful!
            </CardTitle>
            <p className="text-xl text-gray-300 mt-4">Welcome to the EraPivot Summit 2026</p>
          </CardHeader>

          <CardContent className="space-y-8">
            {/* Event Details */}
            <div className="bg-gradient-to-r from-purple-900/30 to-rose-900/30 p-8 rounded-2xl border border-purple-500/30">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Your Summit Details</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-center space-x-4">
                  <Calendar className="w-6 h-6 text-purple-400" />
                  <div>
                    <p className="font-semibold text-white">Date</p>
                    <p className="text-gray-300">May 15-16, 2026</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="w-6 h-6 text-rose-400" />
                  <div>
                    <p className="font-semibold text-white">Location</p>
                    <p className="text-gray-300">Atlanta, GA</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Next Steps */}
            <div className="bg-blue-900/20 p-6 rounded-xl border border-blue-500/30">
              <h4 className="font-bold text-blue-300 mb-4 flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                What Happens Next?
              </h4>
              <ul className="space-y-2 text-blue-200">
                <li>• Confirmation email sent to your inbox</li>
                <li>• Summit details and agenda coming soon</li>
                <li>• Access to exclusive pre-summit content</li>
                <li>• Join our private community group</li>
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/">
                <Button className="bg-gradient-to-r from-purple-600 to-rose-600 hover:from-purple-700 hover:to-rose-700 px-8 py-3">
                  <ArrowRight className="mr-2 h-5 w-5" />
                  Back to Home
                </Button>
              </a>
              <Button variant="outline" className="border-gray-600 text-gray-300 hover:text-white px-8 py-3">
                Download Receipt
              </Button>
            </div>

            {/* Contact Info */}
            <div className="text-center pt-6 border-t border-gray-700">
              <p className="text-gray-400">
                Questions? Contact us at{" "}
                <a href="mailto:support@erapivot.com" className="text-purple-400 hover:text-purple-300">
                  support@erapivot.com
                </a>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
