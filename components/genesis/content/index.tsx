import { Header } from "../header";
import { Filter } from "../filter";
import { Listing } from "../listing";
import { Paging } from "../paging";
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
