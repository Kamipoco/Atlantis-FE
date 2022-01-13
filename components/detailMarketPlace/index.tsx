import { Modal } from "@components/profile/modal";
import Link from "next/link";
import { useState } from "react";
import { useSelector } from "react-redux";

export function Content(props) {
  const { tokenID } = props;
  const data = useSelector((state: any) => state.data);
  const blockchain = useSelector((state: any) => state.blockchain);
  const { userNFTs } = data;
  const NFTDetail = userNFTs.find((item) => {
    return item.tokenID == tokenID;
  });
  const [modalDisplay, setModalDisplay] = useState(false);

  return (
    <>
      <Modal display={modalDisplay} setModalDisplay={setModalDisplay} />
      <div className="content">
        <Link href="/profile">
          <div className="back click-enable">
            <img
              src="/assets/images/detail/arrow-left.png"
              alt="arrow-left"
              className="back-icon"
            />
            <p>Back</p>
          </div>
        </Link>
        <div className="buy-now">
          <div className="price">
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
          </div>

          <div
            className="buy-now-button click-enable"
            onClick={() => {
              setModalDisplay(!modalDisplay);
            }}
          >
            Buy now
          </div>
        </div>

        <div className="status">
          <div className="nft-id">#{NFTDetail.tokenID}</div>
          <p>This auction is no longer available. Please try again later.</p>
        </div>

        <div className="nft-name">
          {NFTDetail.name} - #{NFTDetail.tokenID}
        </div>

        <div className="nft-info">
          <img src={NFTDetail.image} alt="nft-img" className="nft-image" />
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
                      <p>{NFTDetail.attributes[7].value}</p>
                    </div>
                  </div>

                  <div className="about-detail-item">
                    <p className="about-detail-item-title">CLASS</p>
                    <div className="about-detail-item-value">
                      <img
                        src="/assets/images/detail/lancer.png"
                        alt="lancer"
                      />
                      <p>{NFTDetail.attributes[6].value}</p>
                    </div>
                  </div>

                  <div className="about-detail-item">
                    <p className="about-detail-item-title">RARENESS</p>
                    <div className="about-detail-item-value">
                      <img src="/assets/images/detail/r.png" alt="r" />
                      <p>{NFTDetail.attributes[3].value}</p>
                    </div>
                  </div>

                  <div className="about-detail-item">
                    <p className="about-detail-item-title">LEVEL</p>
                    <div className="about-detail-item-value">
                      <img src="/assets/images/detail/lv.png" alt="lv" />
                      <p>{NFTDetail.attributes[5].value}</p>
                    </div>
                  </div>
                </div>
                <p className="owner">Owner: {blockchain.account}</p>
              </div>
            </div>
            <div className="abilities">
              <p className="abilities-title">Abilities</p>
              <div className="abilities-list">
                <div className="abilities-item">
                  <p className="abilities-item-title">HP</p>
                  <div className="abilities-item-value">
                    <img
                      src="/assets/images/detail/hp-icon.png"
                      alt="hp-icon"
                    />
                    <p>{NFTDetail.attributes[0].value}</p>
                  </div>
                </div>

                <div className="abilities-item">
                  <p className="abilities-item-title">ATTACK</p>
                  <div className="abilities-item-value">
                    <img
                      src="/assets/images/detail/attack-icon.png"
                      alt="attack-icon"
                    />
                    <p>{NFTDetail.attributes[1].value}</p>
                  </div>
                </div>

                <div className="abilities-item">
                  <p className="abilities-item-title">DEFENSE</p>
                  <div className="abilities-item-value">
                    <img
                      src="/assets/images/detail/def-icon.png"
                      alt="def-icon"
                    />
                    <p>{NFTDetail.attributes[2].value}</p>
                  </div>
                </div>

                <div className="abilities-item">
                  <p className="abilities-item-title">STAR</p>
                  <div className="abilities-item-value">
                    <img
                      src="/assets/images/detail/star-icon.png"
                      alt="star-icon"
                    />
                    <p>{NFTDetail.attributes[4].value}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
