"use client";

import { FormEvent } from "react";
import { siteConfig } from "@/config/site";

export function ContactForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();
    const subject = name ? `Portfolio message from ${name}` : "Portfolio message";
    const body = [`Name: ${name}`, `Email: ${email}`, "", message].join("\n");

    window.location.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form className="grid gap-4" onSubmit={handleSubmit}>
      <label className="grid gap-1.5 text-sm font-medium text-[var(--ink)]">
        Name
        <input
          name="name"
          required
          className="rounded-xl border border-[var(--line)] bg-[var(--paper)] px-3 py-2.5 text-base font-normal outline-none ring-[var(--accent)] focus:ring-2"
          placeholder="Your name"
        />
      </label>
      <label className="grid gap-1.5 text-sm font-medium text-[var(--ink)]">
        Email
        <input
          type="email"
          name="email"
          required
          className="rounded-xl border border-[var(--line)] bg-[var(--paper)] px-3 py-2.5 text-base font-normal outline-none ring-[var(--accent)] focus:ring-2"
          placeholder="you@example.com"
        />
      </label>
      <label className="grid gap-1.5 text-sm font-medium text-[var(--ink)]">
        Note
        <textarea
          name="message"
          rows={5}
          required
          className="resize-y rounded-xl border border-[var(--line)] bg-[var(--paper)] px-3 py-2.5 text-base font-normal outline-none ring-[var(--accent)] focus:ring-2"
          placeholder="What are you working on?"
        />
      </label>
      <button
        type="submit"
        className="w-fit rounded-full bg-[var(--ink)] px-5 py-2.5 text-sm font-medium text-[var(--paper)] transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
      >
        Send email
      </button>
    </form>
  );
}
