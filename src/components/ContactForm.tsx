"use client";

import { useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const params = new URLSearchParams();
      for (const [key, value] of formData.entries()) {
        if (typeof value === "string") params.append(key, value);
      }
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params.toString(),
      });
      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      onSubmit={handleSubmit}
      className="flex flex-col gap-6"
    >
      <input type="hidden" name="form-name" value="contact" />
      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-medium text-cream/90">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full rounded border border-copper/30 bg-charcoal/50 px-4 py-3 text-cream placeholder-cream/40 focus:border-amber focus:outline-none focus:ring-1 focus:ring-amber"
          placeholder="Your name"
        />
      </div>
      <div>
        <label htmlFor="company" className="mb-2 block text-sm font-medium text-cream/90">
          Company
        </label>
        <input
          type="text"
          id="company"
          name="company"
          className="w-full rounded border border-copper/30 bg-charcoal/50 px-4 py-3 text-cream placeholder-cream/40 focus:border-amber focus:outline-none focus:ring-1 focus:ring-amber"
          placeholder="Company or venue name"
        />
      </div>
      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-medium text-cream/90">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full rounded border border-copper/30 bg-charcoal/50 px-4 py-3 text-cream placeholder-cream/40 focus:border-amber focus:outline-none focus:ring-1 focus:ring-amber"
          placeholder="your@email.com"
        />
      </div>
      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-cream/90">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="w-full rounded border border-copper/30 bg-charcoal/50 px-4 py-3 text-cream placeholder-cream/40 focus:border-amber focus:outline-none focus:ring-1 focus:ring-amber"
          placeholder="Tell us about your inquiry..."
        />
      </div>
      <button
        type="submit"
        disabled={status === "submitting"}
        className="rounded border-2 border-amber px-8 py-3 font-heading text-sm uppercase tracking-widest text-amber transition-colors hover:bg-amber hover:text-charcoal disabled:opacity-50"
        style={{ fontFamily: "var(--font-oswald)" }}
      >
        {status === "submitting" ? "Sending..." : "Send"}
      </button>
      {status === "success" && (
        <p className="text-sm text-amber">Thanks! We&apos;ll be in touch soon.</p>
      )}
      {status === "error" && (
        <p className="text-sm text-red-400">Something went wrong. Please try again.</p>
      )}
    </form>
  );
}
