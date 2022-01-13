import { HeroMotion } from "@components/hero3d";
import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "src/redux/actions/blockchainActions";
import { fetchData } from "src/redux/actions/dataActions";
import { GenesisHeroTypes } from "src/types/genesisHero";

export function Content(props) {
  const { data, setDisplay, detailMkp } = props;
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const {
    id,
    race,
    class: heroClass,
    rarity,
    level,
    hp,
    atk,
    pdef,
    stars,
    colors,
    isSelling,
  } = data || {};
  const blockchain = useSelector((state: any) => state.blockchain);
  const { account } = blockchain;
  const router = useRouter();

  async function stopSelling() {
    setLoading(true);
    const res = await fetch(
      "https://stormy-fortress-10422.herokuapp.com/market/heroes/" + id,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => res.json());
    console.log("res: ", res);

    blockchain.MarketPlace.methods
      .withdraw(res.data.Marketplace.itemId)
      .send({
        from: blockchain.account,
      })
      .once("error", (err: any) => {
        console.log(err);
        setLoading(false);
      })
      .then(() => {
        console.log("sucess!");
        dispatch(fetchData());
        setLoading(false);
      });
  }

  return (
    <div className="content">
      <div
        className="back click-enable"
        onClick={() => {
          router.push("/" + router.pathname.split("/")[1]);
        }}
      >
        <img
          src="/assets/images/detail/arrow-left.png"
          alt="arrow-left"
          className="back-icon"
        />
        <p>Back</p>
      </div>

      <div className="buy-now">
        {/* <div className="price">
          <div className="olyc-price">
            <img
              src="/assets/images/detail/binance-icon.png"
              alt="binance-icon"
            />
            <p>20 OLYC</p>
          </div>
          <div className="dollar-price">
            <p>$9,349.0</p>
          </div>
        </div> */}
        {detailMkp ? (
          <div
            onClick={() => {
              if (account) {
                setDisplay(true);
              } else {
                dispatch(connect());
                dispatch(fetchData());
              }
            }}
            className="buy-now-button click-enable"
          >
            {account ? "Buy now" : "Connect to metamask"}
          </div>
        ) : (
          <div
            onClick={() => {
              if (isSelling == true) {
                stopSelling();
              } else {
                setDisplay(true);
              }
            }}
            className="buy-now-button click-enable"
          >
            {isSelling ? "Stop Selling" : "Sell now"}
          </div>
        )}
      </div>

      <div className="status">
        <div className="nft-id">#{id.substring(0, 8)}</div>
        <p>This auction is no longer available. Please try again later.</p>
      </div>

      <div className="nft-name">
        {race} - #{id.substring(0, 8)}
      </div>

      <div className="nft-info">
        <div className="w-5/12">
          <HeroMotion race={race} heroClass={heroClass} colors={colors} />
        </div>
        <div className="nft-data">
          <div className="about">
            <p className="about-title">About</p>
            <div className="about-detail">
              <div className="about-detail-list">
                <div className="about-detail-item">
                  <p className="about-detail-item-title">RACE</p>
                  <div className="about-detail-item-value">
                    <img
                      src="/assets/images/detail/brine-race.png"
                      alt="brine-race"
                    />
                    <p className="uppercase">{race}</p>
                  </div>
                </div>

                <div className="about-detail-item">
                  <p className="about-detail-item-title">CLASS</p>
                  <div className="about-detail-item-value">
                    <img src="/assets/images/detail/lancer.png" alt="lancer" />
                    <p className="uppercase">{heroClass}</p>
                  </div>
                </div>

                <div className="about-detail-item">
                  <p className="about-detail-item-title">RARENESS</p>
                  <div className="about-detail-item-value">
                    <img src="/assets/images/detail/r.png" alt="r" />
                    <p>{rarity}</p>
                  </div>
                </div>

                <div className="about-detail-item">
                  <p className="about-detail-item-title">LEVEL</p>
                  <div className="about-detail-item-value">
                    <img src="/assets/images/detail/lv.png" alt="lv" />
                    <p>{level}</p>
                  </div>
                </div>
              </div>
              <p className="owner">
                Owner: 0x8fe045fbb66ecac00364e1f6d87a6ca4ecf29307
              </p>
            </div>
          </div>
          <div className="abilities">
            <p className="abilities-title">Abilities</p>
            <div className="abilities-list">
              <div className="abilities-item">
                <p className="abilities-item-title">HP</p>
                <div className="abilities-item-value">
                  <img src="/assets/images/detail/hp-icon.png" alt="hp-icon" />
                  <p>{hp}</p>
                </div>
              </div>

              <div className="abilities-item">
                <p className="abilities-item-title">ATTACK</p>
                <div className="abilities-item-value">
                  <img
                    src="/assets/images/detail/attack-icon.png"
                    alt="attack-icon"
                  />
                  <p>{atk}</p>
                </div>
              </div>

              <div className="abilities-item">
                <p className="abilities-item-title">DEFENSE</p>
                <div className="abilities-item-value">
                  <img
                    src="/assets/images/detail/def-icon.png"
                    alt="def-icon"
                  />
                  <p>{pdef}</p>
                </div>
              </div>

              <div className="abilities-item">
                <p className="abilities-item-title">STAR</p>
                <div className="abilities-item-value">
                  <img
                    src="/assets/images/detail/star-icon.png"
                    alt="star-icon"
                  />
                  <p>{stars}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
