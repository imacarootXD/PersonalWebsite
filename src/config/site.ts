export type NavIconName =
  | "home"
  | "user"
  | "briefcase"
  | "layers"
  | "mail"
  | "heart";

export type NavItem = {
  href: string;
  label: string;
  icon: NavIconName;
};

export const siteConfig = {
  name: "John",
  role: "Student Developer",
  initials: "J",
  tagline: "An aspiring developer and roboticist studying at UCL.",
  email: "john.laubenque.26@ucl.ac.uk",
  location: "United Kingdom, London",
  sidebar: {
    collapsedWidth: 76,
    expandedWidth: 248,
  },
  nav: [
    { href: "/", label: "Home", icon: "home" },
    { href: "/about", label: "About", icon: "user" },
    { href: "/projects", label: "Projects", icon: "layers" },
    { href: "/experience", label: "Experience", icon: "briefcase" },
    { href: "/hobbies", label: "Hobbies", icon: "heart" },
    { href: "/contact", label: "Contact", icon: "mail" },
  ] satisfies NavItem[],
};
