import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { LISTINGS, formatPrice } from "@/data/listings";
import apartmentInterior from "@/assets/apartment-interior.jpg";
import apartmentKitchen from "@/assets/apartment-kitchen.jpg";
import apartmentBedroom from "@/assets/apartment-bedroom.jpg";
import apartmentBathroom from "@/assets/apartment-bathroom.jpg";
import apartmentExterior from "@/assets/apartment-exterior.jpg";

export const Route = createFileRoute("/ledige-boliger/$id")({
  loader: ({ params }) => {
    const listing = LISTINGS.find((l) => l.id === params.id);
    if (!listing) throw notFound();
    return { listing };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          {
            title: `${loaderData.listing.title} — ${loaderData.listing.city} | Fredensvang`,
          },
          { name: "description", content: loaderData.listing.description },
          { property: "og:title", content: loaderData.listing.title },
          { property: "og:description", content: loaderData.listing.description },
        ]
      : [{ title: "Bolig — Fredensvang" }],
  }),
  notFoundComponent: () => (
    <div className="min-h-screen bg-brand-surface flex items-center justify-center font-sans text-brand-deep">
      <div className="text-center px-8">
        <p className="text-[10px] uppercase tracking-[0.2em] text-brand-deep/40 mb-4">404</p>
        <h1 className="font-serif text-5xl italic mb-6">Bolig ikke fundet.</h1>
        <Link
          to="/ledige-boliger"
          className="text-sm uppercase tracking-widest underline underline-offset-8"
        >
          Tilbage til ledige boliger
        </Link>
      </div>
    </div>
  ),
  errorComponent: ({ reset }) => (
    <div className="min-h-screen bg-brand-surface flex items-center justify-center font-sans text-brand-deep">
      <div className="text-center px-8">
        <h1 className="font-serif text-4xl italic mb-6">Noget gik galt.</h1>
        <button onClick={reset} className="text-sm uppercase tracking-widest underline underline-offset-8">
          Prøv igen
        </button>
      </div>
    </div>
  ),
  component: ListingDetail,
});

