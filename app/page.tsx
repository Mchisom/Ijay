"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Crown,
  Sparkles,
  Calendar,
  MapPin,
  Clock,
  Users,
  Zap,
  ArrowRight,
  Target,
  Heart,
  Star,
  CircleCheckBig,
  CircleAlert,
  Instagram,
  Youtube,
  Facebook,
} from "lucide-react"

export default function EraPivotLanding() {
  const [communityForm, setCommunityForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    industry: "",
    challenge: "",
  })

  const [registrationForm, setRegistrationForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    cityState: "",
    primaryTrack: "",
    secondaryTrack: "",
    outcome: "",
  })

  const [newsletterEmail, setNewsletterEmail] = useState("")

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden scroll-smooth">
      {/* Navigation Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-black bg-gradient-to-r from-purple-400 to-rose-400 bg-clip-text text-transparent">
            EraPivot
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#community-signup" className="text-gray-300 hover:text-white transition-colors">
              Join Movement
            </a>
            <a href="#ticket-registration" className="text-gray-300 hover:text-white transition-colors">
              Register
            </a>
            <a href="/payment" className="text-amber-400 hover:text-amber-300 transition-colors">
              Complete Payment
            </a>
          </div>
        </div>
      </nav>

      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-r from-rose-500/15 to-amber-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-black to-rose-900/30"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          {/* Summit Badge */}
          <div className="mb-8 inline-flex items-center">
            <Badge className="bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 text-white px-8 py-3 text-sm font-bold tracking-wider shadow-2xl shadow-purple-500/25 animate-pulse">
              <Crown className="w-4 h-4 mr-2" />
              MAY 2026 SUMMIT
              <Sparkles className="w-4 h-4 ml-2" />
            </Badge>
          </div>

          {/* Main Headline */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 leading-none">
            <span className="block bg-gradient-to-r from-white via-purple-200 to-rose-200 bg-clip-text text-transparent">
              This Is Your
            </span>
            <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 bg-clip-text text-transparent animate-pulse">
              Pivot Point.
            </span>
          </h1>

          {/* Subtitle */}
          <div className="mb-6 relative">
            <p className="text-2xl md:text-3xl text-gray-300 font-light tracking-wide">
              Welcome to{" "}
              <span className="font-bold bg-gradient-to-r from-purple-400 to-rose-400 bg-clip-text text-transparent">
                EraPivot
              </span>{" "}
              – Where Mindset Shifts Spark Life Shifts.
            </p>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-rose-600/20 blur-xl -z-10"></div>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-400 mb-4 max-w-4xl mx-auto font-medium">
            Leave the online gurus—come learn from verified industry experts who walk the talk.
          </p>
          <p className="text-base md:text-lg text-gray-500 mb-16 max-w-3xl mx-auto leading-relaxed">
            You didn't come this far to stay stuck. You came here to chart your next level—with strategy, clarity, and
            community.
          </p>

          {/* Event Details */}
          <div className="mb-12 flex flex-wrap justify-center gap-6 text-sm md:text-base">
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
              <Calendar className="w-4 h-4 mr-2 text-purple-400" />
              <span>May 15-16, 2026</span>
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
              <MapPin className="w-4 h-4 mr-2 text-rose-400" />
              <span>Atlanta, GA</span>
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
              <Clock className="w-4 h-4 mr-2 text-amber-400" />
              <span>2 Days</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href="#community-signup">
              <Button
                size="lg"
                className="group relative bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 hover:from-purple-700 hover:via-pink-700 hover:to-rose-700 text-white px-12 py-6 text-xl font-bold rounded-full shadow-2xl shadow-purple-500/25 transition-all duration-300 hover:scale-105 hover:shadow-purple-500/40"
              >
                <Users className="mr-3 h-6 w-6" />
                Join the Movement
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </Button>
            </a>

            <a href="#ticket-registration">
              <Button
                size="lg"
                variant="outline"
                className="group relative border-2 border-amber-400 text-amber-300 hover:text-white hover:bg-amber-600/20 px-12 py-6 text-xl font-bold rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-amber-300 hover:shadow-lg hover:shadow-amber-500/25"
              >
                <Zap className="mr-3 h-6 w-6" />
                Register for Summit
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </div>

          {/* Existing Registration Link */}
          <div className="mt-8">
            <a href="/payment">
              <Button variant="ghost" className="text-amber-400 hover:text-amber-300 underline">
                Complete Payment for Existing Registration
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Community Signup Section */}
      <section id="community-signup" className="py-32 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-950/50 via-black to-rose-950/50"></div>
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 font-bold tracking-wider">
              <Users className="w-4 h-4 mr-2" />
              JOIN THE MOVEMENT
            </Badge>
            <h2 className="text-5xl md:text-6xl font-black mb-8 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              Become Part of Something Bigger
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Join a community that's redefining what it means to pivot with purpose. Get exclusive content, early
              access to events, and connect with like-minded visionaries.
            </p>
          </div>

          <Card className="bg-white/5 backdrop-blur-2xl border border-white/10 shadow-2xl shadow-purple-500/10">
            <CardContent className="p-12">
              <form
                className="space-y-8"
                onSubmit={async (e) => {
                  e.preventDefault()

                  try {
                    const formData = new FormData(e.currentTarget)

                    const response = await fetch("https://formspree.io/f/mrbkpawr", {
                      method: "POST",
                      body: formData,
                      headers: {
                        Accept: "application/json",
                      },
                    })

                    if (response.ok) {
                      alert("Welcome to the EraPivot Movement! Check your email for exclusive content.")
                      // Reset form
                      setCommunityForm({
                        firstName: "",
                        lastName: "",
                        email: "",
                        industry: "",
                        challenge: "",
                      })
                    } else {
                      throw new Error("Form submission failed")
                    }
                  } catch (error) {
                    console.error("Form submission error:", error)
                    alert("Thank you for your interest! We'll be in touch soon.")
                    // Still reset form even if submission fails
                    setCommunityForm({
                      firstName: "",
                      lastName: "",
                      email: "",
                      industry: "",
                      challenge: "",
                    })
                  }
                }}
              >
                <input type="hidden" name="formType" value="community" />

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <Label className="block text-sm font-bold text-purple-300 mb-3 tracking-wider uppercase">
                      First Name *
                    </Label>
                    <Input
                      className="h-14 bg-white/5 border-white/20 text-white placeholder:text-gray-500 focus:border-purple-400 text-lg"
                      required
                      placeholder="Enter your first name"
                      name="firstName"
                      value={communityForm.firstName}
                      onChange={(e) => setCommunityForm({ ...communityForm, firstName: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label className="block text-sm font-bold text-purple-300 mb-3 tracking-wider uppercase">
                      Last Name *
                    </Label>
                    <Input
                      className="h-14 bg-white/5 border-white/20 text-white placeholder:text-gray-500 focus:border-purple-400 text-lg"
                      required
                      placeholder="Enter your last name"
                      name="lastName"
                      value={communityForm.lastName}
                      onChange={(e) => setCommunityForm({ ...communityForm, lastName: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <Label className="block text-sm font-bold text-purple-300 mb-3 tracking-wider uppercase">
                    Email *
                  </Label>
                  <Input
                    type="email"
                    className="h-14 bg-white/5 border-white/20 text-white placeholder:text-gray-500 focus:border-purple-400 text-lg"
                    required
                    placeholder="Enter your email"
                    name="email"
                    value={communityForm.email}
                    onChange={(e) => setCommunityForm({ ...communityForm, email: e.target.value })}
                  />
                </div>

                <div>
                  <Label className="block text-sm font-bold text-purple-300 mb-3 tracking-wider uppercase">
                    Current Industry *
                  </Label>
                  <select
                    required
                    name="industry"
                    value={communityForm.industry}
                    onChange={(e) => setCommunityForm({ ...communityForm, industry: e.target.value })}
                    className="w-full h-14 bg-gray-900 border border-white/20 text-white rounded-md px-3 focus:border-purple-400 text-lg"
                  >
                    <option value="">Select your current industry</option>
                    <option value="healthcare">Healthcare/Nursing</option>
                    <option value="business">Business/Corporate</option>
                    <option value="creative">Creative/Arts</option>
                    <option value="education">Education</option>
                    <option value="entrepreneur">Entrepreneur</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <Label className="block text-sm font-bold text-purple-300 mb-3 tracking-wider uppercase">
                    What's your biggest challenge right now?
                  </Label>
                  <Textarea
                    className="min-h-[120px] bg-white/5 border-white/20 text-white placeholder:text-gray-500 focus:border-purple-400 text-lg"
                    name="challenge"
                    placeholder="Share what you're struggling with..."
                    value={communityForm.challenge}
                    onChange={(e) => setCommunityForm({ ...communityForm, challenge: e.target.value })}
                  />
                </div>

                {/* Benefits Box */}
                <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 p-8 rounded-2xl border border-purple-500/30 backdrop-blur-sm">
                  <h4 className="font-bold text-white mb-4 text-xl flex items-center">
                    <Crown className="w-6 h-6 text-purple-400 mr-3" />
                    As a Movement Member, you'll get:
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      "Weekly inspiration and pivot strategies",
                      "Exclusive community access",
                      "Early bird pricing on all events",
                      "Monthly virtual meetups",
                      "Resource library access",
                      "Direct access to Ijay's insights",
                    ].map((benefit, index) => (
                      <div key={index} className="flex items-center text-gray-300">
                        <Sparkles className="w-4 h-4 text-purple-400 mr-3" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 hover:from-purple-700 hover:via-pink-700 hover:to-rose-700 text-white py-6 text-xl font-bold rounded-full shadow-2xl shadow-purple-500/25 transition-all duration-300 hover:scale-105"
                >
                  <Users className="mr-3 h-6 w-6" />
                  Join the EraPivot Movement
                  <Sparkles className="ml-3 h-6 w-6" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Summit Registration Section */}
      <section id="ticket-registration" className="py-16 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-950/30 via-black to-orange-950/30"></div>
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-gradient-to-r from-amber-500 to-orange-600 text-white px-8 py-3 font-bold tracking-wider">
              <Crown className="w-4 h-4 mr-2" />
              SUMMIT PRE-REGISTRATION
            </Badge>
            <h2 className="text-5xl md:text-6xl font-black mb-8 bg-gradient-to-r from-white to-amber-200 bg-clip-text text-transparent">
              Reserve Your Spot
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Pre-register now and secure your transformation. Complete payment later with your unique registration ID.
            </p>
            <div className="inline-flex items-center bg-gradient-to-r from-red-500/20 to-orange-500/20 backdrop-blur-sm border border-red-500/30 rounded-full px-8 py-3">
              <Zap className="w-5 h-5 text-red-400 mr-2 animate-pulse" />
              <span className="text-red-300 font-bold">Only 200 Seats Available</span>
            </div>
          </div>

          <Card className="bg-white/5 backdrop-blur-2xl border border-white/10 shadow-2xl shadow-amber-500/10">
            <CardContent className="p-12">
              {/* Pricing Section */}
              <div className="mb-12 p-8 bg-gradient-to-r from-amber-900/30 to-orange-900/30 rounded-2xl border border-amber-500/30">
                <h3 className="text-2xl font-bold text-white mb-6 text-center flex items-center justify-center">
                  <Crown className="w-6 h-6 text-amber-400 mr-3" />
                  Summit Investment Options
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-xl border-2 border-amber-400/50 relative overflow-hidden">
                    <div className="absolute top-0 right-0 bg-gradient-to-r from-amber-400 to-orange-500 text-black px-4 py-1 text-sm font-bold">
                      SAVE $50
                    </div>
                    <h4 className="font-black text-white text-xl mb-2">Early Bird</h4>
                    <p className="text-4xl font-black text-amber-400 mb-2">$150</p>
                    <p className="text-amber-300 font-medium">Available until March 1st</p>
                  </div>
                  <div className="p-6 bg-white/5 rounded-xl border-2 border-gray-600">
                    <h4 className="font-black text-white text-xl mb-2">Regular</h4>
                    <p className="text-4xl font-black text-gray-400 mb-2">$200</p>
                    <p className="text-gray-400">After March 1st</p>
                  </div>
                </div>
              </div>

              {/* Registration Form */}
              <form
                className="space-y-8"
                onSubmit={async (e) => {
                  e.preventDefault()

                  try {
                    const formData = new FormData(e.currentTarget)

                    const response = await fetch("https://formspree.io/f/mwpblnaw", {
                      method: "POST",
                      body: formData,
                      headers: {
                        Accept: "application/json",
                      },
                    })

                    if (response.ok) {
                      alert("Registration submitted! Redirecting to payment...")
                      // Redirect to payment page
                      window.location.href = "/payment"
                    } else {
                      throw new Error("Registration submission failed")
                    }
                  } catch (error) {
                    console.error("Registration submission error:", error)
                    // Still redirect to payment even if form submission fails
                    alert("Registration received! Redirecting to payment...")
                    window.location.href = "/payment"
                  }
                }}
              >
                <input type="hidden" name="formType" value="registration" />

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <Label className="block text-sm font-bold text-amber-200 mb-3 tracking-wider uppercase">
                      Full Name *
                    </Label>
                    <Input
                      className="h-14 bg-white/5 border-white/20 text-white placeholder:text-gray-500 focus:border-amber-400 text-lg"
                      required
                      placeholder="Enter your full name"
                      name="fullName"
                      value={registrationForm.fullName}
                      onChange={(e) => setRegistrationForm({ ...registrationForm, fullName: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label className="block text-sm font-bold text-amber-200 mb-3 tracking-wider uppercase">
                      Email *
                    </Label>
                    <Input
                      type="email"
                      className="h-14 bg-white/5 border-white/20 text-white placeholder:text-gray-500 focus:border-amber-400 text-lg"
                      required
                      placeholder="Enter your email"
                      name="email"
                      value={registrationForm.email}
                      onChange={(e) => setRegistrationForm({ ...registrationForm, email: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <Label className="block text-sm font-bold text-amber-200 mb-3 tracking-wider uppercase">
                    Phone Number *
                  </Label>
                  <Input
                    className="h-14 bg-white/5 border-white/20 text-white placeholder:text-gray-500 focus:border-amber-400 text-lg"
                    required
                    placeholder="Enter your phone number"
                    name="phone"
                    value={registrationForm.phone}
                    onChange={(e) => setRegistrationForm({ ...registrationForm, phone: e.target.value })}
                  />
                </div>

                <div>
                  <Label className="block text-sm font-bold text-amber-200 mb-3 tracking-wider uppercase">
                    City/State
                  </Label>
                  <Input
                    className="h-14 bg-white/5 border-white/20 text-white placeholder:text-gray-500 focus:border-amber-400 text-lg"
                    placeholder="Enter your city and state"
                    name="cityState"
                    value={registrationForm.cityState}
                    onChange={(e) => setRegistrationForm({ ...registrationForm, cityState: e.target.value })}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <Label className="block text-sm font-bold text-amber-200 mb-3 tracking-wider uppercase">
                      Primary Focus Track *
                    </Label>
                    <select
                      required
                      name="primaryTrack"
                      value={registrationForm.primaryTrack}
                      onChange={(e) => setRegistrationForm({ ...registrationForm, primaryTrack: e.target.value })}
                      className="w-full h-14 bg-gray-900 border border-white/20 text-white rounded-md px-3 focus:border-amber-400 text-lg"
                    >
                      <option value="">Select primary track</option>
                      <option value="healthcare-transition">Healthcare Transition</option>
                      <option value="business-launch">Business Launch</option>
                      <option value="creative-monetization">Creative Monetization</option>
                      <option value="coaching-certification">Coaching & Certification</option>
                      <option value="real-estate">Real Estate Investment</option>
                      <option value="e-commerce">E-commerce & Digital</option>
                      <option value="digital-technology">Digital Technology Transition</option>
                    </select>
                  </div>
                  <div>
                    <Label className="block text-sm font-bold text-amber-200 mb-3 tracking-wider uppercase">
                      Secondary Track (Optional)
                    </Label>
                    <select
                      name="secondaryTrack"
                      value={registrationForm.secondaryTrack}
                      onChange={(e) => setRegistrationForm({ ...registrationForm, secondaryTrack: e.target.value })}
                      className="w-full h-14 bg-gray-900 border border-white/20 text-white rounded-md px-3 focus:border-amber-400 text-lg"
                    >
                      <option value="">Select secondary track</option>
                      <option value="healthcare-transition">Healthcare Transition</option>
                      <option value="business-launch">Business Launch</option>
                      <option value="creative-monetization">Creative Monetization</option>
                      <option value="coaching-certification">Coaching & Certification</option>
                      <option value="real-estate">Real Estate Investment</option>
                      <option value="e-commerce">E-commerce & Digital</option>
                      <option value="digital-technology">Digital Technology Transition</option>
                    </select>
                  </div>
                </div>

                <div>
                  <Label className="block text-sm font-bold text-amber-200 mb-3 tracking-wider uppercase">
                    What specific outcome do you want from this summit?
                  </Label>
                  <Textarea
                    className="min-h-[120px] bg-white/5 border-white/20 text-white placeholder:text-gray-500 focus:border-amber-400 text-lg"
                    name="outcome"
                    placeholder="Describe your goals and what success looks like..."
                    value={registrationForm.outcome}
                    onChange={(e) => setRegistrationForm({ ...registrationForm, outcome: e.target.value })}
                  />
                </div>

                {/* Summit Includes */}
                <div className="bg-gradient-to-r from-amber-900/30 to-orange-900/30 p-8 rounded-2xl border border-amber-500/30">
                  <h4 className="font-bold text-white mb-4 text-xl flex items-center">
                    <Crown className="w-6 h-6 text-amber-400 mr-3" />
                    Your Summit Investment Includes:
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      "2-day transformational experience",
                      "Access to all keynote sessions",
                      "Choice of 2 specialized breakout tracks",
                      "Networking lunch and reception",
                      "Digital resource library",
                      "90-day post-summit community access",
                      "Exclusive summit swag bag",
                      "Certificate of completion",
                    ].map((item, index) => (
                      <div key={index} className="flex items-center text-gray-300">
                        <CircleCheckBig className="w-4 h-4 text-amber-400 mr-3" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pre-Registration Info */}
                <div className="bg-blue-900/20 p-6 rounded-xl border border-blue-500/30">
                  <h4 className="font-bold text-blue-300 mb-2 flex items-center">
                    <CircleAlert className="w-5 h-5 mr-2" />
                    Pre-Registration Process
                  </h4>
                  <p className="text-blue-200 text-sm">
                    This will reserve your spot for 7 days. You'll receive a unique registration ID to complete payment
                    later. Your spot is held until payment is completed or the hold expires.
                  </p>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 hover:from-amber-600 hover:via-orange-600 hover:to-red-600 text-white py-6 text-2xl font-black rounded-full shadow-2xl shadow-amber-500/25 transition-all duration-300 hover:scale-105"
                >
                  <Crown className="mr-3 h-7 w-7" />
                  Reserve My Spot (Pre-Register)
                  <ArrowRight className="ml-3 h-7 w-7" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Why EraPivot Section */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/20 to-black"></div>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <Badge className="mb-8 bg-white/10 text-purple-300 px-6 py-3 backdrop-blur-sm border border-purple-500/30">
            WHY ERAPIVOT
          </Badge>
          <h2 className="text-5xl md:text-6xl font-black mb-12 leading-tight">
            <span className="block text-white">We're not selling hype.</span>
            <span className="block bg-gradient-to-r from-purple-400 to-rose-400 bg-clip-text text-transparent">
              We're building legacies.
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mt-16">
            {[
              { icon: Target, text: "Real-life tools, not empty motivation" },
              { icon: Heart, text: "Heart-led mentorship that meets strategy" },
              { icon: Users, text: "A tribe that sees you and holds you accountable" },
              { icon: Star, text: "Faith, purpose, and power—intertwined" },
            ].map((item, index) => (
              <div
                key={index}
                className="group flex items-start space-x-6 p-8 rounded-2xl bg-gradient-to-r from-purple-900/20 to-rose-900/20 backdrop-blur-sm border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:scale-105"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-rose-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <p className="text-xl text-gray-300 font-medium leading-relaxed group-hover:text-white transition-colors">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Message Section */}
      <section className="py-32 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-950/30 via-black to-purple-950/30"></div>
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-gradient-to-r from-rose-600 to-purple-600 text-white px-8 py-3 font-bold tracking-wider">
              <Heart className="w-4 h-4 mr-2" />
              FROM THE FOUNDER
            </Badge>
            <h2 className="text-5xl md:text-6xl font-black mb-8 bg-gradient-to-r from-white to-rose-200 bg-clip-text text-transparent">
              A Note From Ijay
            </h2>
          </div>

          <Card className="bg-gradient-to-br from-rose-900/20 to-purple-900/20 backdrop-blur-2xl border border-rose-500/30 shadow-2xl shadow-rose-500/10">
            <CardContent className="p-16 text-center">
              <div className="w-32 h-32 bg-gradient-to-r from-rose-500 to-purple-600 rounded-full mx-auto mb-12 flex items-center justify-center shadow-2xl">
                <Heart className="h-16 w-16 text-white" />
              </div>
              <blockquote className="text-2xl md:text-3xl text-gray-300 leading-relaxed mb-12 font-light italic">
                "I built EraPivot out of the pain of starting over, the courage to pivot, and the faith that it would
                all make sense one day. This isn't about being perfect. It's about saying, 'I'm ready for more.'"
              </blockquote>
              <p className="text-3xl font-black text-white mb-4">Let's shift—together.</p>
              <p className="text-xl text-rose-300 font-medium">– Ijay Moxie, Founder</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-4 bg-gradient-to-t from-gray-950 to-black border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-black mb-6 bg-gradient-to-r from-purple-400 to-rose-400 bg-clip-text text-transparent">
              Stay in the Loop
            </h3>
            <p className="text-xl text-gray-300 mb-12">
              Be the first to know when registration opens, merch drops, and resources go live.
            </p>
            <div className="max-w-lg mx-auto">
              <form className="flex gap-4" action="https://formspree.io/f/mrbkpawr" method="POST">
                <input type="hidden" name="formType" value="newsletter" />
                <Input
                  type="email"
                  className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 h-14 text-lg backdrop-blur-sm"
                  required
                  placeholder="Your Email Address"
                  name="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                />
                <Button
                  type="submit"
                  className="bg-gradient-to-r from-purple-600 to-rose-600 hover:from-purple-700 hover:to-rose-700 px-8 h-14 font-bold"
                >
                  Subscribe
                </Button>
              </form>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/10">
            <div className="mb-8 md:mb-0">
              <p className="text-4xl font-black bg-gradient-to-r from-purple-400 to-rose-400 bg-clip-text text-transparent">
                EraPivot
              </p>
            </div>

            <div className="flex space-x-8 mb-8 md:mb-0">
              {[
                { icon: Instagram, label: "Instagram" },
                { icon: Youtube, label: "YouTube" },
                { icon: Facebook, label: "Facebook" },
              ].map((social, index) => (
                <div
                  key={index}
                  className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer group"
                >
                  <social.icon className="h-6 w-6 text-gray-400 group-hover:text-white transition-colors" />
                </div>
              ))}
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer group">
                <svg
                  className="h-6 w-6 text-gray-400 group-hover:text-white transition-colors"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-2.08v5.73a3.87 3.87 0 01-3.87 3.87 3.81 3.81 0 01-3.81-3.81 3.81 3.81 0 013.81-3.81c.21 0 .41.02.61.05V1.96c-.2-.02-.4-.02-.61-.02A5.87 5.87 0 004 7.81a5.87 5.87 0 005.87 5.87 5.87 5.87 0 005.87-5.87V9.47a6.84 6.84 0 003.85 1.15V8.54a4.84 4.84 0 01-3.85-1.85z" />
                </svg>
              </div>
            </div>

            <div className="text-sm text-gray-400 text-center md:text-right">
              <p>© 2025 EraPivot | All Rights Reserved</p>
              <p className="mt-1">Privacy Policy | Terms of Service</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
