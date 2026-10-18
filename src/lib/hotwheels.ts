export type Rarity = "golden" | "grey" | "normal";

export type HotWheel = {
  name: string;
  rarity: Rarity;
};

export const rarityMeta: Record<
  Rarity,
  { label: string; blurb: string; chip: string; glow: string; text: string }
> = {
  golden: {
    label: "Golden",
    blurb: "The one you don't trade.",
    chip: "bg-amber-400 text-black border-amber-600",
    glow: "shadow-[0_0_80px_10px_rgba(251,191,36,0.55)]",
    text: "text-amber-500",
  },
  grey: {
    label: "Grey",
    blurb: "Hard to find. Easy to love.",
    chip: "bg-zinc-300 text-black border-zinc-500",
    glow: "shadow-[0_0_80px_10px_rgba(161,161,170,0.45)]",
    text: "text-zinc-400",
  },
  normal: {
    label: "Normal",
    blurb: "Mainline. Still a keeper.",
    chip: "bg-orange-600 text-orange-50 border-orange-800",
    glow: "shadow-[0_0_80px_10px_rgba(234,88,12,0.4)]",
    text: "text-orange-600",
  },
};

export const collection: HotWheel[] = [
  {
    name: "58 Impala",
    rarity: "grey",
  },
  {
    name: "67 Chevy C10",
    rarity: "normal",
  },
  {
    name: "70 Dodge Charger",
    rarity: "normal",
  },
  {
    name: "72 Stingray Convertible",
    rarity: "normal",
  },
  {
    name: "2023 Toyota Prius Prime",
    rarity: "normal",
  },
  {
    name: "2024 Toyota Tacoma",
    rarity: "normal",
  },
  {
    name: "Chevrolet Tri Five Terror",
    rarity: "normal",
  },
  {
    name: "MBX Field Car",
    rarity: "normal",
  },
  {
    name: "McLaren W1",
    rarity: "normal",
  },
  {
    name: "Pagani Zonda R",
    rarity: "normal",
  },
  {
    name: "Plymouth Barracuda",
    rarity: "normal",
  },
  {
    name: "Porche 911 Carrera RS 2.7",
    rarity: "normal",
  },
];
