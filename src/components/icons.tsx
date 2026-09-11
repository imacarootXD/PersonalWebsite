import type { NavIconName } from "@/config/site";

type IconProps = {
  name: NavIconName;
  className?: string;
};

export function NavIcon({ name, className }: IconProps) {
  const props = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.75,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  switch (name) {
    case "home":
      return (
        <svg {...props}>
          <path d="M4 11.5 12 4l8 7.5" />
          <path d="M6.5 10.5V20h11V10.5" />
        </svg>
      );
    case "user":
      return (
        <svg {...props}>
          <circle cx="12" cy="8" r="3.25" />
          <path d="M5.5 19.5c1.2-3.2 3.4-4.8 6.5-4.8s5.3 1.6 6.5 4.8" />
        </svg>
      );
    case "layers":
      return (
        <svg {...props}>
          <path d="m4 8 8-4 8 4-8 4-8-4Z" />
          <path d="m4 12 8 4 8-4" />
          <path d="m4 16 8 4 8-4" />
        </svg>
      );
    case "briefcase":
      return (
        <svg {...props}>
          <rect x="3.5" y="7.5" width="17" height="12" rx="2" />
          <path d="M8.5 7.5V6.2A1.7 1.7 0 0 1 10.2 4.5h3.6A1.7 1.7 0 0 1 15.5 6.2v1.3" />
          <path d="M3.5 12.5h17" />
        </svg>
      );
    case "mail":
      return (
        <svg {...props}>
          <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
          <path d="m4.5 7.5 7.5 6 7.5-6" />
        </svg>
      );
    case "heart":
      return (
        <svg {...props}>
          <path d="M20.8 8.8c0 5.4-8.8 10.2-8.8 10.2S3.2 14.2 3.2 8.8A4.3 4.3 0 0 1 12 6.7a4.3 4.3 0 0 1 8.8 2.1Z" />
        </svg>
      );
  }
}

export function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2.5a9.5 9.5 0 0 0-3 18.51c.48.09.65-.21.65-.46v-1.67c-2.65.58-3.21-1.12-3.21-1.12-.44-1.1-1.07-1.4-1.07-1.4-.87-.6.07-.59.07-.59.96.07 1.47.99 1.47.99.86 1.47 2.25 1.05 2.8.8.09-.62.34-1.05.61-1.29-2.12-.24-4.35-1.06-4.35-4.72 0-1.04.37-1.89.98-2.56-.1-.24-.43-1.21.09-2.53 0 0 .8-.26 2.62.98a9.1 9.1 0 0 1 4.77 0c1.82-1.24 2.62-.98 2.62-.98.52 1.32.19 2.29.09 2.53.61.67.98 1.52.98 2.56 0 3.67-2.23 4.48-4.36 4.72.34.29.65.86.65 1.74v2.58c0 .25.17.55.66.46A9.5 9.5 0 0 0 12 2.5Z" />
    </svg>
  );
}
