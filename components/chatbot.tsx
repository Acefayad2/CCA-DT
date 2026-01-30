"use client"

import { useChat } from "@ai-sdk/react"
import { MessageCircle, Send, Loader2 } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet"
import { ScrollArea } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"

const WELCOME = "Hi! I'm the CCA assistant. Ask me anything about Devyn Thompson, our services (IUL, annuities, whole life, term life), free financial breakdowns, how to get started, or contact info. How can I help?"

export function Chatbot() {
  const [open, setOpen] = useState(false)
  const {
    messages,
    input,
    handleInputChange,
    handleSubmit,
    isLoading,
    error,
  } = useChat({
    api: "/api/chat",
    onError: (err) => {
      console.error("Chat error:", err)
    },
  })

  const showWelcome = messages.length === 0 && !isLoading

  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        aria-label="Open chat"
        className="fixed bottom-6 right-6 z-40 h-14 w-14 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl hover:shadow-purple-500/25"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent
          side="right"
          className="flex w-full flex-col border-slate-800 bg-slate-900 p-0 sm:max-w-md"
        >
          <SheetHeader className="border-b border-white/10 bg-slate-900/95 px-4 py-3">
            <SheetTitle className="text-left text-white">
              CCA Assistant
            </SheetTitle>
            <SheetDescription className="text-left text-slate-400">
              Ask about services, Devyn, or how to get started
            </SheetDescription>
          </SheetHeader>

          <ScrollArea className="flex-1 px-4 py-3">
            <div className="flex flex-col gap-4 pb-4">
              {showWelcome && (
                <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                  <p className="text-sm text-slate-300">{WELCOME}</p>
                </div>
              )}
              {error && (
                <div className="rounded-xl border border-amber-500/30 bg-amber-500/10 px-4 py-3">
                  <p className="text-sm text-amber-200">
                    {error.message || "Something went wrong. Please try again or contact Devyn directly at (301) 266-6365."}
                  </p>
                </div>
              )}
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={cn(
                    "max-w-[85%] rounded-xl px-4 py-2.5",
                    m.role === "user"
                      ? "ml-auto bg-gradient-to-r from-purple-500 to-blue-500 text-white"
                      : "mr-auto border border-white/10 bg-white/5 text-slate-200"
                  )}
                >
                  <p className="whitespace-pre-wrap text-sm">{m.content}</p>
                </div>
              ))}
              {isLoading && (
                <div className="mr-auto flex max-w-[85%] items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5">
                  <Loader2 className="h-4 w-4 animate-spin text-purple-400" />
                  <span className="text-sm text-slate-400">Thinking...</span>
                </div>
              )}
            </div>
          </ScrollArea>

          <form
            onSubmit={handleSubmit}
            className="border-t border-white/10 bg-slate-900/95 p-4"
          >
            <div className="flex gap-2">
              <textarea
                value={input}
                onChange={handleInputChange}
                placeholder="Ask about CCA, services, or contact..."
                rows={1}
                className="min-h-[44px] flex-1 resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                disabled={isLoading}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault()
                    handleSubmit(e as unknown as React.FormEvent)
                  }
                }}
              />
              <Button
                type="submit"
                size="icon"
                disabled={isLoading || !(input ?? "").trim()}
                className="h-11 w-11 shrink-0 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:from-purple-600 hover:to-blue-600"
              >
                {isLoading ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <Send className="h-4 w-4" />
                )}
              </Button>
            </div>
          </form>
        </SheetContent>
      </Sheet>
    </>
  )
}
