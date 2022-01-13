import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "src/redux/actions/dataActions";
import MKPContract from "../../../src/contract/MarketPlaceContract.json";
import NFTContract from "../../../src/contract/NFTContract.json";
import ERC721 from "../../../src/contract/NFTContract.json";

export function Modal(props) {
  const { display, data, setDisplay, fromGenesis } = props;
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const blockchain = useSelector((state: any) => state.blockchain);
  const router = useRouter();

  function handleBuyNow() {
    setLoading(true);
    blockchain.OLYMContract.methods
      .approve(MKPContract.address, data.Marketplace.price.toString())
      .send({
        from: blockchain.account,
      })
      .once("error", (err: any) => {
        console.log(err);
        setLoading(false);
      })
      .then(() => {
        blockchain.MarketPlace.methods
          .buy(data.Marketplace.itemId)
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
      });
  }

  async function handleBuyGenNow() {
    setLoading(true);
    await fetch(
      `https://stormy-fortress-10422.herokuapp.com/market/voucher?id=${data.id}&walletAddress=${blockchain.account}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((voucher) => {
        console.log("data: ", data);
        blockchain.OLYMContract.methods
          .approve(NFTContract.address, data.price)
          .send({
            from: blockchain.account,
          })
          .once("error", (err: any) => {
            console.log(err);
            setLoading(false);
          })
          .then(() => {
            blockchain.smartContract.methods
              .redeem(voucher.data)
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
          });
      });
  }
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
        <p className="title">CHECK OUT</p>
        <p className="note">You are about to purchase hero</p>
        <p className="token_id">
          {data.race} - {data.rarity} (LV{data.level})
        </p>
        {/* <img src={data.image} alt="nft" className=" h-64" /> */}
        <div className="price">
          <p>Price:</p>
          <div className="price-right flex">
            <img
              src="/assets/images/detail/binance_logo.png"
              alt="binance_logo"
              className="binance_logo mr-1"
            />
            <p className="olyc-price">
              {fromGenesis
                ? data.price / 10 ** 18
                : data.Marketplace.price / 10 ** 18}{" "}
              OLYC
            </p>
          </div>
        </div>

        <div className="btn-group">
          <div
            className="approve-btn btn"
            onClick={() => {
              fromGenesis ? handleBuyGenNow() : handleBuyNow();
            }}
          >
            {loading ? (
              <div className="loadingio-spinner-rolling-ojpeo5c54y">
                <div className="ldio-zi6lfb2e5gm">
                  <div></div>
                </div>
              </div>
            ) : (
              "Confirm"
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
