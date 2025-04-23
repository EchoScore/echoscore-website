"use client"

import type React from "react"

import { useState } from "react"
import { CheckCircle2, Loader2, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function WaitlistForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch("https://formspree.io/f/xjkylnzr", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })

      if (response.ok) {
        setIsSubmitted(true)
        form.reset()
      } else {
        const data = await response.json()
        setError(data.error || "Something went wrong. Please try again.")
      }
    } catch (err) {
      setError("Network error. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center py-8">
        <div className="bg-green-50 rounded-full p-3 mb-4">
          <CheckCircle2 className="h-12 w-12 text-green-500" />
        </div>
        <h3 className="text-xl font-semibold mb-2 text-center">Thank You!</h3>
        <p className="text-center text-muted-foreground mb-6">
          You've been added to our waitlist! We'll be in touch soon.
        </p>
        <div className="flex items-center gap-2 mt-4">
          <Instagram className="h-5 w-5 text-[#0087C7]" />
          <p>
            Follow{" "}
            <a
              href="https://instagram.com/echoscore.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0087C7] font-medium hover:underline"
            >
              @echoscore.ai
            </a>{" "}
            for immediate updates
          </p>
        </div>
        <Button variant="outline" onClick={() => setIsSubmitted(false)} className="mt-6">
          Join with another email
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="email">
          Email <span className="text-red-500">*</span>
        </Label>
        <Input id="email" name="email" type="email" placeholder="you@example.com" required />
      </div>

      <div className="space-y-2">
        <Label htmlFor="instagram">
          Instagram Handle <span className="text-muted-foreground text-sm">(optional)</span>
        </Label>
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">@</span>
          <Input id="instagram" name="instagram" type="text" placeholder="yourusername" className="pl-8" />
        </div>
      </div>

      <div className="pt-2">
        <Button type="submit" className="w-full bg-[#0087C7] hover:bg-[#0087C7]/90 text-white" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Joining...
            </>
          ) : (
            "Join Waitlist"
          )}
        </Button>
      </div>

      {error && <p className="text-sm text-red-500 text-center">{error}</p>}

      <p className="text-xs text-center text-muted-foreground pt-4">
        By joining our waitlist, you agree to our Terms of Service and Privacy Policy. We'll never share your
        information with third parties.
      </p>
    </form>
  )
}
