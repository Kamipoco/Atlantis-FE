import Head from "next/head";
import { Content } from "@components/detail/content";
import { SideBar } from "@components/layout/sideBar";
import { useLoadDataFromContract } from "@components/marketPlace/helpers";
import { Modal } from "@components/marketPlace/modal";
import { NextPage } from "next";
import { useState } from "react";
import { useSelector } from "react-redux";
import { GenesisHeroTypes } from "src/types/genesisHero";
interface Props {
  data: GenesisHeroTypes;
}

const detail: NextPage<Props> = ({ data }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [display, setDisplay] = useState(false);
  return (
    <div className="detail">
      <Head>
        <title>Hero #{data.id.substring(0, 8)} | The Olympus</title>
      </Head>
      <SideBar pageName="marketPlace" />
      <Content data={data} setDisplay={setDisplay} detailMkp={true} />
      <Modal display={display} data={data} setDisplay={setDisplay} />
    </div>
  );
};

export async function getServerSideProps({ query: { tokenId } }) {
  const response = await fetch(
    `${process.env.API_URL}/market/heroes/${tokenId}`,
    {
      method: "GET",
    }
  ).then((response) => response.json());

  if (response?.data) {
    return {
      props: {
        data: response.data,
      },
    };
  }

  return {
    notFound: true,
  };
}

export default detail;
