import logo from "@/assets/fredensvang-logo.png";
import { createFileRoute, Link } from "@tanstack/react-router";
import heroBuilding from "@/assets/hero-building.jpg";
import trustBlueprints from "@/assets/trust-blueprints.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Fredensvang — Boligadministration, bogholderi & regnskab" },
      {
        name: "description",
        content:
          "Fredensvang forener klassisk jysk ordentlighed med moderne digitale værktøjer til ejendomsadministration, bogholderi og regnskab.",
      },
      { property: "og:title", content: "Fredensvang — Boligadministration, bogholderi & regnskab" },
      {
        property: "og:description",
        content:
          "Professionel styring af din ejendom. Boligadministration, bogholderi og regnskab i ét.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-brand-surface font-sans text-brand-deep">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
        <a href="#" className="flex items-center gap-2">
          <img src={logo} alt="Fredensvang Boligadministration ApS logo" className="h-10 w-auto" width={896} height={627} />
        </a>
        <div className="hidden md:flex items-center gap-10 text-sm font-medium uppercase tracking-widest">
          <Link to="/ledige-boliger" className="hover:opacity-60 transition-opacity">
            Ledige boliger
          </Link>
          <a href="#ydelser" className="hover:opacity-60 transition-opacity">
            Ydelser
          </a>
          <a href="#kontakt" className="hover:opacity-60 transition-opacity">
            Kontakt
          </a>
        </div>
        <button className="border border-brand-deep/20 px-6 py-2 text-sm font-medium hover:bg-brand-deep hover:text-brand-surface transition-colors">
          Log ind
        </button>
      </nav>

      {/* Hero */}
      <section className="px-8 pt-12 pb-24 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8">
            <h1 className="font-serif text-6xl md:text-8xl leading-[0.9] tracking-tight mb-8">
              Professionel styring af <br />
              <span className="italic">din ejendom.</span>
            </h1>
            <p className="max-w-md text-lg text-brand-deep/70 leading-relaxed">
              Vi forener klassisk jysk ordentlighed med moderne digitale værktøjer til
              ejendomsadministration, bogholderi og regnskab.
            </p>
          </div>
          <div className="lg:col-span-4">
            <img
              src={heroBuilding}
              alt="Detalje af en moderne dansk ejendomsfacade"
              width={800}
              height={1024}
              className="w-full aspect-[4/5] object-cover outline-1 -outline-offset-1 outline-black/5"
            />
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="ydelser" className="bg-brand-deep text-brand-surface py-32 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-20 gap-8">
            <h2 className="font-serif text-5xl italic">Vores ydelser</h2>
            <p className="max-w-sm text-brand-surface/60 text-sm leading-relaxed">
              Alt fra den daglige drift til de komplekse årsregnskaber. Vi tager hånd om hele
              processen.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-brand-surface/10 border border-brand-surface/10">
            {[
              {
                n: "01",
                t: "Ejendomsadministration",
                d: "Komplet håndtering af ejer-, andels- og udlejningsejendomme med fokus på gennemsigtighed.",
              },
              {
                n: "02",
                t: "Bogholderi & Drift",
                d: "Præcis bogføring, rettidig betaling af kreditorer og effektiv opkrævning af boligafgifter.",
              },
              {
                n: "03",
                t: "Regnskab & Revision",
                d: "Udarbejdelse af budgetter og årsregnskaber i tæt samarbejde med foreningens revisor.",
              },
            ].map((s) => (
              <article
                key={s.n}
                className="p-12 bg-brand-deep group hover:bg-brand-surface/5 transition-colors"
              >
                <span className="block text-xs font-medium uppercase tracking-widest text-brand-surface/40 mb-12">
                  {s.n}
                </span>
                <h3 className="text-3xl font-serif mb-6">{s.t}</h3>
                <p className="text-brand-surface/60 text-sm leading-relaxed mb-8">{s.d}</p>
                <div className="h-px w-12 bg-brand-surface/30 group-hover:w-full transition-all duration-500" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="px-8 py-32 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div>
            <img
              src={trustBlueprints}
              alt="Arkitekttegninger og pen på et lyst skrivebord"
              width={1216}
              height={800}
              loading="lazy"
              className="w-full aspect-video object-cover outline-1 -outline-offset-1 outline-black/5 mb-12"
            />
            <h2 className="font-serif text-4xl mb-6">Tryghed gennem erfaring</h2>
            <p className="text-brand-deep/70 leading-relaxed">
              Hos Fredensvang forstår vi, at administration handler om mennesker og deres hjem. Vi
              vægter den personlige dialog højt og sikrer, at bestyrelsen altid har det fulde
              overblik over ejendommens økonomi.
            </p>
          </div>

          <dl className="space-y-16">
            {[
              { v: "25+ år", l: "Erfaring i branchen" },
              { v: "150+", l: "Ejendomme under administration" },
              { v: "100%", l: "Digital workflow" },
            ].map((stat) => (
              <div key={stat.l} className="border-b border-brand-deep/10 pb-8">
                <dt className="block font-serif text-5xl mb-2">{stat.v}</dt>
                <dd className="text-xs font-medium uppercase tracking-widest text-brand-deep/50">
                  {stat.l}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Contact / Footer */}
      <footer id="kontakt" className="bg-brand-mute">
        <div className="max-w-7xl mx-auto">
          {/* Top Section: CTA */}
          <div className="grid grid-cols-1 lg:grid-cols-2 border-b border-brand-deep/10">
            <div className="px-8 py-16 md:py-24 lg:pr-20 flex flex-col justify-center lg:border-r border-brand-deep/10">
              <h2 className="font-serif text-4xl md:text-5xl text-brand-deep leading-tight mb-6">
                Skal vi tage en <br />
                <span className="italic">uforpligtende snak?</span>
              </h2>
              <p className="text-brand-deep/50 text-lg max-w-md leading-relaxed">
                Vi sidder klar til at rådgive dig om den bedste løsning for din forening eller ejendom.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2">
              <a
                href="mailto:kontor@fredensvang.com"
                className="group flex flex-col items-center justify-center px-8 py-16 md:py-24 bg-brand-deep text-brand-surface transition-all hover:bg-brand-deep/90"
              >
                <span className="text-xs font-sans uppercase tracking-widest mb-4 opacity-70 group-hover:opacity-100 transition-opacity">
                  Skriv til os
                </span>
                <span className="font-serif text-2xl">Kontakt os nu</span>
                <div className="h-px w-8 bg-brand-surface/30 mt-6 group-hover:w-16 transition-all" />
              </a>
              <a
                href="tel:+4520505015"
                className="group flex flex-col items-center justify-center px-8 py-16 md:py-24 bg-brand-surface text-brand-deep border-l border-brand-deep/10 transition-all hover:bg-brand-deep/[0.03]"
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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 px-8 py-16 md:py-20">
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <img src={logo} alt="Fredensvang Boligadministration ApS logo" className="h-12 w-auto" width={896} height={627} loading="lazy" />
              </div>
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
                  <a href="#ydelser" className="hover:text-brand-deep transition-colors">
                    Ejendomsadministration
                  </a>
                </li>
                <li>
                  <a href="#ydelser" className="hover:text-brand-deep transition-colors">
                    Bogholderi &amp; Drift
                  </a>
                </li>
                <li>
                  <a href="#ydelser" className="hover:text-brand-deep transition-colors">
                    Regnskab &amp; Revision
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-brand-deep/40 mb-8">
                Virksomheden
              </h3>
              <ul className="space-y-4 text-sm text-brand-deep/60">
                <li>
                  <a href="#" className="hover:text-brand-deep transition-colors">
                    Om os
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-brand-deep transition-colors">
                    Kontakt
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-brand-deep transition-colors">
                    Log ind
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-brand-deep/40 mb-8">
                Nyhedsbrev
              </h3>
              <div className="flex border-b border-brand-deep/20 pb-2">
                <input
                  type="email"
                  placeholder="Din email"
                  className="bg-transparent text-sm w-full outline-none py-1 text-brand-deep placeholder:text-brand-deep/30"
                />
                <button className="text-xs font-medium uppercase tracking-widest text-brand-deep whitespace-nowrap">
                  Tilmeld
                </button>
              </div>
              <p className="text-[11px] text-brand-deep/40 mt-4 leading-relaxed">
                Få indblik i moderne ejendomsdrift direkte i din indbakke.
              </p>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center px-8 py-8 border-t border-brand-deep/5 gap-6">
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
    </div>
  );
}
