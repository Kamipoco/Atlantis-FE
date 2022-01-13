import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "src/redux/actions/dataActions";
import { connect } from "src/redux/actions/blockchainActions";
import NFTContract from "../../../src/contract/NFTContract.json";

export function Box(props) {
  const { box } = props;
  const blockchain = useSelector((state: any) => state.blockchain);
  const data = useSelector((state: any) => state.data);
  const [loading, setLoading] = useState(false);
  const { Allowance } = data;
  const dispatch = useDispatch();

  function approveOLYM() {
    setLoading(true);
    blockchain.OLYMContract.methods
      .approve(
        NFTContract.address,
        blockchain.web3.utils.toWei((25).toString(), "ether")
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
      });
  }

  function mintNFT() {
    setLoading(true);
    blockchain.smartContract.methods
      .mint(box.id, blockchain.web3.utils.toWei((25).toString(), "ether"))
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
    <div className="box">
      <div className="head">
        <div className="id">#{box.id}</div>
        <p className="box-type">{box.boxName}</p>
      </div>

      <img src={box.image} alt="premium" />
      <div className="price">
        <img
          src="/assets/images/marketPlace/binance-icon.png"
          alt="binance-icon"
        />
        <p className="price-amount">25 OLYC</p>
      </div>
      <div
        className="open-box-button click-enable"
        onClick={() => {
          if (Allowance == 0) {
            approveOLYM();
          } else {
            mintNFT();
          }
        }}
      >
        {loading ? (
          <div className="loadingio-spinner-rolling-ojpeo5c54y">
            <div className="ldio-zi6lfb2e5gm">
              <div></div>
            </div>
          </div>
        ) : Allowance == 0 ? (
          "Approve"
        ) : (
          "Buy box"
        )}
      </div>
    </div>
  );
}
