"use client";

import { FormEvent, useState } from "react";
import { CheckCircle, Loader2, Send } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    // Simulate network request
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="py-16 text-center">
        <CheckCircle size={40} className="mx-auto mb-4 text-accent" />
        <h3 className="text-xl font-bold">Message sent</h3>
        <p className="mt-2 text-sm text-muted">
          We will get back to you as soon as possible.
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full rounded-xl border border-border/50 bg-background px-4 py-3.5 text-sm text-foreground placeholder:text-muted/50 transition-[border-color,box-shadow] duration-300 focus:border-accent/50 focus:outline-none focus:ring-1 focus:ring-accent/20";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-xs font-medium uppercase tracking-[0.15em] text-muted"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            className={inputClass}
            placeholder="Your name..."
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-xs font-medium uppercase tracking-[0.15em] text-muted"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            spellCheck={false}
            required
            className={inputClass}
            placeholder="you@studio.com..."
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="subject"
          className="mb-2 block text-xs font-medium uppercase tracking-[0.15em] text-muted"
        >
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          autoComplete="off"
          required
          className={inputClass}
          placeholder="Publishing, press, support..."
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-2 block text-xs font-medium uppercase tracking-[0.15em] text-muted"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          autoComplete="off"
          required
          rows={5}
          className={`${inputClass} resize-none`}
          placeholder="Tell us about your project..."
        />
      </div>

      <Button type="submit" className="w-full sm:w-auto">
        {loading ? <Loader2 size={14} className="mr-2 animate-spin" /> : <Send size={14} className="mr-2" />}
        {loading ? "Sending…" : "Send message"}
      </Button>
    </form>
  );
}
