import { useSelector } from "react-redux";
import { Box } from "../box";

export function Listing(props) {
  const data = useSelector((state: any) => state.data);
  const { userNFTs } = data;

  return (
    <div className="listing">
      <div className="grid">
        <div className="grid__row">
          {userNFTs?.map((NFT, index) => {
            return (
              <div className="grid-4" key={index}>
                <Box NFT={NFT} />
              </div>
            );
          })}
        </div>

        {/* <div className="grid__row">
          <div className="grid-4">
            <Box />
          </div>

          <div className="grid-4">
            <Box />
          </div>

          <div className="grid-4">
            <Box />
          </div>
        </div> */}
      </div>
    </div>
  );
}
