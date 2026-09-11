import { Card, PageTemplate } from "@/components/page-template";
import { ContactForm } from "@/components/contact-form";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <PageTemplate
      eyebrow="Hello"
      title="Let’s talk"
      description="Whether you have a question, want to work together, or just want to say hi, my inbox is always open. I’ll try my best to get back to you!"
    >
      <div className="grid gap-4 md:grid-cols-[1.2fr_0.8fr]">
        <Card title="Message">
          <ContactForm />
        </Card>
        <Card title="Direct">
          <p>
            Email:{" "}
            <a
              href={`mailto:${siteConfig.email}`}
              className="font-medium text-[var(--accent-deep)] underline decoration-[var(--line)] underline-offset-4 hover:decoration-[var(--accent-deep)]"
            >
              {siteConfig.email}
            </a>
            <br />
            Based in {siteConfig.location}.
          </p>
        </Card>
      </div>
    </PageTemplate>
  );
}
