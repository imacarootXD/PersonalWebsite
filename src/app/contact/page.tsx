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
      description="Feel free to reach out to me and I will try to get back to you as soon as possible, details are below."
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
