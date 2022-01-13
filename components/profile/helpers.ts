import { useSelector } from "react-redux";
import { RootState } from "src/redux/store";
import getFileFromUrl from "./getFileFromUrl";
import { create } from "ipfs-http-client";

const END_POINT = "https://stormy-fortress-10422.herokuapp.com";

type IRace =
  | "Atlantis"
  | "Xebel"
  | "Brine"
  | "Fisherman"
  | "Trench"
  | "Deserters"
  | "HiddenKingdom";
type IItemClass = "Warrior" | "Lancer" | "Mage" | "Gunner" | "Priest";

const ALL_RACES: IRace[] = [
  "Atlantis",
  "Xebel",
  "Brine",
  "Fisherman",
  "Trench",
  "Deserters",
  "HiddenKingdom",
];
const ALL_ITEM_CLASSES: IItemClass[] = [
  "Warrior",
  "Lancer",
  "Mage",
  "Gunner",
  "Priest",
];

interface IRequestData {
  metadata: object;
  tokenId: any;
  // name: string;
  // description: string;
  // nftType: string;
  // colors: object;
  // race: object;
  // class: object;
  // image: string;
}

export const useCreateOpenBox = () => {
  const blockchain = useSelector((state: RootState) => state.blockchain);
  const accessToken = blockchain.jwt;
  return function openBox(data: IRequestData) {
    const headers = {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    };

    const url = `${END_POINT}/meta/heroMetadataURL`;
    // const url = 'http://local.olympus.com:3000/api/hello';
    return fetch(url, {
      method: "POST",
      headers,
      body: JSON.stringify(data),
    }).then((response) => response.json());
  };
};

const getRandomColor = () =>
  `#${Math.floor(Math.random() * 16777215).toString(16)}`;

const auth =
  "Basic " +
  Buffer.from(
    "22wM2syRftsivoiQPY1OOxcUo6J" + ":" + "ec37569ab88e51d4fb866f21d8dd7bdf"
  ).toString("base64");

export const getRandomItem = <T>(items: T[]): T =>
  items[Math.floor(Math.random() * items.length)];

export const createMetadata = async (
  tokenId: any,
  image?: string,
  heroColors?: object,
  heroClass?: IItemClass,
  heroRace?: IRace
) => {
  //@ts-ignore
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
  const imageFile = await getFileFromUrl(image);
  const added = await client.add(imageFile);
  console.log("added: ", added);

  return {
    metadata: {
      name: "Zues",
      description: "Zeus is the god of the sky in ancient Greek mythology",
      nftType: "HERO",
      colors: {
        trait_type: "colors",
        value: heroColors,
      },
      class: {
        trait_type: "class",
        value: heroClass,
      },
      race: {
        trait_type: "race",
        value: heroRace,
      },
      image: added.path,
    },
    tokenId: tokenId,
  };
};
function ipfsHttpClient(arg0: string) {
  throw new Error("Function not implemented.");
}

export const generateHero = () => {
  const itemClass: IItemClass = getRandomItem([
    "Lancer",
    "Mage",
    "Gunner",
    "Priest",
  ]);
  let arr: Array<number> = [];
  let obj = {};

  if (itemClass === "Priest") {
    for (let j = 0; j <= 4; j++) {
      arr.push(Math.floor(Math.random() * 12));
    }
    obj = {
      arm: arr[0],
      bodyarmor: arr[1],
      helmet: arr[2],
      pant: arr[3],
      shoes: arr[4],
    };
  } else {
    for (let j = 0; j <= 6; j++) {
      arr.push(Math.floor(Math.random() * 7));
    }
    obj = {
      arm: arr[0],
      belt: arr[1],
      bodyarmor: arr[2],
      cloak: arr[3],
      helmet: arr[4],
      pant: arr[5],
      shoes: arr[6],
    };
  }

  return {
    classHero: itemClass,
    colors: obj,
  };
};
