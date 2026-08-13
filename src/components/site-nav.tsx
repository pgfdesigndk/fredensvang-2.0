import logo from "@/assets/fredensvang-logo.png";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const activeProps = { className: "opacity-100 underline underline-offset-8" };

const LINKS = [
  { to: "/", label: "Startside", exact: true },
  { to: "/ledige-boliger", label: "Ledige boliger", exact: false },
  { to: "/ejendomsadministration", label: "Ejendomsadministration", exact: false },
  { to: "/om-os", label: "Om os", exact: false },
] as const;

export function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="max-w-7xl mx-auto px-5 sm:px-8 py-5 sm:py-6">
      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
        <Link to="/" className="flex min-w-0 items-center gap-2" onClick={() => setOpen(false)}>
          <img
            src={logo}
            alt="Fredensvang Boligadministration ApS logo"
            className="h-10 sm:h-14 w-auto"
            width={896}
            height={627}
          />
        </Link>

        <div className="hidden lg:flex items-center gap-8 text-sm font-medium uppercase tracking-widest">
          {LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="hover:opacity-60 transition-opacity"
              activeOptions={l.exact ? { exact: true } : undefined}
              activeProps={activeProps}
            >
              {l.label}
            </Link>
          ))}
          <Link to="/" hash="kontakt" className="hover:opacity-60 transition-opacity">
            Kontakt
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Luk menu" : "Åbn menu"}
          className="lg:hidden shrink-0 border border-brand-deep/20 p-2.5 hover:bg-brand-deep hover:text-brand-surface transition-colors"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden mt-5 border-t border-brand-deep/10 pt-4 flex flex-col text-sm font-medium uppercase tracking-widest">
          {LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="py-3 border-b border-brand-deep/5 hover:opacity-60 transition-opacity"
              activeOptions={l.exact ? { exact: true } : undefined}
              activeProps={activeProps}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/"
            hash="kontakt"
            onClick={() => setOpen(false)}
            className="py-3 hover:opacity-60 transition-opacity"
          >
            Kontakt
          </Link>
        </div>
      )}
    </nav>
  );
}
