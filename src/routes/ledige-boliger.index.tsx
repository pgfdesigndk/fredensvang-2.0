import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { useMemo, useState } from "react";
import { LISTINGS, formatPrice, type Listing } from "@/data/listings";
import apartmentInterior from "@/assets/apartment-interior.jpg";

export const Route = createFileRoute("/ledige-boliger/")({
  head: () => ({
    meta: [
      { title: "Ledige boliger — Fredensvang Boligadministration" },
      {
        name: "description",
        content:
          "Se aktuelle ledige lejligheder under Fredensvangs administration i Jylland. Filtrer på by, størrelse og husleje.",
      },
      { property: "og:title", content: "Ledige boliger — Fredensvang" },
      {
        property: "og:description",
        content: "Aktuelle ledige lejligheder under Fredensvangs administration.",
      },
    ],
  }),
  component: LedigeBoliger,
});


function LedigeBoliger() {
  const [city, setCity] = useState<string>("Alle");
  const [rooms, setRooms] = useState<string>("Alle");
  const [sort, setSort] = useState<string>("price-asc");

  const cities = useMemo(
    () => ["Alle", ...Array.from(new Set(LISTINGS.map((l) => l.city))).sort()],
    [],
  );

  const filtered = useMemo(() => {
    let list = LISTINGS.filter((l) => (city === "Alle" ? true : l.city === city)).filter(
      (l) => (rooms === "Alle" ? true : l.rooms === Number(rooms)),
    );
    list = [...list].sort((a, b) => {
      if (sort === "price-asc") return a.price - b.price;
      if (sort === "price-desc") return b.price - a.price;
      if (sort === "size-desc") return b.size - a.size;
      return a.size - b.size;
    });
    return list;
  }, [city, rooms, sort]);

  return (
    <div className="min-h-screen bg-brand-surface font-sans text-brand-deep">
      <SiteNav />

      {/* Header */}
      <section className="px-5 sm:px-8 pt-12 pb-16 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 items-end border-b border-brand-deep/10 pb-12">
          <div className="lg:col-span-8">
            <span className="block text-xs font-medium uppercase tracking-widest text-brand-deep/40 mb-6">
              Index — {filtered.length} ledige boliger
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl sm:text-6xl md:text-7xl leading-[0.95] tracking-tight">
              Ledige boliger <br />
              <span className="italic">i Jylland.</span>
            </h1>
          </div>
          <div className="lg:col-span-4">
            <p className="text-brand-deep/70 leading-relaxed">
              Aktuelt udvalg af lejligheder under Fredensvangs administration. Kontakt os for
              fremvisning og personlig rådgivning.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="px-5 sm:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-brand-deep/10 border border-brand-deep/10">
          <FilterSelect
            label="By"
            value={city}
            onChange={setCity}
            options={cities.map((c) => ({ value: c, label: c }))}
          />
          <FilterSelect
            label="Værelser"
            value={rooms}
            onChange={setRooms}
            options={[
              { value: "Alle", label: "Alle" },
              { value: "1", label: "1 værelse" },
              { value: "2", label: "2 værelser" },
              { value: "3", label: "3 værelser" },
            ]}
          />
          <FilterSelect
            label="Sortering"
            value={sort}
            onChange={setSort}
            options={[
              { value: "price-asc", label: "Pris lav → høj" },
              { value: "price-desc", label: "Pris høj → lav" },
              { value: "size-desc", label: "Størrelse stor → lille" },
              { value: "size-asc", label: "Størrelse lille → stor" },
            ]}
          />
          <button
            onClick={() => {
              setCity("Alle");
              setRooms("Alle");
              setSort("price-asc");
            }}
            className="bg-brand-surface px-6 py-5 text-left group hover:bg-brand-deep hover:text-brand-surface transition-colors"
          >
            <span className="block text-[10px] font-medium uppercase tracking-[0.2em] opacity-50 mb-2">
              Filtre
            </span>
            <span className="font-serif italic text-lg">Ryd alle →</span>
          </button>
        </div>
      </section>

      {/* Listings */}
      <section className="px-5 sm:px-8 py-16 max-w-7xl mx-auto">
        {filtered.length === 0 ? (
          <div className="border border-brand-deep/10 py-16 sm:py-24 text-center">
            <p className="font-serif text-3xl italic mb-3">Ingen boliger matcher.</p>
            <p className="text-sm text-brand-deep/60">Prøv at justere dine filtre.</p>
          </div>
        ) : (
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {filtered.map((l, i) => (
              <li key={l.id}>
                <Link to="/ledige-boliger/$id" params={{ id: l.id }} className="block group cursor-pointer">
                  <article>
                  <div className="relative overflow-hidden mb-6 bg-brand-mute aspect-[4/5]">
                    <img
                      src={apartmentInterior}
                      alt={`${l.title}, ${l.address}, ${l.city}`}
                      width={1024}
                      height={768}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <span className="absolute top-4 left-4 bg-brand-surface/90 backdrop-blur px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em]">
                      {String(i + 1).padStart(2, "0")} / {String(filtered.length).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="flex items-baseline justify-between mb-3">
                    <span className="text-xs font-medium uppercase tracking-widest text-brand-deep/50">
                      {l.address}, {l.city}
                    </span>
                    <span className="font-serif text-xl">{formatPrice(l.price)}</span>
                  </div>

                  <h3 className="font-serif text-2xl leading-tight mb-4">{l.title}</h3>

                  <dl className="flex gap-6 text-xs text-brand-deep/60 border-t border-brand-deep/10 pt-4">
                    <div>
                      <dt className="sr-only">Type</dt>
                      <dd>Lejlighed</dd>
                    </div>
                    <div>
                      <dt className="sr-only">Etage</dt>
                      <dd>{l.floor}</dd>
                    </div>
                    <div>
                      <dt className="sr-only">Værelser</dt>
                      <dd>{l.rooms} vær.</dd>
                    </div>
                    <div>
                      <dt className="sr-only">Størrelse</dt>
                      <dd>{l.size} m²</dd>
                    </div>
                  </dl>
                  </article>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>

      {/* CTA strip */}
      <section className="bg-brand-deep text-brand-surface px-5 sm:px-8 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-end">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl leading-tight">
            Fandt du ikke det rette? <br />
            <span className="italic text-brand-surface/70">Skriv dig op til ventelisten.</span>
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 md:justify-end">
            <a
              href="mailto:kontor@fredensvang.com"
              className="px-5 sm:px-8 py-4 bg-brand-surface text-brand-deep text-sm font-medium uppercase tracking-widest hover:bg-brand-surface/90 transition-colors text-center"
            >
              Kontakt os
            </a>
            <a
              href="tel:+4520505015"
              className="px-5 sm:px-8 py-4 border border-brand-surface/30 text-sm font-medium uppercase tracking-widest hover:bg-brand-surface/10 transition-colors text-center"
            >
              (+45) 20 50 50 15
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <SiteFooter />
    </div>
  );
}

function FilterSelect({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: { value: string; label: string }[];
}) {
  return (
    <label className="bg-brand-surface px-6 py-5 block cursor-pointer hover:bg-brand-deep/[0.02] transition-colors">
      <span className="block text-[10px] font-medium uppercase tracking-[0.2em] text-brand-deep/50 mb-2">
        {label}
      </span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-transparent font-serif italic text-lg outline-none cursor-pointer appearance-none"
      >
        {options.map((o) => (
          <option key={o.value} value={o.value} className="font-sans not-italic text-base">
            {o.label}
          </option>
        ))}
      </select>
    </label>
  );
}
