"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Crown, Mail, CheckCircle, AlertCircle } from "lucide-react"

interface NewsletterSignupProps {
  variant?: "default" | "compact" | "hero"
  className?: string
}

export function NewsletterSignup({ variant = "default", className = "" }: NewsletterSignupProps) {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [message, setMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim()) return

    setStatus("loading")

    try {
      // Simulate API call - replace with actual newsletter service
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Here you would integrate with your newsletter service (Mailchimp, ConvertKit, etc.)
      console.log("Newsletter signup:", email)

      setStatus("success")
      setMessage("Welcome to our princess family! Check your email for a special welcome gift.")
      setEmail("")
    } catch (error) {
      setStatus("error")
      setMessage("Something went wrong. Please try again.")
    }
  }

  if (variant === "compact") {
    return (
      <div className={`space-y-3 ${className}`}>
        <h3 className="font-sans text-lg font-semibold text-foreground">Stay Updated</h3>
        <p className="text-sm text-muted-foreground">Get the latest collections and exclusive offers.</p>
        <form onSubmit={handleSubmit} className="flex space-x-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 px-3 py-2 text-sm rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            disabled={status === "loading"}
          />
          <Button
            type="submit"
            size="sm"
            disabled={status === "loading"}
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
          >
            {status === "loading" ? "..." : "Subscribe"}
          </Button>
        </form>
        {status === "success" && (
          <div className="flex items-center space-x-2 text-sm text-accent">
            <CheckCircle className="h-4 w-4" />
            <span>Thank you for subscribing!</span>
          </div>
        )}
        {status === "error" && (
          <div className="flex items-center space-x-2 text-sm text-destructive">
            <AlertCircle className="h-4 w-4" />
            <span>Please try again.</span>
          </div>
        )}
      </div>
    )
  }

  if (variant === "hero") {
    return (
      <div className={`text-center space-y-6 ${className}`}>
        <div className="space-y-4">
          <Crown className="h-12 w-12 text-secondary mx-auto" />
          <h2 className="font-sans text-3xl font-bold text-foreground">Join Our Royal Newsletter</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Be the first to discover new collections, exclusive stories, and special offers. Plus, get a 15% welcome
            discount on your first order!
          </p>
        </div>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              disabled={status === "loading"}
            />
            <Button
              type="submit"
              size="lg"
              disabled={status === "loading"}
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <Mail className="h-4 w-4 mr-2" />
              {status === "loading" ? "Subscribing..." : "Subscribe"}
            </Button>
          </div>
        </form>

        {status === "success" && (
          <div className="flex items-center justify-center space-x-2 text-accent">
            <CheckCircle className="h-5 w-5" />
            <span>{message}</span>
          </div>
        )}
        {status === "error" && (
          <div className="flex items-center justify-center space-x-2 text-destructive">
            <AlertCircle className="h-5 w-5" />
            <span>{message}</span>
          </div>
        )}

        <p className="text-xs text-muted-foreground">We respect your privacy. Unsubscribe at any time.</p>
      </div>
    )
  }

  return (
    <Card className={`border-border bg-gradient-to-br from-primary/5 to-accent/5 ${className}`}>
      <CardContent className="p-6 text-center space-y-4">
        <Crown className="h-8 w-8 text-accent mx-auto" />
        <h3 className="font-sans text-xl font-semibold text-card-foreground">Join Our Princess Family</h3>
        <p className="text-muted-foreground">
          Get exclusive access to new collections, therapeutic fashion insights, and special offers.
        </p>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            disabled={status === "loading"}
          />
          <Button
            type="submit"
            size="lg"
            className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
            disabled={status === "loading"}
          >
            <Mail className="h-4 w-4 mr-2" />
            {status === "loading" ? "Subscribing..." : "Subscribe & Get 15% Off"}
          </Button>
        </form>

        {status === "success" && (
          <div className="flex items-center justify-center space-x-2 text-accent">
            <CheckCircle className="h-5 w-5" />
            <span className="text-sm">{message}</span>
          </div>
        )}
        {status === "error" && (
          <div className="flex items-center justify-center space-x-2 text-destructive">
            <AlertCircle className="h-5 w-5" />
            <span className="text-sm">{message}</span>
          </div>
        )}

        <p className="text-xs text-muted-foreground">No spam, just magical updates. Unsubscribe anytime.</p>
      </CardContent>
    </Card>
  )
}
