import Head from "next/head";

import { Content } from "@components/buyBox/content";
import { Paging } from "@components/layout/paging";
import { SideBar } from "@components/layout/sideBar";
import { NextPage } from "next";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "src/redux/actions/dataActions";

const buyBox: NextPage = () => {
  return (
    <div className="buy-box">
      <Head>
        <title>Buy Box | The Olympus</title>
      </Head>
      <SideBar pageName={"buyBox"} />
      <Content />
    </div>
  );
};

export default buyBox;
