export interface IResponseMetadata {
  page: number;
  limit: number;
  total: number;
}

export enum EnumNFTType {
  Hero = 'HERO',
  Weapon = 'WEAPON',
  Armor = 'ARMOR',
}

export enum EnumRace {
  Atlantis = 'Atlantis',
  Xebel = 'Xebel',
  Brine = 'Brine',
  Fisherman = 'Fisherman',
  Trench = 'Trench',
  Deserters = 'Deserters',
  HiddenKingdom = 'HiddenKingdom',
}

export enum EnumRarity {
  R = 'R',
  SR = 'SR',
  SSR = 'SSR',
}

export enum EnumClass {
  Warrior = 'Warrior',
  Lancer = 'Lancer',
  Mage = 'Mage',
  Gunner = 'Gunner',
  Priest = 'Priest',
}

export interface INFTItem {
  atk: number;
  class: EnumClass;
  colors: Array<string> | null;
  equippedArmorTokenId: number | null;
  equippedWeaponTokenId: number | null;
  hp: number;
  id: string;
  level: number;
  marketplaceId: string;
  nftType: EnumNFTType;
  pdef: number;
  race: EnumRace;
  rarity: EnumRarity;
  stars: number;
  tokenId: number;
  walletAddress: string;
  Marketplace: {
    id: string;
    itemId: 1;
    price: string;
  };
}

export interface IGenesisHero {
  atk: number;
  class: EnumClass;
  colors: Array<string> | null;
  hp: number;
  id: string;
  image: string;
  level: number;
  metaURL: string;
  nonce: string | null;
  pdef: number;
  race: EnumRace;
  rarity: EnumRarity;
  stars: number;
  redeemed: boolean;
  price: string;
}
