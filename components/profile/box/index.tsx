import { useDispatch, useSelector } from "react-redux";
import { RootState } from "src/redux/store";
import { useCreateOpenBox, createMetadata, generateHero } from "../helpers";
import { promiseWrapper } from "src/utils/common";
import { useRef, useState } from "react";
import { fetchData } from "src/redux/actions/dataActions";
import NFTContract from "../../../src/contract/NFTContract.json";
import GameContract from "../../../src/contract/GameContract.json";
import Link from "next/link";
import { Modal } from "../modal";
import HeroCard from "@components/common/HeroCard";
import GenerateHero from "@components/hero3d/generateHero";
import { HeroClass } from "src/types/genesisHero";
import { useRouter } from "next/router";
import MKPContract from "../../../src/contract/MarketPlaceContract.json";

export function Box(props) {
  const { NFT } = props;
  const dispatch = useDispatch();
  const openBox = useCreateOpenBox();
  const blockchain = useSelector((state: RootState) => state.blockchain);
  const isBox = NFT.name.indexOf("Box") != -1;
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [colorBases, setColorBases] = useState({
    arm: 0,
    belt: 0,
    bodyarmor: 0,
    cloak: 0,
    helmet: 0,
    pant: 0,
    shoes: 0,
  });
  const [heroClass, setHeroClass] = useState<HeroClass>("Lancer");
  const canvasRef = useRef<any>(null);

  const randomHero = async () => {
    const { classHero, colors } = generateHero();
    setHeroClass(classHero);
    // @ts-ignore
    setColorBases(colors);
    const canvas = canvasRef.current;

    const promise = new Promise(function (resolve) {
      window.setTimeout(function () {
        setTimeout(() => {
          const dataURL = canvas.toDataURL();
          resolve({
            imageBase64: dataURL,
            data: colors,
            classHero,
          });
        }, 1000);
      });
    });

    return promise;
  };

  const depositToGame = async () => {
    setLoading(true);
    await blockchain.smartContract.methods
      .approve(GameContract.address, NFT.tokenID)
      .send({
        from: blockchain.account,
      })
      .once("error", (err: any) => {
        console.log(err);
        setLoading(false);
      })
      .then(() => {
        blockchain.GameContract.methods
          .depositNFT(NFTContract.address, NFT.tokenID)
          .send({
            from: blockchain.account,
          })
          .once("error", (err: any) => {
            console.log("err:", err);
            setLoading(false);
          })
          .then(() => {
            console.log("sucess!");
            dispatch(fetchData);
            setLoading(false);
          });
      });
  };

  const withdrawFromGame = async () => {
    setLoading(true);
    await fetch(
      `https://stormy-fortress-10422.herokuapp.com/heroes/${NFT.tokenID}/requestWithdraw`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${blockchain.jwt}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("data: ", data);
        blockchain.GameContract.methods
          .withdrawNFT(
            NFTContract.address,
            NFT.tokenID,
            data.data.nonce,
            data.data.signature
          )
          .send({
            from: blockchain.account,
          })
          .once("error", (err: any) => {
            console.log("err:", err);
            setLoading(false);
          })
          .then(() => {
            console.log("sucess!");
            dispatch(fetchData);
            setLoading(false);
          });
      });
  };

  const handleClickOpenBox = async () => {
    setLoading(true);
    const nonce = await blockchain.web3.eth.getTransactionCount(
      blockchain.account
    );
    // @ts-ignore
    const { imageBase64, data, classHero } = await randomHero();

    const responseMeta = await createMetadata(
      NFT.tokenID,
      imageBase64,
      data,
      classHero,
      "Brine"
    );
    const [error, result] = await promiseWrapper(openBox(responseMeta));
    if (error) {
      console.error("Failed to open box", error);
      setLoading(false);
      return;
    }
    // Continue with the result

    blockchain.smartContract.methods
      .setTokenURI(
        NFT.tokenID,
        result.data.url,
        result.data.nonce,
        result.data.sig
      )
      .send({
        from: blockchain.accounts[0],
      })
      .once("error", (err: any) => {
        console.log("err: ", err);
        setLoading(false);
      })
      .then(() => {
        console.log("sucess!");
        dispatch(fetchData);
        setLoading(false);
      });
  };

  return (
    <>
      {isBox && (
        <GenerateHero
          colors={colorBases}
          showLoader
          className="opacity-0 absolute z-[-1]"
          ref={canvasRef}
          heroClass={heroClass}
        />
      )}
      <div className="box">
        <div className="head">
          <div className="id">#{NFT.tokenID}</div>
          <p className="box-type">{NFT.name || NFT.class + NFT.race}</p>
        </div>
        <Link href={`/detail/${NFT.tokenID}`}>
          <a className="card w-full cursor-pointer">
            {isBox ? (
              <div className="open-box">
                <img src={NFT.image} alt="nftImage" className="click-enable " />
              </div>
            ) : (
              <HeroCard image={NFT.image} heroInfo={NFT} sizes="300px" />
            )}
          </a>
        </Link>
        <div className="button-row">
          {NFT.isSelling ? "Selling..." : "Ready for sell"}
        </div>
        <div
          className="open-box-button click-enable"
          onClick={() => {
            if (NFT.isDeposit) {
              withdrawFromGame();
            } else {
              depositToGame();
            }
          }}
        >
          {loading ? (
            <div className="loadingio-spinner-rolling-ojpeo5c54y">
              <div className="ldio-zi6lfb2e5gm">
                <div></div>
              </div>
            </div>
          ) : NFT.name.indexOf("Box") == -1 ? (
            NFT.isDeposit ? (
              "With draw"
            ) : (
              "Deposit to game"
            )
          ) : (
            "Open box"
          )}
        </div>
      </div>
    </>
  );
}
