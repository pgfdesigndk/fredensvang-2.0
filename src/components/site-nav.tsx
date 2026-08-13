import logo from "@/assets/fredensvang-logo.png";
import { Link } from "@tanstack/react-router";

const activeProps = { className: "opacity-100 underline underline-offset-8" };

export function SiteNav() {
  return (
    <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
      <Link to="/" className="flex items-center gap-2">
        <img
          src={logo}
          alt="Fredensvang Boligadministration ApS logo"
          className="h-14 w-auto"
          width={896}
          height={627}
        />
      </Link>
      <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest">
        <Link to="/" className="hover:opacity-60 transition-opacity" activeOptions={{ exact: true }} activeProps={activeProps}>
          Startside
        </Link>
        <Link to="/ledige-boliger" className="hover:opacity-60 transition-opacity" activeProps={activeProps}>
          Ledige boliger
        </Link>
        <Link to="/ejendomsadministration" className="hover:opacity-60 transition-opacity" activeProps={activeProps}>
          Ejendomsadministration
        </Link>
        <Link to="/om-os" className="hover:opacity-60 transition-opacity" activeProps={activeProps}>
          Om os
        </Link>
        <Link to="/" hash="kontakt" className="hover:opacity-60 transition-opacity">
          Kontakt
        </Link>
      </div>
    </nav>
  );
}
