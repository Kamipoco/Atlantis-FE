import Head from "next/head";

import { useState } from "react";
import { Content } from "@components/detail/content";
import { SideBar } from "@components/layout/sideBar";
import { NextPage } from "next";

import { GenesisHeroTypes } from "src/types/genesisHero";
import { Modal } from "@components/marketPlace/modal";

interface Props {
  data: GenesisHeroTypes;
}

const Detail: NextPage<Props> = ({ data }) => {
  const [display, setDisplay] = useState(false);

  return (
    <div className="detail">
      <Head>
        <title>Hero #{data.id.substring(0, 8)} | The Olympus</title>
      </Head>
      <SideBar pageName="marketPlace" />
      <Content data={data} setDisplay={setDisplay} detailMkp />
      <Modal
        display={display}
        data={data}
        setDisplay={setDisplay}
        fromGenesis
      />
    </div>
  );
};

export async function getServerSideProps({ query: { id } }) {
  const response = await fetch(`${process.env.API_URL}/genHero/${id}`, {
    method: "GET",
  }).then((response) => response.json());

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

export default Detail;
