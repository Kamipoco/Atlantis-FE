import Link from "next/link";
import { IGenesisHero } from "src/types";

import HeroCard from "components/common/HeroCard";
interface IProps {
  item: IGenesisHero;
}
export function NFTCard({ item }: IProps) {
  return (
    <Link href={{ pathname: "/genesis/" + item.id }} passHref>
      <a className="nft-card click-enable">
        <HeroCard image={item.image} heroInfo={item} sizes="300px" />

        <div className="price">
          <img
            src="/assets/images/marketPlace/binance-icon.png"
            alt="binance-icon"
          />
          <p className="price-amount">
            {parseInt(item.price) / Math.pow(10, 18)} OLYC
          </p>
        </div>
      </a>
    </Link>
  );
}
