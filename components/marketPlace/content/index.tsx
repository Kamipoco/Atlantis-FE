import { Header } from "@components/marketPlace/header";
import { Filter } from "@components/marketPlace/filter";
import { Listing } from "@components/marketPlace/listing";
import { Paging } from "@components/marketPlace/paging";
import { useSelector } from "react-redux";
import { RootState } from "src/redux/store";

export function Content() {
  const blockchain = useSelector((state: RootState) => state.blockchain);
  const { account } = blockchain;
  return (
    <div className="content">
      <Header />
      <Filter />
      <Listing />
      <Paging />
    </div>
  );
}
