import type { ReactNode } from "react";

type PageTemplateProps = {
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
};

export function PageTemplate({
  eyebrow,
  title,
  description,
  children,
}: PageTemplateProps) {
  return (
    <article className="page-enter mx-auto w-full max-w-4xl px-6 py-12 sm:px-10 sm:py-16">
      <header className="mb-10 max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent-deep)]">
          {eyebrow}
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-[var(--ink)] sm:text-5xl">
          {title}
        </h1>
        <p className="mt-4 text-base leading-7 text-[var(--muted)] sm:text-lg">
          {description}
        </p>
      </header>
      {children}
    </article>
  );
}

export function Card({
  title,
  meta,
  action,
  children,
}: {
  title: string;
  meta?: string;
  action?: ReactNode;
  children: ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-[var(--line)] bg-[var(--card)] p-6 shadow-[0_12px_40px_rgba(28,24,20,0.05)]">
      <div className="mb-3 flex flex-wrap items-baseline justify-between gap-2">
        <div className="flex min-w-0 items-center gap-3">
          <h2 className="text-lg font-semibold tracking-tight text-[var(--ink)]">
            {title}
          </h2>
          {action}
        </div>
        {meta ? <p className="text-sm text-[var(--muted)]">{meta}</p> : null}
      </div>
      <div className="text-[var(--muted)] leading-7">{children}</div>
    </section>
  );
}
