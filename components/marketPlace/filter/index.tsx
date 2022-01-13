import Dropdown from 'components/common/Dropdown';
import { EnumRace, EnumRarity, EnumClass } from 'src/types';
import { useMarkerplaceContext } from '../context';

export function Filter() {
  const {
    filters,
    setFilterStars,
    setFilterClass,
    setFilterRace,
    setFilterRarity,
    metadata,
  } = useMarkerplaceContext();
  const total = metadata ? metadata.total : 0;
  return (
    <div className="filter relative z-10">
      <p className="total">{`Total(${total})`}</p>
      <div className="flex gap-10">
        <Dropdown
          options={RACE_OPTIONS}
          value={filters.race}
          onChange={setFilterRace}
          placeholder="Race"
        />
        <Dropdown<EnumClass>
          options={CLASS_OPTIONS}
          value={filters.nftClass}
          onChange={setFilterClass}
          placeholder="Class"
        />
        <Dropdown<EnumRarity>
          options={RARITY_OPTIONS}
          value={filters.rarity}
          onChange={setFilterRarity}
          placeholder="Rarity"
        />
        <Dropdown<number>
          options={STARS_OPTIONS}
          value={filters.stars}
          onChange={setFilterStars}
          placeholder="Stars"
        />
      </div>
    </div>
  );
}

const STARS_OPTIONS = [
  { value: 1, label: '★' },
  { value: 2, label: '★★' },
  { value: 3, label: '★★★' },
  { value: 4, label: '★★★★' },
  { value: 5, label: '★★★★★' },
];

const RACE_OPTIONS = [
  { value: EnumRace.Xebel, label: 'Xebel' },
  { value: EnumRace.Atlantis, label: 'Atlantis' },
  { value: EnumRace.Brine, label: 'Brine' },
  { value: EnumRace.Deserters, label: 'Deserters' },
  { value: EnumRace.Fisherman, label: 'Fisherman' },
  { value: EnumRace.Trench, label: 'Trench' },
  { value: EnumRace.HiddenKingdom, label: 'Hidden Kingdom' },
];

const RARITY_OPTIONS = [
  { value: EnumRarity.R, label: 'R' },
  { value: EnumRarity.SR, label: 'SR' },
  { value: EnumRarity.SSR, label: 'SSR' },
];

const CLASS_OPTIONS = [
  { value: EnumClass.Gunner, label: 'Gunner' },
  { value: EnumClass.Lancer, label: 'Lancer' },
  { value: EnumClass.Mage, label: 'Mage' },
  { value: EnumClass.Priest, label: 'Priest' },
  { value: EnumClass.Warrior, label: 'Warrior' },
];
