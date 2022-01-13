import { EnumClass, EnumRace, EnumRarity } from 'src/types';

export interface IGenesisFilters {
  nftClass: EnumClass | undefined;
  race: EnumRace | undefined;
  rarity: EnumRarity | undefined;
  stars: number | undefined;
}
