import { Github, Linkedin, Mail, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";
import { links } from "../../data/links";
import { desktopNavigationLinks, mobileNavigationLinks } from "../../data/navigation";

export function Navigation() {
  const location = useLocation();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    if (!isMobileOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsMobileOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMobileOpen]);

  return (
    <>
      <nav className="fixed left-0 top-0 bottom-0 w-24 hidden lg:flex flex-col items-center py-12 border-r border-[#2C2621]/10 z-50 mix-blend-multiply bg-[#F9F6F0] paper-bg">
        <Link
          to="/"
          className="writing-vertical font-serif text-2xl font-bold tracking-widest uppercase flex-1 rotate-180 hover:text-[#0F766E] transition-colors"
          style={{ writingMode: "vertical-rl" }}
        >
          Jinni Li
        </Link>

        <div className="flex flex-col gap-6 items-center">
          {desktopNavigationLinks.map((link) => {
            const isActive =
              link.to === location.pathname ||
              (link.to.startsWith("/#") && location.pathname === "/" && location.hash === link.to.slice(1));

            return (
              <Link
                key={link.number}
                to={link.to}
                className={`flex flex-col items-center group relative p-2 transition-colors ${
                  isActive ? "text-[#0F766E]" : "text-[#2C2621]"
                }`}
              >
                <span className="font-serif italic text-sm opacity-50 group-hover:opacity-100 transition-opacity">
                  {link.number}
                </span>
                <div className="absolute left-10 opacity-0 group-hover:opacity-100 transition-all text-xs font-medium uppercase tracking-widest whitespace-nowrap bg-[#2C2621] text-[#F9F6F0] px-2 py-1 rounded pointer-events-none">
                  {link.label}
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-8 flex flex-col gap-3 text-[#2C2621]/50">
          <a href={links.github} aria-label="GitHub" className="hover:text-[#0F766E] transition-colors">
            <Github className="w-4 h-4" />
          </a>
          <a href={links.linkedin} aria-label="LinkedIn" className="hover:text-[#C2410C] transition-colors">
            <Linkedin className="w-4 h-4" />
          </a>
          <a href={links.email} aria-label="Email" className="hover:text-[#0F766E] transition-colors">
            <Mail className="w-4 h-4" />
          </a>
        </div>
      </nav>

      <nav
        className="fixed left-3 right-3 top-3 z-50 lg:hidden"
        aria-label="Mobile portfolio navigation"
      >
        <div className="paper-bg flex items-center justify-between border border-[#2C2621]/18 bg-[#F9F6F0]/95 px-4 py-3 shadow-[4px_4px_0_rgba(44,38,33,0.08)]">
          <Link
            to="/#intro"
            className="font-serif text-lg font-bold text-[#2C2621] transition-colors hover:text-[#0F766E]"
          >
            Jinni Li
          </Link>
          <button
            type="button"
            aria-label={isMobileOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMobileOpen}
            aria-controls="mobile-navigation-panel"
            onClick={() => setIsMobileOpen((open) => !open)}
            className="inline-flex h-10 w-10 items-center justify-center border border-[#2C2621]/20 bg-[#F9F6F0] text-[#2C2621] transition-colors hover:border-[#0F766E] hover:text-[#0F766E]"
          >
            {isMobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>

        {isMobileOpen && (
          <div
            id="mobile-navigation-panel"
            className="paper-bg mt-2 border border-[#2C2621]/18 bg-[#F9F6F0]/98 px-4 py-4 shadow-[4px_4px_0_rgba(44,38,33,0.08)]"
          >
            <div className="grid gap-2">
              {mobileNavigationLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="flex min-h-11 items-center justify-between border-b border-[#2C2621]/10 py-2 text-sm font-medium text-[#2C2621] transition-colors hover:text-[#0F766E]"
                >
                  {link.label}
                  <span aria-hidden="true" className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-[#2C2621]/55">
                    open
                  </span>
                </Link>
              ))}
            </div>

            <div className="mt-4 flex gap-4 border-t border-[#2C2621]/12 pt-4">
              <a href={links.github} aria-label="GitHub" className="inline-flex h-10 w-10 items-center justify-center border border-[#2C2621]/16 text-[#2C2621] hover:text-[#0F766E]">
                <Github className="h-4 w-4" />
              </a>
              <a href={links.linkedin} aria-label="LinkedIn" className="inline-flex h-10 w-10 items-center justify-center border border-[#2C2621]/16 text-[#2C2621] hover:text-[#C2410C]">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href={links.email} aria-label="Email Jinni" className="inline-flex h-10 w-10 items-center justify-center border border-[#2C2621]/16 text-[#2C2621] hover:text-[#0F766E]">
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
