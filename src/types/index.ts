export interface Game {
  slug: string;
  title: string;
  description: string;
  shortDescription: string;
  genre: string[];
  platforms: string[];
  status: "released" | "coming_soon";
  releaseDate?: string;
  thumbnail: string;
  heroImage: string;
  screenshots: string[];
  storeLinks: {
    steam?: string;
    playStore?: string;
    appStore?: string;
    itch?: string;
  };
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface Stat {
  label: string;
  value: number;
  suffix?: string;
}
