import Link from "next/link";
import { INFTItem } from "src/types";
import { useLoadDataFromContract } from "../helpers";
import HeroCard from "components/common/HeroCard";
interface IProps {
  item: INFTItem;
}
export function NFTCard({ item }: IProps) {
  const { Marketplace: marketplace, id } = item;
  const { price } = marketplace || {};
  const { data } = useLoadDataFromContract(item.tokenId);
  // const shortId = id.substring(0, id.indexOf("-"));
  return (
    <Link href={{ pathname: "/market-place/" + item.tokenId }} passHref>
      <a className="nft-card click-enable">
        {/* <div className="card-head mb-7">
          <div className="card-id">#{shortId}</div>
        </div> */}
        <HeroCard image={data?.image} heroInfo={item} sizes="300px" />

        <div className="price">
          <img
            src="/assets/images/marketPlace/binance-icon.png"
            alt="binance-icon"
          />
          <p className="price-amount">
            {price ? parseInt(price) / Math.pow(10, 18) : "--"} OLYC
          </p>
        </div>
        {/* <p className="dollar-price">--</p> */}
      </a>
    </Link>
  );
}
