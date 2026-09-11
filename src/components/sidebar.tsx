"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { siteConfig } from "@/config/site";
import { NavIcon } from "@/components/icons";

export function Sidebar() {
  const pathname = usePathname();
  const { collapsedWidth, expandedWidth } = siteConfig.sidebar;
  const [pinned, setPinned] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const expanded = pinned || hovered || mobileOpen;

  return (
    <>
      <button
        type="button"
        className="fixed left-4 top-4 z-50 grid size-11 place-items-center rounded-2xl bg-[var(--sidebar)] text-[var(--sidebar-fg)] shadow-lg md:hidden"
        aria-expanded={mobileOpen}
        aria-controls="site-sidebar"
        aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
        onClick={() => setMobileOpen((value) => !value)}
      >
        <svg
          className="size-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          aria-hidden="true"
        >
          {mobileOpen ? <path d="m6 6 12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
        </svg>
      </button>

      {mobileOpen ? (
        <button
          type="button"
          className="fixed inset-0 z-30 bg-black/30 md:hidden"
          aria-label="Close navigation"
          onClick={() => setMobileOpen(false)}
        />
      ) : null}

      <aside
        id="site-sidebar"
        className={`sidebar fixed inset-y-0 left-0 z-40 flex h-dvh shrink-0 flex-col overflow-hidden border-r border-[var(--sidebar-border)] bg-[var(--sidebar)] text-[var(--sidebar-fg)] transition-[width,transform] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] md:sticky md:top-0 md:translate-x-0 ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ width: expanded ? expandedWidth : collapsedWidth }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="flex h-20 items-center gap-3 px-4">
          <button
            type="button"
            className="hidden size-11 shrink-0 place-items-center rounded-2xl bg-[var(--accent)] font-semibold text-[var(--accent-fg)] md:grid"
            aria-expanded={expanded}
            aria-label={pinned ? "Collapse sidebar" : "Pin sidebar open"}
            onClick={() => setPinned((value) => !value)}
          >
            {siteConfig.initials}
          </button>
          <button
            type="button"
            className="grid size-11 shrink-0 place-items-center rounded-2xl bg-[var(--accent)] font-semibold text-[var(--accent-fg)] md:hidden"
            aria-label="Close navigation"
            onClick={() => setMobileOpen(false)}
          >
            {siteConfig.initials}
          </button>
          <div
            className={`min-w-0 transition-opacity duration-200 ${
              expanded ? "md:opacity-100" : "md:opacity-0"
            }`}
          >
            <p className="truncate text-sm font-semibold tracking-tight">
              {siteConfig.name}
            </p>
            <p className="truncate text-xs text-[var(--sidebar-muted)]">
              {siteConfig.role}
            </p>
          </div>
        </div>

        <nav className="flex flex-1 flex-col gap-1 px-3 py-2" aria-label="Primary">
          {siteConfig.nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex h-12 items-center gap-3 rounded-xl px-2.5 text-sm font-medium transition-colors ${
                  active
                    ? "bg-[var(--sidebar-active)] text-[var(--sidebar-fg)]"
                    : "text-[var(--sidebar-muted)] hover:bg-[var(--sidebar-hover)] hover:text-[var(--sidebar-fg)]"
                }`}
                onClick={() => setMobileOpen(false)}
              >
                <NavIcon name={item.icon} className="size-5 shrink-0" />
                <span
                  className={`truncate transition-opacity duration-200 ${
                    expanded ? "md:opacity-100" : "md:opacity-0"
                  }`}
                >
                  {item.label}
                </span>
              </Link>
            );
          })}
        </nav>

        <div className="px-4 pb-5">
          <p
            className={`truncate text-xs text-[var(--sidebar-muted)] transition-opacity duration-200 ${
              expanded ? "md:opacity-100" : "md:opacity-0"
            }`}
          >
            Updated Daily
          </p>
        </div>
      </aside>
    </>
  );
}
