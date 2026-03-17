export interface Beer {
  id: string;
  name: string;
  style: string;
  description: string;
  image?: string;
  untappdUrl?: string;
  untappdRating?: number;
}

export const beers: Beer[] = [
  {
    id: "1",
    name: "Blackcurrant Fruity Mead",
    style: "Mead - Melomel",
    image: "/beers/mead-bk.webp",
    description: "Blackcurrant Fruity Mead is a sweet and fruity mead brewed with blackcurrants",
    untappdUrl: "https://untappd.com/b/odu-brewery-fruity-mead-blackcurrant/6552604",
  },
  {
    id: "2",
    name: "BRIX - Mango, Passion Fruit And Lychees",
    style: "Smoothie",
    image: "/beers/brix-mpl.webp",
    description: "BRIX is a heavily fruited beersmoothie brewed with mango, passion fruit and lychees",
    untappdUrl: "https://untappd.com/b/odu-brewery-brix-mango-passion-fruit-and-lychees/5617351",
  },
  {
    id: "3",
    name: "Clown Fish",
    style: " TDH IPA",
    image: "/beers/clownfish.webp",
    description: "Clown Fish is a Triple Dry Hopped IPA brewed with Nectaron, Lupomax Mosaic and Citra hops",
    untappdUrl: "https://untappd.com/b/odu-brewery-clown-fish-tdh-ipa/6450000",
  },
];
