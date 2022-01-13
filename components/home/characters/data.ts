export interface ICharacter {
  race: string;
  name: string;
  isComingSoon: boolean;
  image: string;
  symbolImage: string;
}
export interface ICharacterDetail {
  race: string;
  name: string;
  hp: number;
  atk: number;
  def: number;
  story: string;
  source: string;
  classIcon: string;
  weapon: string;
}

export const DATA: ICharacter[] = [
  {
    race: 'Brine',
    name: 'Brine',
    isComingSoon: false,
    image: '/assets/images/home/characters/brine.png',
    symbolImage: '/assets/images/home/characters/symbol-brine.png',
  },
  {
    race: 'Atlantis',
    name: 'Atlantis',
    isComingSoon: true,
    image: '/assets/images/home/characters/character-atlantis-shadow.png',
    symbolImage: '/assets/images/home/characters/symbol-atlantis.png',
  },
  {
    race: 'Deserter',
    name: 'Deserter',
    isComingSoon: true,
    image: '/assets/images/home/characters/character-deserter-shadow.png',
    symbolImage: '/assets/images/home/characters/symbol-deserter.png',
  },
  {
    race: 'Fishermen',
    name: 'Fishermen',
    isComingSoon: true,
    image: '/assets/images/home/characters/character-fishermen-shadow.png',
    symbolImage: '/assets/images/home/characters/symbol-fishermen.png',
  },
  {
    race: 'HiddenKingdom',
    name: 'Hidden',
    isComingSoon: true,
    image: '/assets/images/home/characters/character-hidden-shadow.png',
    symbolImage: '/assets/images/home/characters/symbol-hidden-kingdom.png',
  },
  {
    race: 'Trench',
    name: 'Trench',
    isComingSoon: true,
    image: '/assets/images/home/characters/character-trench-shadow.png',
    symbolImage: '/assets/images/home/characters/symbol-trench.png',
  },
  {
    race: 'Xebel',
    name: 'Xebel',
    isComingSoon: true,
    image: '/assets/images/home/characters/character-xebel-shadow.png',
    symbolImage: '/assets/images/home/characters/symbol-xebel.png',
  },
];

export const DATA_DETAIL: ICharacterDetail[] = [
  {
    race: 'Brine',
    name: 'Soldier',
    source: '/assets/videos/home/character-soldier.webm',
    classIcon: '/assets/images/home/class-icons/class-gunner-icon.png',
    weapon: 'Guns',
    hp: 3,
    atk: 5,
    def: 2,
    story:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eros, mauris dolor lacus est porttitor. Ornare viverra tincidunt viverra elit ut eu porta. Et velit lacus pellentesque malesuada vitae. Semper proin viverra amet, cras ornare vel adipiscing in cum. Dolor sagittis at vel id sit posuere. Felis sit vel pellentesque cras cursus quam. Nec eu sed augue scelerisque facilisis lorem. Sit turpis mus vel urna ac nunc. Fames erat integer a',
  },
  {
    race: 'Brine',
    name: 'General',
    source: '/assets/videos/home/character-general.webm',
    classIcon: '/assets/images/home/class-icons/class-warrior-icon.png',
    weapon: 'Sword or shield',
    hp: 4,
    atk: 3,
    def: 4,
    story:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eros, mauris dolor lacus est porttitor. Ornare viverra tincidunt viverra elit ut eu porta. Et velit lacus pellentesque malesuada vitae. Semper proin viverra amet, cras ornare vel adipiscing in cum. Dolor sagittis at vel id sit posuere. Felis sit vel pellentesque cras cursus quam. Nec eu sed augue scelerisque facilisis lorem. Sit turpis mus vel urna ac nunc. Fames erat integer a',
  },
  {
    race: 'Brine',
    name: 'King',
    source: '/assets/videos/home/character-king.webm',
    classIcon: '/assets/images/home/class-icons/class-lancer-icon.png',
    weapon: 'Spear or Trident',
    hp: 4,
    atk: 4,
    def: 3,
    story:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eros, mauris dolor lacus est porttitor. Ornare viverra tincidunt viverra elit ut eu porta. Et velit lacus pellentesque malesuada vitae. Semper proin viverra amet, cras ornare vel adipiscing in cum. Dolor sagittis at vel id sit posuere. Felis sit vel pellentesque cras cursus quam. Nec eu sed augue scelerisque facilisis lorem. Sit turpis mus vel urna ac nunc. Fames erat integer a',
  },
  {
    race: 'Brine',
    name: 'Shaman',
    source: '/assets/videos/home/character-shaman.webm',
    classIcon: '/assets/images/home/class-icons/class-mage-icon.png',
    weapon: 'Spell Book',
    hp: 4,
    atk: 2,
    def: 3,
    story:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eros, mauris dolor lacus est porttitor. Ornare viverra tincidunt viverra elit ut eu porta. Et velit lacus pellentesque malesuada vitae. Semper proin viverra amet, cras ornare vel adipiscing in cum. Dolor sagittis at vel id sit posuere. Felis sit vel pellentesque cras cursus quam. Nec eu sed augue scelerisque facilisis lorem. Sit turpis mus vel urna ac nunc. Fames erat integer a',
  },
  {
    race: 'Brine',
    name: 'Citizen',
    source: '/assets/videos/home/character-citizen.webm',
    classIcon: '/assets/images/home/class-icons/class-priest-icon.png',
    weapon: 'Magic wand',
    hp: 3,
    atk: 4,
    def: 3,
    story:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eros, mauris dolor lacus est porttitor. Ornare viverra tincidunt viverra elit ut eu porta. Et velit lacus pellentesque malesuada vitae. Semper proin viverra amet, cras ornare vel adipiscing in cum. Dolor sagittis at vel id sit posuere. Felis sit vel pellentesque cras cursus quam. Nec eu sed augue scelerisque facilisis lorem. Sit turpis mus vel urna ac nunc. Fames erat integer a',
  },
];
