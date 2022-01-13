import Head from "next/head";

import { Content } from "@components/detail/content";
import { SideBar } from "@components/layout/sideBar";
import { Modal } from "@components/profile/modal";
import { NextPage } from "next";
import { useRouter } from "next/dist/client/router";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "src/redux/store";
import { GenesisHeroTypes } from "src/types/genesisHero";
interface Props {
  data: GenesisHeroTypes;
}

const Detail: NextPage<Props> = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [display, setDisplay] = useState(false);
  const {
    query: { id },
  } = router;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const data = useSelector((state: RootState) => state.data);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const blockchain = useSelector((state: RootState) => state.blockchain);
  const NFTData = data.userNFTs.find((item) => {
    return item.tokenID == id;
  });
  if (NFTData != undefined) {
    NFTData.atk = NFTData?.attributes[1].value;
    NFTData.class = NFTData?.attributes[6].value;
    NFTData.colors = NFTData?.attributes[8].value;
    NFTData.hp = NFTData?.attributes[0].value;
    NFTData.lever = NFTData?.attributes[5].value;
    NFTData.pdef = NFTData?.attributes[2].value;
    NFTData.race = NFTData?.attributes[7].value;
    NFTData.rarity = NFTData?.attributes[3].value;
    NFTData.stars = NFTData?.attributes[4].value;
    NFTData.walletAddress = blockchain.account;
    NFTData.id = id;
    return (
      <>
        <Head>
          <title>
            Hero #{id && id.toString().substring(0, 8)} | The Olympus
          </title>
        </Head>
        <div className="detail">
          <SideBar pageName="profile" />
          <Content data={NFTData} setDisplay={setDisplay} />
          <Modal display={display} NFT={NFTData} setDisplay={setDisplay} />
        </div>
      </>
    );
  } else {
    return <></>;
  }
};

export default Detail;
