import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "src/redux/actions/dataActions";
import MKPContract from "../../../src/contract/MarketPlaceContract.json";
import ERC721 from "../../../src/contract/NFTContract.json";
import { useRouter } from "next/router";
export function Modal(props) {
  const router = useRouter();
  const { display, NFT, setDisplay } = props;
  console.log("NFT: ", NFT);
  const [price, setPrice] = useState(0);
  const blockchain = useSelector((state: any) => state.blockchain);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const handleClickSellNow = () => {
    blockchain.MarketPlace.methods
      .offer(
        NFT.tokenID,
        ERC721.address,
        blockchain.web3.utils.toWei(price.toString(), "ether")
      )
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
        setDisplay(false);
        router.push("/profile");
      });
  };

  const handleClickApprove = () => {
    blockchain.smartContract.methods
      .approve(MKPContract.address, NFT.tokenID)
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
  };
  let classes = "";
  if (display) {
    classes = "modal flex";
  } else {
    classes = "modal hidden";
  }
  return (
    <div className={classes}>
      <div
        className="modal__overlay"
        onClick={() => {
          setDisplay(!display);
        }}
      ></div>
      <div className="modal__body">
        <p className="title">SELL HERO</p>
        <p className="note">
          Please check the information and enter the selling price.
        </p>
        <p className="token_id">#{NFT.tokenID}</p>
        <img src={NFT.image} alt="nft" className=" h-64" />
        <div className="price">
          <p>Price:</p>
          <div className="enter-price">
            <img
              src="/assets/images/detail/binance_logo.png"
              alt="binance_logo"
              className="binance_logo"
            />
            <input
              type="text"
              className="price_input"
              placeholder="Enter Price"
              defaultValue=""
              value={price}
              onChange={(e) => {
                if (e.target.value) {
                  setPrice(parseInt(e.target.value));
                } else {
                  setPrice(0);
                }
              }}
            />
            <div className="arrow">
              <img
                src="/assets/images/detail/arrow-up.png"
                alt="arrow-up"
                className=" cursor-pointer"
                onClick={() => {
                  setPrice(price + 1);
                }}
              />
              <img
                src="/assets/images/detail/arrow-bottom.png"
                alt="arrow-bottom"
                className=" cursor-pointer"
                onClick={() => {
                  setPrice(price - 1);
                }}
              />
            </div>
          </div>
        </div>
        <div className="fee">
          <p>Trade fee:</p>
          <p>3.3%</p>
        </div>
        <div className="btn-group">
          <div
            className="cancel-btn btn"
            onClick={() => {
              setDisplay(!display);
            }}
          >
            Cancel
          </div>
          {NFT.isApproved ? (
            <div
              className="approve-btn btn"
              onClick={() => {
                handleClickSellNow();
              }}
            >
              Sell now
            </div>
          ) : (
            <div
              className="approve-btn btn"
              onClick={() => {
                handleClickApprove();
              }}
            >
              Approve
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
