import { Paging } from "@components/layout/paging";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "src/redux/actions/dataActions";
import { RootState } from "src/redux/store";
import { Filter } from "../filter";
import { Listing } from "../listing";

export function Content() {
  const data = useSelector((state: RootState) => state.data);
  const blockchain = useSelector((state: RootState) => state.blockchain);
  const dispatch = useDispatch();
  useEffect(() => {
    if (blockchain.account) {
      dispatch(fetchData());
    }
    const fetchDataInterval = setInterval(() => {
      if (blockchain.account) {
        dispatch(fetchData());
      }
    }, 30000);
    return () => {
      clearInterval(fetchDataInterval);
    };
  }, [dispatch]);
  const { account } = blockchain;
  return (
    <div className="content">
      {account ? (
        <>
          <p className="goodluck">
            Try your luck to own generals, weapons or armor !
          </p>
          <Filter />
          <Listing />
          <Paging />
        </>
      ) : (
        <p className="please-connect">Please connect to metamask!</p>
      )}
    </div>
  );
}
