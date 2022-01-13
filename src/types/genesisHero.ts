export interface HeroTextureColorBaseTypes {
  arm: number;
  belt: number;
  pant: number;
  cloak: number;
  shoes: number;
  helmet: number;
  bodyarmor: number;
}

export interface GenesisHeroTypes {
  id: string;
  hp: number;
  atk: number;
  pdef: number;
  level: number;
  stars: number;
  rarity: string;
  race: string;
  class: HeroClass;
  image: string;
  colors: HeroTextureColorBaseTypes;
  metaURL: string;
}

export type HeroRace =
  | "Atlantis"
  | "Xebel"
  | "Brine"
  | "Fisherman"
  | "Trench"
  | "Deserters"
  | "HiddenKingdom";
export type HeroClass = "Warrior" | "Lancer" | "Mage" | "Gunner" | "Priest";
