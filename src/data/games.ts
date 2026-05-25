import { Game, Service, Stat } from "@/types";

export const games: Game[] = [
  {
    slug: "kingdom-of-ashen-throne",
    title: "Kingdom of Ashen Throne",
    description:
      "A dark medieval action RPG where players take on the role of a disgraced knight seeking redemption in a war-torn kingdom. Battle through cursed lands, siege enemy castles, and uncover a conspiracy that threatens the realm. Features brutal souls-like combat with historically-inspired weaponry and armor.",
    shortDescription:
      "Dark medieval action RPG with souls-like combat and castle sieges.",
    genre: ["Action RPG", "Medieval"],
    platforms: ["PC", "PlayStation", "Xbox"],
    status: "released",
    releaseDate: "2024-03-15",
    thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1029780/capsule_616x353.jpg",
    heroImage: "https://cdn.akamai.steamstatic.com/steam/apps/1029780/capsule_616x353.jpg",
    screenshots: [
      "https://cdn.akamai.steamstatic.com/steam/apps/1029780/capsule_616x353.jpg",
      "https://cdn.akamai.steamstatic.com/steam/apps/1029780/capsule_616x353.jpg",
      "https://cdn.akamai.steamstatic.com/steam/apps/1029780/capsule_616x353.jpg",
      "https://cdn.akamai.steamstatic.com/steam/apps/1029780/capsule_616x353.jpg",
    ],
    storeLinks: {
      steam: "https://store.steampowered.com",
    },
  },
  {
    slug: "siege-of-ironhold",
    title: "Siege of Ironhold",
    description:
      "A real-time strategy game set in a medieval fantasy world. Command armies of knights, archers, and siege engines to conquer enemy fortresses. Build your kingdom from a small village to a mighty empire through diplomacy, trade, and warfare.",
    shortDescription:
      "Medieval RTS with massive battles and kingdom building.",
    genre: ["Strategy", "Medieval"],
    platforms: ["PC"],
    status: "released",
    releaseDate: "2024-08-22",
    thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1158310/capsule_616x353.jpg",
    heroImage: "https://cdn.akamai.steamstatic.com/steam/apps/1158310/capsule_616x353.jpg",
    screenshots: [
      "https://cdn.akamai.steamstatic.com/steam/apps/1158310/capsule_616x353.jpg",
      "https://cdn.akamai.steamstatic.com/steam/apps/1158310/capsule_616x353.jpg",
      "https://cdn.akamai.steamstatic.com/steam/apps/1158310/capsule_616x353.jpg",
      "https://cdn.akamai.steamstatic.com/steam/apps/1158310/capsule_616x353.jpg",
    ],
    storeLinks: {
      steam: "https://store.steampowered.com",
    },
  },
  {
    slug: "blacksmith-legends",
    title: "Blacksmith Legends",
    description:
      "A cozy medieval simulation where you run your own blacksmith shop in a bustling fantasy town. Forge legendary weapons, fulfill orders from adventurers and kings, manage your apprentices, and expand your workshop.",
    shortDescription:
      "Cozy medieval blacksmith simulation with deep crafting mechanics.",
    genre: ["Simulation", "Medieval"],
    platforms: ["PC", "Nintendo Switch"],
    status: "released",
    releaseDate: "2023-11-10",
    thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1192900/capsule_616x353.jpg",
    heroImage: "https://cdn.akamai.steamstatic.com/steam/apps/1192900/capsule_616x353.jpg",
    screenshots: [
      "https://cdn.akamai.steamstatic.com/steam/apps/1192900/capsule_616x353.jpg",
      "https://cdn.akamai.steamstatic.com/steam/apps/1192900/capsule_616x353.jpg",
      "https://cdn.akamai.steamstatic.com/steam/apps/1192900/capsule_616x353.jpg",
      "https://cdn.akamai.steamstatic.com/steam/apps/1192900/capsule_616x353.jpg",
    ],
    storeLinks: {
      steam: "https://store.steampowered.com",
    },
  },
  {
    slug: "chronicles-of-the-fallen-order",
    title: "Chronicles of the Fallen Order",
    description:
      "An epic open-world RPG set in a dark medieval world inspired by European folklore. As a wandering mercenary, explore vast kingdoms, join factions, and shape the fate of nations through your choices.",
    shortDescription:
      "Open-world medieval RPG with faction warfare and branching stories.",
    genre: ["RPG", "Open World"],
    platforms: ["PC", "PlayStation"],
    status: "coming_soon",
    thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/379430/capsule_616x353.jpg",
    heroImage: "https://cdn.akamai.steamstatic.com/steam/apps/379430/capsule_616x353.jpg",
    screenshots: [
      "https://cdn.akamai.steamstatic.com/steam/apps/379430/capsule_616x353.jpg",
      "https://cdn.akamai.steamstatic.com/steam/apps/379430/capsule_616x353.jpg",
      "https://cdn.akamai.steamstatic.com/steam/apps/379430/capsule_616x353.jpg",
    ],
    storeLinks: {
      steam: "https://store.steampowered.com",
    },
  },
  {
    slug: "tavern-keeper",
    title: "Tavern Keeper",
    description:
      "Run the most legendary tavern in the medieval realm! Serve ale to weary adventurers, hire bards for entertainment, expand your establishment, and deal with rowdy patrons.",
    shortDescription:
      "Medieval tavern management sim with charming art and humor.",
    genre: ["Management", "Casual"],
    platforms: ["PC", "Mobile"],
    status: "coming_soon",
    thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/762590/capsule_616x353.jpg",
    heroImage: "https://cdn.akamai.steamstatic.com/steam/apps/762590/capsule_616x353.jpg",
    screenshots: [
      "https://cdn.akamai.steamstatic.com/steam/apps/762590/capsule_616x353.jpg",
      "https://cdn.akamai.steamstatic.com/steam/apps/762590/capsule_616x353.jpg",
      "https://cdn.akamai.steamstatic.com/steam/apps/762590/capsule_616x353.jpg",
    ],
    storeLinks: {
      steam: "https://store.steampowered.com",
    },
  },
];

export const services: Service[] = [
  {
    title: "Game Development",
    description: "Full-cycle game development from concept to launch across multiple platforms.",
    icon: "Gamepad2",
  },
  {
    title: "Game Art & Design",
    description: "Stunning 2D/3D art, character design, environment art, and UI/UX design.",
    icon: "Palette",
  },
  {
    title: "Porting & Optimization",
    description: "Cross-platform porting and performance optimization for all major platforms.",
    icon: "Monitor",
  },
  {
    title: "Live Operations",
    description: "Post-launch support, content updates, community management, and analytics.",
    icon: "Radio",
  },
];

export const stats: Stat[] = [
  { label: "Years of Experience", value: 8, suffix: "+" },
  { label: "Games Developed", value: 12, suffix: "+" },
  { label: "Team Members", value: 35, suffix: "" },
  { label: "Awards Won", value: 6, suffix: "" },
];

export const featuredSlugs = [
  "kingdom-of-ashen-throne",
  "siege-of-ironhold",
  "blacksmith-legends",
];
