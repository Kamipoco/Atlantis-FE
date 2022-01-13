import Head from "next/head";

import { SideBar } from "@components/layout/sideBar";
import { Content } from "@components/genesis/content";
import { NextPage } from "next";
import { GenesisContextProvider } from "@components/genesis/context";
const genesisPage: NextPage = () => {
  return (
    <GenesisContextProvider>
      <Head>
        <title>Genesis Heros | The Olympus</title>
      </Head>
      <div className="martket-place min-h-screen">
        <SideBar pageName={"genesis"} />
        <Content />
      </div>
    </GenesisContextProvider>
  );
};

export default genesisPage;
