"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
// import { submitContactForm } from "../actions"
import { CheckCircle2, Loader2 } from "lucide-react"

export default function ContactForm() {
  const [pending, setPending] = useState(false)
  const [message, setMessage] = useState("")
  const [success, setSuccess] = useState(false)

  async function handleSubmit(formData: FormData) {
    setPending(true)
    setSuccess(false)
    try {
    //   const response = await submitContactForm(formData)
    //   setMessage(response.message)
    //   setSuccess(true)
    } catch (error) {
      setMessage("Something went wrong. Please try again.")
      setSuccess(false)
    } finally {
      setPending(false)
    }
  }

  return (
    <Card className="p-6 shadow-lg border-primary/10 w-full bg-black">
      <form action={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Name
            </label>
            <Input id="name" name="name" required className="transition-all focus-visible:ring-primary" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              className="transition-all focus-visible:ring-primary"
            />
          </div>
        </div>
        <div>
          <label htmlFor="subject" className="block text-sm font-medium mb-2">
            Subject
          </label>
          <Input id="subject" name="subject" required className="transition-all focus-visible:ring-primary" />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2">
            Message
          </label>
          <Textarea
            id="message"
            name="message"
            required
            className="min-h-32 transition-all focus-visible:ring-primary"
          />
        </div>
        <Button type="submit" className="w-full transition-all" disabled={pending} size="lg">
          {pending ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            "Send Message"
          )}
        </Button>
        {message && (
          <div
            className={`text-sm p-3 rounded-md flex items-center gap-2 ${success ? "bg-green-500/10 text-green-600 dark:text-green-400" : "bg-destructive/10 text-destructive"}`}
          >
            {success && <CheckCircle2 className="h-4 w-4" />}
            {message}
          </div>
        )}
      </form>
    </Card>
  )
}
