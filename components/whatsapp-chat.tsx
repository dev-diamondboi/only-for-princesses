"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageCircle, X, Send, Crown } from "lucide-react"

export function WhatsAppChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState("")

  const predefinedMessages = [
    "Hi! I'd like to know more about your collections.",
    "Can you help me choose the right size for my daughter?",
    "I have questions about your therapeutic fashion approach.",
    "What's your return policy?",
  ]

  const handleSendMessage = (messageText: string) => {
    const whatsappNumber = "+1234567890" // Replace with actual WhatsApp business number
    const encodedMessage = encodeURIComponent(messageText)
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`
    window.open(whatsappUrl, "_blank")
    setIsOpen(false)
    setMessage("")
  }

  return (
    <>
      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          size="lg"
          className="rounded-full w-14 h-14 bg-green-500 hover:bg-green-600 text-white shadow-lg"
        >
          {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
        </Button>
      </div>

      {/* WhatsApp Chat Widget */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80">
          <Card className="border-border bg-card shadow-xl">
            <CardHeader className="bg-green-500 text-white rounded-t-lg">
              <CardTitle className="flex items-center space-x-2 text-white">
                <Crown className="h-5 w-5" />
                <div>
                  <div className="font-sans text-lg">Only for Princesses™</div>
                  <div className="text-sm opacity-90">We're here to help!</div>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 space-y-4">
              <div className="text-sm text-muted-foreground">
                Hi! 👋 How can we help you today? Choose a quick message or write your own:
              </div>

              <div className="space-y-2">
                {predefinedMessages.map((msg, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    className="w-full text-left justify-start text-xs h-auto py-2 px-3 bg-transparent"
                    onClick={() => handleSendMessage(msg)}
                  >
                    {msg}
                  </Button>
                ))}
              </div>

              <div className="border-t border-border pt-4">
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-1 px-3 py-2 text-sm rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    onKeyPress={(e) => {
                      if (e.key === "Enter" && message.trim()) {
                        handleSendMessage(message)
                      }
                    }}
                  />
                  <Button
                    size="sm"
                    onClick={() => message.trim() && handleSendMessage(message)}
                    className="bg-green-500 hover:bg-green-600 text-white"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="text-xs text-muted-foreground text-center">Powered by WhatsApp Business</div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  )
}
