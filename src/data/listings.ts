export type Listing = {
  id: string;
  address: string;
  city: string;
  zip: string;
  floor: string;
  rooms: number;
  size: number;
  title: string;
  price: number;
  deposit: number;
  available: string;
  description: string;
  features: string[];
};

export const LISTINGS: Listing[] = [
  {
    id: "1",
    address: "Søndergade 14",
    city: "Gedsted",
    zip: "9631",
    floor: "2. sal",
    rooms: 2,
    size: 60,
    title: "2-værelses lejlighed i Gedsted",
    price: 2950,
    deposit: 8850,
    available: "1. august 2026",
    description:
      "Hyggelig 2-værelses lejlighed centralt i Gedsted med lyse rum, nyere køkken og fælles gårdhave. Tæt på indkøb, skole og natur.",
    features: ["Eget køkken", "Eget bad", "Fælles vaskeri", "Cykelkælder"],
  },
  {
    id: "2",
    address: "Bredgade 27",
    city: "Hurup Thy",
    zip: "7760",
    floor: "1. sal",
    rooms: 2,
    size: 102,
    title: "2½ værelses lejlighed",
    price: 3950,
    deposit: 11850,
    available: "15. juli 2026",
    description:
      "Stor og lys 2½ værelses lejlighed i hjertet af Hurup Thy. Klassisk arkitektur, høje lofter og solrig altan mod gården.",
    features: ["Altan", "Højt til loftet", "Nyt badeværelse", "Tæt på centrum"],
  },
  {
    id: "3",
    address: "Thyborønvej 8",
    city: "Lemvig",
    zip: "7620",
    floor: "1. sal",
    rooms: 2,
    size: 42,
    title: "2-værelses lejlighed udlejes",
    price: 2450,
    deposit: 7350,
    available: "1. juli 2026",
    description:
      "Kompakt og velindrettet 2-værelses i Lemvig — ideel som første lejlighed. Tæt på havn og bymidte.",
    features: ["Eget køkken", "Eget bad", "Tæt på havn", "Opvaskemaskine"],
  },
  {
    id: "4",
    address: "Hjørringvej 41",
    city: "Østervrå",
    zip: "9750",
    floor: "Stuen",
    rooms: 3,
    size: 66,
    title: "3-værelses lejlighed",
    price: 3550,
    deposit: 10650,
    available: "1. september 2026",
    description:
      "Lys 3-værelses i stueplan med direkte adgang til have. Velegnet til par eller mindre familie.",
    features: ["Have", "Stueplan", "Eget bryggers", "Carport"],
  },
  {
    id: "5",
    address: "Randersvej 12",
    city: "Hobro",
    zip: "9500",
    floor: "1. sal",
    rooms: 1,
    size: 30,
    title: "1 vær. lejlighed med eget køkken og bad",
    price: 2975,
    deposit: 8925,
    available: "1. juli 2026",
    description:
      "Charmerende 1-værelses tæt på Hobro centrum. Perfekt til studerende eller singler.",
    features: ["Eget køkken", "Eget bad", "Centralt", "Tæt på station"],
  },
  {
    id: "6",
    address: "Vestergade 5",
    city: "Hobro",
    zip: "9500",
    floor: "2. sal",
    rooms: 3,
    size: 84,
    title: "3 vær. lejlighed med eget køkken og bad",
    price: 4250,
    deposit: 12750,
    available: "1. august 2026",
    description:
      "Rummelig 3-værelses i Hobro med god planløsning, lyse rum og kort afstand til alle faciliteter.",
    features: ["Eget køkken", "Eget bad", "Altan", "Fælles vaskeri"],
  },
  {
    id: "7",
    address: "Skovvej 19",
    city: "Hobro",
    zip: "9500",
    floor: "2. sal",
    rooms: 2,
    size: 63,
    title: "2-værelses lejlighed tæt på fjord og skov",
    price: 3675,
    deposit: 11025,
    available: "1. juli 2026",
    description:
      "Naturskønt beliggende 2-værelses med udsigt mod Mariager Fjord. Stille omgivelser tæt på skov og vand.",
    features: ["Fjordudsigt", "Tæt på skov", "Altan", "Parkering"],
  },
  {
    id: "8",
    address: "Nyvej 7",
    city: "Hobro",
    zip: "9500",
    floor: "Stuen",
    rooms: 3,
    size: 95,
    title: "3 værelser incl. stor stue på 95 m²",
    price: 5750,
    deposit: 17250,
    available: "1. august 2026",
    description:
      "Herskabelig 3-værelses i stueplan med stor stue og klassiske detaljer. Centralt og roligt beliggende.",
    features: ["Stor stue", "Stuk", "Bryggers", "Have"],
  },
  {
    id: "9",
    address: "Brogade 22",
    city: "Hobro",
    zip: "9500",
    floor: "1. sal",
    rooms: 3,
    size: 85,
    title: "3-værelses lejlighed udlejes",
    price: 5750,
    deposit: 17250,
    available: "15. august 2026",
    description:
      "Klassisk 3-værelses i hjertet af Hobro med store vinduer, oprindelige trægulve og masser af lys.",
    features: ["Trægulve", "Centralt", "Højt til loftet", "Altan"],
  },
];

export const formatPrice = (n: number) =>
  new Intl.NumberFormat("da-DK").format(n) + " kr.";
