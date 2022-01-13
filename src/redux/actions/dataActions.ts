import Web3 from "web3";
import { promiseWrapper } from "src/utils/common";
import NFTContract from "../../contract/NFTContract.json";
import OLYMContract from "../../contract/OLYMContract.json";
import marketPlaceContract from "../../contract/MarketPlaceContract.json";
import gameContract from "../../contract/GameContract.json";
import { AbiItem } from "web3-utils";
import { footerLinks } from "@components/home/footer/data";
import { getLocalStorage } from "src/utils/localStorage";

const fetchDataRequest = () => {
  return {
    type: "CHECK_DATA_REQUEST",
  };
};

const fetchDataSuccess = (payload) => {
  return {
    type: "CHECK_DATA_SUCCESS",
    payload: payload,
  };
};

const fetchDataFailed = (payload) => {
  return {
    type: "CHECK_DATA_FAILED",
    payload: payload,
  };
};

const updateAccDataSuccess = (payload) => {
  return {
    type: "UPDATE_ACC_DATA_SUCCESS",
    payload: payload,
  };
};

// export const fetchData = () => {
//   return async (dispatch) => {
//     dispatch(fetchDataRequest());
//     try {
//       const accounts = await window.ethereum.request({
//         method: 'eth_requestAccounts',
//       });
//       let web3 = new Web3(window.ethereum);
//       const ERC721 = new web3.eth.Contract(
//         NFTContract.abi,
//         NFTContract.address,
//       );
//       let links: Array<any> = [];
//       let userNFTs: Array<any> = [];
//       const reponse = await ERC721.methods.getAllTokenURIs(accounts[0]).call();

//       reponse.forEach(async (element) => {
//         links.push(element[1]);
//       });
//       const dataArray = await Promise.all(
//         links.map(async (link) => {
//           const res = await fetch(link);
//           const NFT = await res.json();
//           userNFTs.push(NFT);
//         }),
//       );

//       dispatch(
//         fetchDataSuccess({
//           userNFTs: userNFTs,
//         }),
//       );
//     } catch (err) {
//       console.log(err);
//       dispatch(fetchDataFailed('Could not load data from contract.'));
//     }
//   };
// };

export const fetchData = () => {
  return async (dispatch) => {
    dispatch(fetchDataRequest());

    const [accountsError, accounts] = await promiseWrapper(
      window.ethereum.request({
        method: "eth_requestAccounts",
      })
    );

    if (accountsError) {
      console.log("Failed to request accounts", accountsError);
      dispatch(fetchDataFailed("Failed to request accounts"));
      return;
    }

    let web3 = new Web3(window.ethereum);
    const ERC721 = new web3.eth.Contract(
      NFTContract.abi as AbiItem[],
      NFTContract.address
    );
    const OLYM = new web3.eth.Contract(
      OLYMContract.abi as AbiItem[],
      OLYMContract.address
    );

    const [getTokenURIsError, tokenURIs] = await promiseWrapper(
      ERC721.methods.getAllTokenURIs(accounts[0]).call()
    );
    const [getAllowanceIsError, Allowance] = await promiseWrapper(
      OLYM.methods.allowance(accounts[0], NFTContract.address).call()
    );

    const accessToken = getLocalStorage("jwt");
    console.log("accessToken: ", accessToken);

    const NFTList = await fetch(
      "https://stormy-fortress-10422.herokuapp.com/inventory/heroes?page=1&limit=100",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      }
    ).then((res) => res.json());

    const MarketplaceNFTIds = NFTList.data.map((item) => {
      return item.tokenId;
    });

    const mergeNFTList = MarketplaceNFTIds.concat(tokenURIs);

    const NFTListFinal = Array.from(
      new Set(
        mergeNFTList.map((item) => {
          return parseInt(item);
        })
      )
    );

    let links: any = [];
    await Promise.all(
      NFTListFinal.map(async (token) => {
        const tokenURI = await ERC721.methods.tokenURI(token).call();
        const owner = await ERC721.methods.ownerOf(token).call();
        const approvedFor = await ERC721.methods.getApproved(token).call();
        let isSelling = false;
        let isDeposit = false;
        let isApproved = false;

        if (owner == marketPlaceContract.address) {
          isSelling = true;
        }
        if (owner == gameContract.address) {
          isDeposit = true;
        }
        console.log("approvedFor: ", token, " ", approvedFor);
        if (approvedFor == marketPlaceContract.address) {
          isApproved = true;
        }
        links.push({ tokenURI, id: token, isSelling, isDeposit, isApproved });
      })
    );

    if (getTokenURIsError) {
      console.log("Failed to load data from contract", accountsError);
      dispatch(fetchDataFailed("Failed to load data from contract."));
      return;
    }
    const [getNFTError, userNFTs] = await promiseWrapper(
      Promise.all(
        // TODO: remove slice(0, 1)
        links.map(
          (link) =>
            new Promise((resolve, reject) => {
              fetch(link.tokenURI)
                .then((res) => res.json())
                .then((nft) => {
                  nft.tokenID = link.id;
                  nft.isSelling = link.isSelling;
                  nft.isApproved = link.isApproved;
                  nft.isDeposit = link.isDeposit;
                  resolve(nft);
                })
                .catch(reject);
            })
        )
      )
    );

    if (getNFTError) {
      console.error("Failed to get NFT from link", getNFTError);
      dispatch(fetchDataFailed("Failed to get NFT from link"));
      return;
    }

    const userNFTsResult = userNFTs.map((NFT, index) => {
      if (NFT.name.indexOf("Box") == -1) {
        NFT.atk = NFT.attributes[1].value;
        NFT.class = NFT.attributes[6].value;
        NFT.colors = NFT.attributes[8].value;
        NFT.hp = NFT.attributes[0].value;
        NFT.level = NFT.attributes[5].value;
        NFT.pdef = NFT.attributes[2].value;
        NFT.race = NFT.attributes[7].value;
        NFT.rarity = NFT.attributes[3].value;
        NFT.stars = NFT.attributes[4].value;
      }
      NFT.id = NFT.tokenID;

      return NFT;
    });

    dispatch(
      fetchDataSuccess({
        userNFTs: userNFTsResult,
        Allowance: Allowance,
        ERC721: ERC721,
      })
    );
  };
};