function ListingDetail() {
  const { listing } = Route.useLoaderData();
  const gallery = [
    { src: apartmentInterior, alt: `${listing.title} — opholdsstue` },
    { src: apartmentKitchen, alt: `${listing.title} — køkken` },
    { src: apartmentBedroom, alt: `${listing.title} — soveværelse` },
    { src: apartmentBathroom, alt: `${listing.title} — badeværelse` },
    { src: apartmentExterior, alt: `${listing.title} — facade` },
  ];
  const [active, setActive] = useState(0);

  return (
    <div className="min-h-screen bg-brand-surface font-sans text-brand-deep">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
        <Link to="/" className="flex items-center gap-2">
          <div className="size-8 bg-brand-deep rounded-sm" aria-hidden />
          <span className="font-serif italic text-2xl tracking-tight">Fredensvang</span>
        </Link>
        <div className="hidden md:flex items-center gap-10 text-sm font-medium uppercase tracking-widest">
          <Link to="/" className="hover:opacity-60 transition-opacity">Startside</Link>
          <Link to="/ledige-boliger" className="hover:opacity-60 transition-opacity">Ledige boliger</Link>
          <Link to="/" hash="kontakt" className="hover:opacity-60 transition-opacity">Kontakt</Link>
        </div>
        <button className="border border-brand-deep/20 px-6 py-2 text-sm font-medium hover:bg-brand-deep hover:text-brand-surface transition-colors">
          Log ind
        </button>
      </nav>

      {/* Breadcrumb */}
      <div className="px-8 max-w-7xl mx-auto pt-4 pb-8 text-[10px] uppercase tracking-[0.2em] text-brand-deep/40">
        <Link to="/" className="hover:text-brand-deep">Forside</Link>
        <span className="mx-3">/</span>
        <Link to="/ledige-boliger" className="hover:text-brand-deep">Ledige boliger</Link>
        <span className="mx-3">/</span>
        <span className="text-brand-deep/70">{listing.address}, {listing.city}</span>
      </div>

      {/* Header */}
      <header className="px-8 max-w-7xl mx-auto pb-10 border-b border-brand-deep/10">
        <div className="grid lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8">
            <span className="block text-xs font-medium uppercase tracking-widest text-brand-deep/40 mb-6">
              Bolig nr. {listing.id.padStart(2, "0")} — {listing.city}
            </span>
            <h1 className="font-serif text-5xl md:text-7xl leading-[0.95] tracking-tight">
              {listing.title.split(" ").slice(0, -2).join(" ")} <br />
              <span className="italic">{listing.title.split(" ").slice(-2).join(" ")}.</span>
            </h1>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <span className="block text-[10px] font-medium uppercase tracking-[0.2em] text-brand-deep/40 mb-3">
              Månedlig leje
            </span>
            <span className="font-serif text-5xl">{formatPrice(listing.price)}</span>
          </div>
        </div>
      </header>

      {/* Gallery */}
      <section className="px-8 max-w-7xl mx-auto py-12">
        <div className="grid lg:grid-cols-12 gap-6">
          <div className="lg:col-span-9">
            <div className="relative bg-brand-mute aspect-[4/3] overflow-hidden">
              <img
                src={gallery[active].src}
                alt={gallery[active].alt}
                width={1024}
                height={768}
                className="w-full h-full object-cover"
              />
              <span className="absolute top-4 left-4 bg-brand-surface/90 backdrop-blur px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em]">
                {String(active + 1).padStart(2, "0")} / {String(gallery.length).padStart(2, "0")}
              </span>
            </div>
          </div>
          <div className="lg:col-span-3 grid grid-cols-5 lg:grid-cols-2 gap-3">
            {gallery.map((g, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`relative aspect-square overflow-hidden transition-opacity ${
                  active === i ? "opacity-100 ring-2 ring-brand-deep" : "opacity-60 hover:opacity-100"
                }`}
                aria-label={`Vis billede ${i + 1}`}
              >
                <img
                  src={g.src}
                  alt={g.alt}
                  width={256}
                  height={256}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Description + facts */}
      <section className="px-8 max-w-7xl mx-auto pb-20 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-7">
          <h2 className="font-serif text-3xl italic mb-6">Om boligen</h2>
          <p className="text-brand-deep/75 leading-relaxed text-lg mb-10">{listing.description}</p>

          <h3 className="text-[10px] uppercase tracking-[0.2em] text-brand-deep/40 mb-5">Faciliteter</h3>
          <ul className="grid sm:grid-cols-2 gap-y-3 gap-x-6 border-t border-brand-deep/10">
            {listing.features.map((f: string) => (
              <li key={f} className="flex items-center gap-3 border-b border-brand-deep/10 py-3 text-sm">
                <span className="size-1.5 bg-brand-deep rounded-full" aria-hidden />
                {f}
              </li>
            ))}
          </ul>
        </div>

        <aside className="lg:col-span-5">
          <div className="border border-brand-deep/10 p-8">
            <h3 className="text-[10px] uppercase tracking-[0.2em] text-brand-deep/40 mb-6">
              Nøgleoplysninger
            </h3>
            <dl className="divide-y divide-brand-deep/10">
              <Fact label="Adresse" value={`${listing.address}, ${listing.floor}`} />
              <Fact label="By" value={`${listing.zip} ${listing.city}`} />
              <Fact label="Værelser" value={`${listing.rooms} værelser`} />
              <Fact label="Størrelse" value={`${listing.size} m²`} />
              <Fact label="Månedlig leje" value={formatPrice(listing.price)} />
              <Fact label="Depositum" value={formatPrice(listing.deposit)} />
              <Fact label="Ledig fra" value={listing.available} />
            </dl>

            <div className="mt-8 flex flex-col gap-3">
              <a
                href={`mailto:info@fredensvang.com?subject=Interesse i ${encodeURIComponent(listing.address + ", " + listing.city)}`}
                className="px-6 py-4 bg-brand-deep text-brand-surface text-sm font-medium uppercase tracking-widest hover:bg-brand-deep/90 transition-colors text-center"
              >
                Skriv dig op
              </a>
              <a
                href="tel:+4586143300"
                className="px-6 py-4 border border-brand-deep/20 text-sm font-medium uppercase tracking-widest hover:bg-brand-deep hover:text-brand-surface transition-colors text-center"
              >
                Ring (+45) 86 14 33 00
              </a>
            </div>
          </div>
        </aside>
      </section>

      {/* Related */}
      <section className="bg-brand-mute px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-10 border-b border-brand-deep/10 pb-6">
            <h2 className="font-serif text-3xl md:text-4xl italic">Andre ledige boliger</h2>
            <Link
              to="/ledige-boliger"
              className="text-xs uppercase tracking-widest hover:opacity-60"
            >
              Se alle →
            </Link>
          </div>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {LISTINGS.filter((l) => l.id !== listing.id)
              .slice(0, 3)
              .map((l) => (
                <li key={l.id}>
                  <Link to="/ledige-boliger/$id" params={{ id: l.id }} className="block group">
                    <div className="aspect-[4/5] overflow-hidden bg-brand-surface mb-4">
                      <img
                        src={apartmentInterior}
                        alt={l.title}
                        width={1024}
                        height={768}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex items-baseline justify-between mb-2">
                      <span className="text-xs uppercase tracking-widest text-brand-deep/50">
                        {l.address}, {l.city}
                      </span>
                      <span className="font-serif text-lg">{formatPrice(l.price)}</span>
                    </div>
                    <h3 className="font-serif text-xl leading-tight">{l.title}</h3>
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between items-baseline py-4 gap-6">
      <dt className="text-[10px] uppercase tracking-[0.2em] text-brand-deep/40">{label}</dt>
      <dd className="font-serif text-base text-right">{value}</dd>
    </div>
  );
}
