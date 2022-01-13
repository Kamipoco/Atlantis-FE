import { EnumClass, EnumRace, EnumRarity } from 'src/types';

export interface IMarketplaceFilters {
  nftClass: EnumClass | undefined;
  race: EnumRace | undefined;
  rarity: EnumRarity | undefined;
  stars: number | undefined;
}
