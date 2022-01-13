import React, { Suspense } from "react";
import { NextPage } from "next";
import { Canvas } from "@react-three/fiber";
import {
  ContactShadows,
  Environment,
  Html,
  OrbitControls,
  useProgress,
} from "@react-three/drei";

import { KingPose } from "@components/hero3d";
import { create } from "ipfs-http-client";
import getFileFromUrl from "@components/profile/getFileFromUrl";
import ShamanPose from "@components/hero3d/brine/shamanPose";
import GunnerPose from "@components/hero3d/brine/gunnerPose";
import PriestPose from "@components/hero3d/brine/priestPose";
import WarriorPose from "@components/hero3d/brine/warriorPose";
import GenerateHero from "@components/hero3d/generateHero";

const accessToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7IndhbGxldEFkZHJlc3MiOiIweDhmNmQzYWQzOTgxYmVmY2M0MzM3OTFhNTFhZTdjMDBmODUyOGYwNTciLCJub25jZSI6NTgxOH0sImlhdCI6MTY0MDc0NTMzOH0.LCdZ6CbnR_kEtXG3dk9SscQ_heQWXTja3fa5TNKPeos";
const auth =
  "Basic " +
  Buffer.from(
    "22wM2syRftsivoiQPY1OOxcUo6J" + ":" + "ec37569ab88e51d4fb866f21d8dd7bdf"
  ).toString("base64");

const RandomHero: NextPage = () => {
  const [count, setCount] = React.useState(1);
  const [colorBases, setColorBases] = React.useState({
    arm: 0,
    belt: 0,
    bodyarmor: 0,
    cloak: 0,
    helmet: 0,
    pant: 0,
    shoes: 0,
  });
  const [started, setStarted] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const canvasRef = React.useRef<any>(null);

  function Loader() {
    const { active, progress, errors, item, loaded, total } = useProgress();
    return <Html center>Loading...</Html>;
  }

  const client = create({
    host: "ipfs.infura.io",
    // @ts-ignore
    port: 5001,
    protocol: "https",
    apiPath: "/api/v0",
    headers: {
      authorization: auth,
    },
  });

  const uploadToIPFS = async (file: any, data: any) => {
    const imageFile = await getFileFromUrl(file);

    const added = await client.add(imageFile);
    console.log("added: ", added);
    const headers = {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    };
    const body = {
      name: "Priest Brine",
      description: "Priest Brine",
      nftType: "HERO",
      colors: {
        trait_type: "colors",
        value: data,
      },
      class: {
        trait_type: "class",
        value: "Priest",
      },
      race: {
        trait_type: "race",
        value: "Brine",
      },
      image: added.path,
    };
    await fetch("https://stormy-fortress-10422.herokuapp.com/genHero/", {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    }).then(async (response) => {
      const res = await response.json();
      console.log(res);
      console.log(count);
      setCount(count + 1);
    });
  };

  React.useEffect(() => {
    if (count <= 20 && started) {
      let arr: Array<number> = [];
      for (let j = 0; j <= 5; j++) {
        arr.push(Math.floor(Math.random() * 12));
      }

      const obj = {
        arm: arr[0],
        // belt: arr[1],
        bodyarmor: arr[1],
        // cloak: arr[3],
        helmet: arr[2],
        pant: arr[3],
        shoes: arr[4],
      };

      setTimeout(async () => {
        // @ts-ignore
        setColorBases(obj);
        const canvas = canvasRef.current;
        const dataURL = canvas.toDataURL();
        // await uploadToIPFS(dataURL, obj);
      }, 1000);
    } else {
      setLoading(false);
    }
  }, [count, started]);

  const handleClick = async () => {
    setStarted(!started);
    setLoading(true);
  };

  return (
    <div>
      <GenerateHero colors={colorBases} showLoader heroClass="Lancer" />
      <button
        className="mt-5 px-4 py-3 rounded-lg text-white opacity-80 hover:opacity-100 transition-opacity duration-200"
        style={{
          background:
            "linear-gradient(256.08deg, #AD5CFF 14.83%, #FFABA1 139.16%)",
        }}
        onClick={handleClick}
        // disabled={loading}
      >
        {loading ? "Loading..." : "Export"}
      </button>
    </div>
  );
};

// export async function getServerSideProps() {
//   return {
//     notFound: true,
//   };
// }

export default RandomHero;
