import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import trustBlueprints from "@/assets/trust-blueprints.jpg";

export const Route = createFileRoute("/om-os")({
  head: () => ({
    meta: [
      { title: "Om os — Fredensvang Boligadministration ApS" },
      {
        name: "description",
        content:
          "Mød personalet bag Fredensvang Boligadministration i Hobro. Erfaring med administration, revision og drift af bolig- og erhvervsejendomme i Jylland.",
      },
      { property: "og:title", content: "Om os — Fredensvang Boligadministration" },
      {
        property: "og:description",
        content: "Mød personalet bag Fredensvang Boligadministration i Hobro.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: OmOs,
});

const STAFF = [
  {
    initials: "SBP",
    name: "Sandra Bastrup Pedersen",
    role: "Administration",
    bio: [
      "Sandra har flere års erfaring inden for kontor og administration og har en diplomuddannelse i administration.",
      "Til daglig står hun for den løbende kontakt til lejere, opkrævninger og den administrative drift af ejendommene.",
    ],
  },
  {
    initials: "JBP",
    name: "Jan Bastrup Pedersen",
    role: "Administration",
    bio: [
      "Jan er uddannet revisor med HD (R) og cand.merc.aud. fra Aalborg Universitet og har tidligere været Finance Manager og CFO i større jyske virksomheder.",
      "Han er desuden udlejerrepræsentant i Mariagerfjord Huslejenævn og lægdommer i Boligretten i Aalborg.",
    ],
  },
];

function OmOs() {
  return (
    <div className="min-h-screen bg-brand-surface font-sans text-brand-deep">
      <SiteNav />

      <section className="px-5 sm:px-8 pt-12 pb-20 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 items-end border-b border-brand-deep/10 pb-16">
          <div className="lg:col-span-8">
            <span className="block text-xs font-medium uppercase tracking-widest text-brand-deep/40 mb-8">
              Om os
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl leading-[0.95] tracking-tight mb-8">
              Mennesker bag <br />
              <span className="italic">administrationen.</span>
            </h1>
            <p className="max-w-xl text-lg text-brand-deep/70 leading-relaxed">
              Fredensvang Boligadministration har til huse i Hobro og administrerer bolig- og
              erhvervsejendomme i store dele af Jylland. Vi er en lille, personlig administration,
              hvor du taler med de samme mennesker hver gang.
            </p>
          </div>
          <div className="lg:col-span-4">
            <img
              src={trustBlueprints}
              alt="Arkitekttegninger og pen på et lyst skrivebord"
              width={1216}
              height={800}
              className="w-full aspect-[4/3] object-cover outline-1 -outline-offset-1 outline-black/5"
            />
          </div>
        </div>
      </section>

      {/* Personale */}
      <section className="px-5 sm:px-8 pb-24 max-w-7xl mx-auto">
        <h2 className="font-serif text-3xl sm:text-4xl italic mb-12">Personale</h2>
        <div className="grid md:grid-cols-2 gap-px bg-brand-deep/10 border border-brand-deep/10">
          {STAFF.map((p) => (
            <article key={p.name} className="bg-brand-surface p-10 md:p-12">
              <div className="flex items-center gap-6 mb-8">
                <div className="h-20 w-20 shrink-0 bg-brand-deep text-brand-surface flex items-center justify-center font-serif text-xl tracking-wide">
                  {p.initials}
                </div>
                <div>
                  <h3 className="font-serif text-2xl leading-tight">{p.name}</h3>
                  <p className="text-xs font-medium uppercase tracking-widest text-brand-deep/40 mt-2">
                    {p.role}
                  </p>
                </div>
              </div>
              <div className="space-y-4 text-brand-deep/70 text-sm leading-relaxed mb-8">
                {p.bio.map((t) => (
                  <p key={t}>{t}</p>
                ))}
              </div>
              <dl className="text-sm border-t border-brand-deep/10 pt-6 space-y-2">
                <div className="flex gap-3">
                  <dt className="text-brand-deep/40 w-16">E-mail</dt>
                  <dd>
                    <a href="mailto:kontor@fredensvang.com" className="hover:opacity-60">
                      kontor@fredensvang.com
                    </a>
                  </dd>
                </div>
                <div className="flex gap-3">
                  <dt className="text-brand-deep/40 w-16">Telefon</dt>
                  <dd>
                    <a href="tel:+4520505015" className="hover:opacity-60">
                      (+45) 20 50 50 15
                    </a>
                  </dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
        <p className="text-sm text-brand-deep/50 mt-8">
          Derudover har vi tilknyttet viceværter til de enkelte ejendomme.
        </p>
      </section>

      {/* Værdier */}
      <section className="bg-brand-deep text-brand-surface py-16 sm:py-24 px-5 sm:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
          {[
            {
              t: "Ordentlighed",
              d: "Al gældende lovgivning over for lejer, udlejer og offentlige myndigheder bliver overholdt — hver gang.",
            },
            {
              t: "Nærvær",
              d: "Personlig dialog frem for sagsnumre. Du taler med den samme administrator gennem hele forløbet.",
            },
            {
              t: "Overblik",
              d: "Løbende økonomisk rapportering, så bestyrelse og ejere altid kender ejendommens økonomi.",
            },
          ].map((v) => (
            <div key={v.t}>
              <h3 className="font-serif text-3xl mb-4">{v.t}</h3>
              <p className="text-brand-surface/60 text-sm leading-relaxed">{v.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 sm:px-8 py-16 sm:py-24 max-w-7xl mx-auto text-center">
        <h2 className="font-serif text-3xl sm:text-4xl mb-6">Skal vi administrere din ejendom?</h2>
        <Link
          to="/ejendomsadministration"
          className="inline-block border border-brand-deep/20 px-5 sm:px-8 py-3 text-sm font-medium uppercase tracking-widest hover:bg-brand-deep hover:text-brand-surface transition-colors"
        >
          Se vores ydelser
        </Link>
      </section>

      <SiteFooter />
    </div>
  );
}
