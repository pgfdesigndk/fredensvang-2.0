import logo from "@/assets/fredensvang-logo.png";
import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer id="kontakt" className="bg-brand-mute">
      <div className="max-w-7xl mx-auto">
        {/* Top Section: CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-2 border-b border-brand-deep/10">
          <div className="px-5 sm:px-8 py-16 md:py-24 lg:pr-20 flex flex-col justify-center lg:border-r border-brand-deep/10">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-brand-deep leading-tight mb-6">
              Skal vi tage en <br />
              <span className="italic">uforpligtende snak?</span>
            </h2>
            <p className="text-brand-deep/50 text-lg max-w-md leading-relaxed">
              Vi sidder klar til at rådgive dig om den bedste løsning for din forening eller
              ejendom.
            </p>
            <p className="text-brand-deep/40 text-sm mt-6">
              Telefontid: mandag–fredag 09.00–15.00. SMS kan ikke besvares.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2">
            <a
              href="mailto:kontor@fredensvang.com"
              className="group flex flex-col items-center justify-center px-5 sm:px-8 py-16 md:py-24 bg-brand-deep text-brand-surface transition-all hover:bg-brand-deep/90"
            >
              <span className="text-xs font-sans uppercase tracking-widest mb-4 opacity-70 group-hover:opacity-100 transition-opacity">
                Skriv til os
              </span>
              <span className="font-serif text-2xl">kontor@fredensvang.com</span>
              <div className="h-px w-8 bg-brand-surface/30 mt-6 group-hover:w-16 transition-all" />
            </a>
            <a
              href="tel:+4520505015"
              className="group flex flex-col items-center justify-center px-5 sm:px-8 py-16 md:py-24 bg-brand-surface text-brand-deep border-l border-brand-deep/10 transition-all hover:bg-brand-deep/[0.03]"
            >
              <span className="text-xs font-sans uppercase tracking-widest mb-4 text-brand-deep/40 group-hover:text-brand-deep/60 transition-colors">
                Ring direkte
              </span>
              <span className="font-serif text-2xl">(+45) 20 50 50 15</span>
              <div className="h-px w-8 bg-brand-deep/20 mt-6 group-hover:w-16 transition-all group-hover:bg-brand-deep/40" />
            </a>
          </div>
        </div>

        {/* Middle Section: Links & Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 px-5 sm:px-8 py-16 md:py-20">
          <div className="space-y-6">
            <img
              src={logo}
              alt="Fredensvang Boligadministration ApS logo"
              className="h-12 w-auto"
              width={896}
              height={627}
              loading="lazy"
            />
            <address className="not-italic text-sm text-brand-deep/60 leading-relaxed">
              Døstrupvej 72
              <br />
              9500 Hobro
              <br />
              Danmark
            </address>
          </div>

          <div className="space-y-4">
            <h3 className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-brand-deep/40 mb-8">
              Ydelser
            </h3>
            <ul className="space-y-4 text-sm text-brand-deep/60">
              <li>
                <Link to="/ejendomsadministration" className="hover:text-brand-deep transition-colors">
                  Ejendomsadministration
                </Link>
              </li>
              <li>
                <Link to="/ledige-boliger" className="hover:text-brand-deep transition-colors">
                  Boligudlejning
                </Link>
              </li>
              <li>
                <Link to="/ejendomsadministration" hash="ydelser" className="hover:text-brand-deep transition-colors">
                  Bogholderi &amp; regnskab
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-brand-deep/40 mb-8">
              Virksomheden
            </h3>
            <ul className="space-y-4 text-sm text-brand-deep/60">
              <li>
                <Link to="/om-os" className="hover:text-brand-deep transition-colors">
                  Om os
                </Link>
              </li>
              <li>
                <a href="mailto:kontor@fredensvang.com" className="hover:text-brand-deep transition-colors">
                  Kontakt
                </a>
              </li>
              <li>
                <a href="tel:+4520659504" className="hover:text-brand-deep transition-colors">
                  Akut vagt: 20 65 95 04
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-brand-deep/40 mb-8">
              Åbningstider
            </h3>
            <ul className="space-y-3 text-sm text-brand-deep/60">
              <li className="flex justify-between gap-4">
                <span>Man – fre</span>
                <span>09.00 – 15.00</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>Lør – søn</span>
                <span>Lukket</span>
              </li>
            </ul>
            <p className="text-[11px] text-brand-deep/40 mt-4 leading-relaxed">
              Ledige lejemål annonceres her på siden, på Facebook og på udvalgte lejeportaler.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center px-5 sm:px-8 py-8 border-t border-brand-deep/5 gap-6">
          <div className="text-[10px] font-sans tracking-widest text-brand-deep/40 uppercase order-2 md:order-1">
            Fredensvang Boligadministration ApS &copy; {new Date().getFullYear()}
          </div>
          <div className="flex space-x-8 text-[10px] font-sans tracking-widest text-brand-deep/50 uppercase order-1 md:order-2">
            <a href="#" className="hover:text-brand-deep transition-colors">
              Persondatapolitik
            </a>
            <a href="#" className="hover:text-brand-deep transition-colors">
              Betingelser
            </a>
            <a href="#" className="hover:text-brand-deep transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
