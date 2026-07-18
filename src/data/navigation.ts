type NavigationLink = {
  label: string;
  to: string;
};

type DesktopNavigationLink = NavigationLink & {
  number: string;
};

export const desktopNavigationLinks = [
  { number: "00", label: "Intro", to: "/#intro" },
  { number: "01", label: "Direction", to: "/#signals" },
  { number: "02", label: "Projects", to: "/projects" },
  { number: "03", label: "Shift", to: "/#shift" },
  { number: "04", label: "Chapters", to: "/experience" },
  { number: "05", label: "Toolkit", to: "/#toolkit" },
  { number: "06", label: "Contact", to: "/#contact" },
] as const satisfies readonly DesktopNavigationLink[];

export const mobileNavigationLinks = [
  { label: "Home", to: "/#intro" },
  { label: "Projects", to: "/projects" },
  { label: "Experience", to: "/experience" },
  { label: "Contact", to: "/#contact" },
] as const satisfies readonly NavigationLink[];
