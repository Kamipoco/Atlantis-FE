import Head from "next/head";
import { SideBar } from "@components/layout/sideBar";
import { Content } from "@components/marketPlace/content";
import { NextPage } from "next";
import { MarketplaceContextProvider } from "@components/marketPlace/context";
const marketPlace: NextPage = () => {
  return (
    <MarketplaceContextProvider>
      <Head>
        <title>Marketplace | The Olympus</title>
      </Head>
      <div className="martket-place min-h-screen">
        <SideBar pageName={"marketPlace"} />
        <Content />
      </div>
    </MarketplaceContextProvider>
  );
};

export default marketPlace;
