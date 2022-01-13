import cs from "classnames";
import Image from "next/image";
import { INFTItem, EnumRace, EnumRarity, EnumClass } from "src/types";

interface IHero {
  level: number;
  class: EnumClass;
  hp: number;
  atk: number;
  pdef: number;
  stars: number;
  race: EnumRace;
  rarity: EnumRarity;
  id: string;
}
interface IProps {
  className?: string;
  heroInfo: IHero;
  image?: string;
  sizes?: string;
}

const HeroCard = ({ className, heroInfo, image, sizes }: IProps) => {
  const {
    level,
    class: itemClass,
    hp,
    atk,
    pdef,
    stars,
    race,
    rarity,
    id,
  } = heroInfo;

  const shortId = id.toString().substring(0, id.toString().indexOf("-"));

  return (
    <div className={cs("card-frame relative w-full", className)}>
      <div className="card-background">
        <Image
          src="/assets/images/frames/hero-card-background.png"
          layout="fill"
          alt=""
          sizes={sizes}
        />
      </div>
      {image && (
        <div className="item-image">
          <div className="absolute top-[10%] w-full h-full transform scale-[2] origin-top">
            <Image
              src={image}
              alt="card-image"
              layout="fill"
              objectFit="contain"
              sizes={sizes}
            />
          </div>
        </div>
      )}
      <Image src={getFrameImage(rarity)} layout="fill" alt="" sizes={sizes} />
      <div className="info-layer">
        <div className="hero-stars">
          {Array(stars)
            .fill(0)
            .map((_, index) => (
              <Image
                src="/assets/images/frames/star.png"
                width={20}
                height={20}
                key={index}
                alt=""
              />
            ))}
        </div>
        <div className="hero-short-id">
          <div data-text={`#${shortId}`} className="gradient-text text-shadow">
            {`#${shortId}`}
          </div>
        </div>

        <div className="hero-race-symbol">
          <Image src={getRaceSymbol(race)} layout="fill" alt="" />
        </div>

        <div data-text={level} className="hero-level gradient-text">
          {level}
        </div>
        <div className="hero-class">
          <div data-text={itemClass} className="gradient-text text-shadow">
            {itemClass}
          </div>
        </div>
        <div data-text={hp} className="hero-hp gradient-text">
          {hp}
        </div>
        <div data-text={atk} className="hero-atk gradient-text">
          {atk}
        </div>
        <div data-text={pdef} className="hero-pdef gradient-text">
          {pdef}
        </div>
      </div>
    </div>
  );
};

const getFrameImage = (rarity: EnumRarity) => {
  switch (rarity) {
    case EnumRarity.R: {
      return "/assets/images/frames/hero-frame-r.png";
    }
    case EnumRarity.SR: {
      return "/assets/images/frames/hero-frame-sr.png";
    }
    case EnumRarity.SSR: {
      return "/assets/images/frames/hero-frame-ssr.png";
    }
    default: {
      console.error("invalid rarity", rarity);
      return "";
    }
  }
};

const getRaceSymbol = (race: string) => {
  switch (race) {
    case EnumRace.Atlantis: {
      return "/assets/images/frames/symbol-atlantis.png";
    }
    case EnumRace.Brine: {
      return "/assets/images/frames/symbol-brine.png";
    }
    case EnumRace.Deserters: {
      return "/assets/images/frames/symbol-deserter.png";
    }
    case EnumRace.Fisherman: {
      return "/assets/images/frames/symbol-fisherman.png";
    }
    case EnumRace.HiddenKingdom: {
      return "/assets/images/frames/symbol-hidden-kingdom.png";
    }
    case EnumRace.Trench: {
      return "/assets/images/frames/symbol-trench.png";
    }
    case EnumRace.Xebel: {
      return "/assets/images/frames/symbol-xebel.png";
    }
    default: {
      console.error("invalid race", race);
      return "";
    }
  }
};

export default HeroCard;
