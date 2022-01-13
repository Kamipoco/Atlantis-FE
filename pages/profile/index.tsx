import { NextPage } from "next";
import { useEffect, useState } from "react";
import Head from "next/head";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "src/redux/actions/dataActions";
import { Content } from "@components/profile/content";
import { SideBar } from "@components/layout/sideBar";
import { RootState } from "src/redux/store";
import { Modal } from "@components/profile/modal";

const Profile: NextPage = () => {
  const dispatch = useDispatch();
  const blockchain = useSelector((state: RootState) => state.blockchain);

  useEffect(() => {
    if (blockchain.account) {
      dispatch(fetchData());
    }
    const fetchDataInterval = setInterval(() => {
      if (blockchain.account) {
        dispatch(fetchData());
      }
    }, 50000);
    return () => {
      clearInterval(fetchDataInterval);
    };
  }, [dispatch, blockchain.account]);

  return (
    <div className="profile">
      <Head>
        <title>Profile | The Olympus</title>
      </Head>
      <SideBar pageName="profile" />
      <Content />
    </div>
  );
};

export default Profile;
