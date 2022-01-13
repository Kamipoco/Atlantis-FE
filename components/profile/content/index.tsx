import { Paging } from "@components/layout/paging";
import { useSelector } from "react-redux";
import { RootState } from "src/redux/store";
import { Filter } from "../filter";
import { Listing } from "../listing";

export function Content() {
  const blockchain = useSelector((state: RootState) => state.blockchain);
  const { account } = blockchain;
  return (
    <div className="content">
      {account ? (
        <>
          <p className="goodluck">My Assets/Inventory</p>
          <Filter />
          <Listing />
        </>
      ) : (
        <p className="please-connect">Please connect to metamask!</p>
      )}
      {/* <Paging /> */}
    </div>
  );
}
