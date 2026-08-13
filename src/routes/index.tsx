import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
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
      <SiteNav />

      {/* Hero */}
      <section className="px-5 sm:px-8 pt-12 pb-24 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8">
            <h1 className="font-serif text-3xl sm:text-4xl sm:text-6xl md:text-8xl leading-[0.9] tracking-tight mb-8">
              Professionel styring af <br />
              <span className="italic">din ejendom.</span>
            </h1>
            <p className="max-w-xl text-lg text-brand-deep/70 leading-relaxed mb-6">
              Fredensvang Boligadministration har boliger til leje i store dele af Jylland. Vi
              udlejer rækkehuse og lejligheder, der dækker de fleste boligsøgendes behov.
            </p>
            <p className="max-w-xl text-brand-deep/60 leading-relaxed mb-8">
              Ledige lejemål annonceres her på hjemmesiden, på Facebook og på forskellige
              lejeportaler. Derudover tilbyder vi professionel ejendomsadministration, bogholderi
              og regnskab til både bolig- og erhvervsejendomme.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/ledige-boliger"
                className="border border-brand-deep/20 px-5 sm:px-8 py-3 text-sm font-medium uppercase tracking-widest hover:bg-brand-deep hover:text-brand-surface transition-colors"
              >
                Se ledige boliger
              </Link>
              <Link
                to="/ejendomsadministration"
                className="border border-brand-deep/20 px-5 sm:px-8 py-3 text-sm font-medium uppercase tracking-widest hover:bg-brand-deep hover:text-brand-surface transition-colors"
              >
                Ejendomsadministration
              </Link>
            </div>

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
      <section id="ydelser" className="bg-brand-deep text-brand-surface py-14 sm:py-20 sm:py-32 px-5 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-20 gap-8">
            <h2 className="font-serif text-3xl sm:text-5xl italic">Vores ydelser</h2>
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
                className="p-8 sm:p-12 bg-brand-deep group hover:bg-brand-surface/5 transition-colors"
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
      <section className="px-5 sm:px-8 py-14 sm:py-20 sm:py-32 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div>
            <img
              src={trustBlueprints}
              alt="Arkitekttegninger og pen på et lyst skrivebord"
              width={1216}
              height={800}
              loading="lazy"
              className="w-full aspect-video object-cover outline-1 -outline-offset-1 outline-black/5 mb-12"
            />
            <h2 className="font-serif text-3xl sm:text-4xl mb-6">Tryghed gennem erfaring</h2>
            <p className="text-brand-deep/70 leading-relaxed">
              Hos Fredensvang forstår vi, at administration handler om mennesker og deres hjem. Vi
              vægter den personlige dialog højt og sikrer, at bestyrelsen altid har det fulde
              overblik over ejendommens økonomi.
            </p>
          </div>

          <dl className="space-y-10 sm:space-y-16">
            {[
              { v: "25+ år", l: "Erfaring i branchen" },
              { v: "150+", l: "Ejendomme under administration" },
              { v: "100%", l: "Digital workflow" },
            ].map((stat) => (
              <div key={stat.l} className="border-b border-brand-deep/10 pb-8">
                <dt className="block font-serif text-3xl sm:text-5xl mb-2">{stat.v}</dt>
                <dd className="text-xs font-medium uppercase tracking-widest text-brand-deep/50">
                  {stat.l}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
