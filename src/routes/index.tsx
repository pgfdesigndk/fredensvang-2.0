import { createFileRoute } from "@tanstack/react-router";
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
          <div className="size-8 bg-brand-deep rounded-sm" aria-hidden />
          <span className="font-serif italic text-2xl tracking-tight">Fredensvang</span>
        </a>
        <div className="hidden md:flex items-center gap-10 text-sm font-medium uppercase tracking-widest">
          <a href="#ydelser" className="hover:opacity-60 transition-opacity">
            Ejendomsadministration
          </a>
          <a href="#ydelser" className="hover:opacity-60 transition-opacity">
            Bogholderi
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
      <footer id="kontakt" className="bg-brand-mute px-8 py-24">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="font-serif text-5xl mb-8">Skal vi tage en uforpligtende snak?</h2>
          <p className="text-brand-deep/60 mb-12 max-w-lg mx-auto">
            Vi sidder klar til at rådgive dig om den bedste løsning for din forening eller ejendom.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <a
              href="mailto:info@fredensvang.com"
              className="bg-brand-deep text-brand-surface px-10 py-4 font-medium hover:bg-brand-deep/90 transition-colors"
            >
              Kontakt os nu
            </a>
            <a
              href="tel:+4586143300"
              className="border border-brand-deep/20 px-10 py-4 font-medium hover:bg-brand-deep/5 transition-colors"
            >
              Ring (+45) 86 14 33 00
            </a>
          </div>
          <div className="mt-24 pt-12 border-t border-brand-deep/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-medium uppercase tracking-widest text-brand-deep/40">
            <span>Fredensvang © {new Date().getFullYear()}</span>
            <div className="flex gap-8">
              <span>Persondatapolitik</span>
              <span>Betingelser</span>
              <span>CVR: 12345678</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
