import Link from "next/link";
import { Card, PageTemplate } from "@/components/page-template";
import { siteConfig } from "@/config/site";

export default function HomePage() {
  return (
    <PageTemplate
      eyebrow="Portfolio"
      title={`Hello, I’m ${siteConfig.name}.`}
      description={siteConfig.tagline}
    >
      <div className="grid gap-4 md:grid-cols-2">
        <Card title="Currently">
          <p>
            Studying Artificial Intelligence and Robotics at University College London,
            working on various personal projects to improve my skills,
            and looking for internships and collaborations.
          </p>
        </Card>
        <Card title="Looking for">
          <p>
            Internships, collaborations, and opportunities to learn and grow as a developer and roboticist.
          </p>
        </Card>
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          href="/projects"
          className="rounded-full bg-[var(--ink)] px-5 py-2.5 text-sm font-medium text-[var(--paper)] transition-transform hover:-translate-y-0.5"
        >
          View projects
        </Link>
        <Link
          href="/contact"
          className="rounded-full border border-[var(--line)] bg-[var(--card)] px-5 py-2.5 text-sm font-medium text-[var(--ink)] transition-transform hover:-translate-y-0.5"
        >
          Get in touch
        </Link>
        <a
          href="/cv.pdf"
          download="John-de Laubenque CV.pdf"
          className="rounded-full border border-[var(--line)] bg-[var(--card)] px-5 py-2.5 text-sm font-medium text-[var(--ink)] transition-transform hover:-translate-y-0.5"
        >
          Download CV
        </a>
        <a
          href="https://www.linkedin.com/in/john-de-laubenque-1352b032b/"
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-[var(--line)] bg-[var(--card)] px-5 py-2.5 text-sm font-medium text-[var(--ink)] transition-transform hover:-translate-y-0.5"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/imacarootXD"
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-[var(--line)] bg-[var(--card)] px-5 py-2.5 text-sm font-medium text-[var(--ink)] transition-transform hover:-translate-y-0.5"
        >
          GitHub
        </a>
        <a
          href="/poetry.pdf"
          download="John - Poetry.pdf"
          className="rounded-full border border-[var(--line)] bg-[var(--card)] px-5 py-2.5 text-sm font-medium text-[var(--ink)] transition-transform hover:-translate-y-0.5"
        >
          Download Poetry
        </a>
      </div>
    </PageTemplate>
  );
}
