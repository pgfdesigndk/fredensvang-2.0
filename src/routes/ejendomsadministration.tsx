import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import heroBuilding from "@/assets/hero-building.jpg";
import apartmentExterior from "@/assets/apartment-exterior.jpg";

export const Route = createFileRoute("/ejendomsadministration")({
  head: () => ({
    meta: [
      { title: "Ejendomsadministration — Fredensvang Boligadministration" },
      {
        name: "description",
        content:
          "Professionel administration af bolig- og erhvervsejendomme: huslejeopkrævning, forbrugsregnskaber, bogføring, budgetter, lejekontrakter og flytteafregninger.",
      },
      { property: "og:title", content: "Ejendomsadministration — Fredensvang" },
      {
        property: "og:description",
        content:
          "Administrative og regnskabsmæssige opgaver for din bolig- eller erhvervsejendom — samlet ét sted.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Ejendomsadministration,
});

const SERVICES = [
  { t: "Huslejeopkrævning", d: "Rettidig opkrævning af husleje og a conto-bidrag." },
  { t: "Rykkerprocedurer", d: "Konsekvent og lovmedholdelig opfølgning på restancer." },
  { t: "Lejeforhøjelser", d: "Beregning og varsling efter gældende lejelovgivning." },
  { t: "Forbrugsregnskaber", d: "Vand-, el-, varme- og øvrige forbrugsregnskaber." },
  { t: "Kontakt & koordinering", d: "Dialog med lejere, leverandører og samarbejdspartnere." },
  { t: "Bogføring & betaling", d: "Bogføring samt kontrol og betaling af fakturaer og faste udgifter." },
  { t: "Økonomisk rapportering", d: "Løbende overblik over ejendommens økonomi." },
  { t: "Budgetlægning", d: "Budgetter for både drift og vedligeholdelse." },
  { t: "Selskabsadministration", d: "Administration af selskabet bag ejendommen." },
  { t: "Løn & moms", d: "Lønbehandling og momsangivelse." },
  { t: "Lejekontrakter", d: "Udarbejdelse af kontrakter og tillæg." },
  { t: "Ind- & fraflytning", d: "Håndtering af flytninger inkl. flytteafregninger." },
];

function Ejendomsadministration() {
  return (
    <div className="min-h-screen bg-brand-surface font-sans text-brand-deep">
      <SiteNav />

      <section className="px-8 pt-12 pb-20 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-7">
            <span className="block text-xs font-medium uppercase tracking-widest text-brand-deep/40 mb-8">
              Ydelse
            </span>
            <h1 className="font-serif text-6xl md:text-7xl leading-[0.95] tracking-tight mb-8">
              Ejendoms­<span className="italic">administration.</span>
            </h1>
            <p className="max-w-xl text-lg text-brand-deep/70 leading-relaxed mb-6">
              Vi tilbyder professionel håndtering af alle administrative og regnskabsmæssige
              opgaver omkring din ejendom — uanset om der er tale om bolig eller erhverv.
            </p>
            <p className="max-w-xl text-brand-deep/60 leading-relaxed">
              Med stor erfaring på området sikrer vi effektiv drift af ejendommen, hvor gældende
              lovgivning i forhold til lejer, udlejer og offentlige myndigheder bliver overholdt.
            </p>
          </div>
          <div className="lg:col-span-5">
            <img
              src={heroBuilding}
              alt="Facade på en dansk udlejningsejendom"
              width={800}
              height={1024}
              className="w-full aspect-[4/3] object-cover outline-1 -outline-offset-1 outline-black/5"
            />
          </div>
        </div>
      </section>

      {/* Ydelser */}
      <section id="ydelser" className="bg-brand-deep text-brand-surface py-28 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-16 gap-8">
            <h2 className="font-serif text-5xl italic">Vores ydelser omfatter bl.a.</h2>
            <p className="max-w-sm text-brand-surface/60 text-sm leading-relaxed">
              Vi sammensætter aftalen efter ejendommens behov — fra ren bogføring til fuld
              administration.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-brand-surface/10 border border-brand-surface/10">
            {SERVICES.map((s, i) => (
              <article key={s.t} className="p-8 bg-brand-deep group hover:bg-brand-surface/5 transition-colors">
                <span className="block text-xs font-medium uppercase tracking-widest text-brand-surface/40 mb-8">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-xl font-serif mb-3">{s.t}</h3>
                <p className="text-brand-surface/60 text-sm leading-relaxed">{s.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Proces */}
      <section className="px-8 py-28 max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        <img
          src={apartmentExterior}
          alt="Udlejningsejendom set udefra"
          width={1216}
          height={800}
          loading="lazy"
          className="w-full aspect-[4/3] object-cover outline-1 -outline-offset-1 outline-black/5"
        />
        <div>
          <h2 className="font-serif text-4xl mb-8">Sådan kommer du i gang</h2>
          <ol className="space-y-8">
            {[
              ["Uforpligtende møde", "Vi gennemgår ejendommen, dens økonomi og dine ønsker."],
              ["Tilbud & aftale", "Du får et konkret tilbud på det administrationsomfang, du har brug for."],
              ["Overtagelse", "Vi overtager bilag, kontrakter og lejerkontakt — og informerer lejerne."],
              ["Løbende drift", "Opkrævning, bogføring, rapportering og årsregnskab kører fra dag ét."],
            ].map(([t, d], i) => (
              <li key={t} className="flex gap-6 border-b border-brand-deep/10 pb-8">
                <span className="font-serif text-3xl text-brand-deep/30">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="font-serif text-2xl mb-2">{t}</h3>
                  <p className="text-brand-deep/60 text-sm leading-relaxed">{d}</p>
                </div>
              </li>
            ))}
          </ol>
          <Link
            to="/om-os"
            className="inline-block mt-10 border border-brand-deep/20 px-8 py-3 text-sm font-medium uppercase tracking-widest hover:bg-brand-deep hover:text-brand-surface transition-colors"
          >
            Mød administrationen
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
