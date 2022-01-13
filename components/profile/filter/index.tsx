import { useSelector } from 'react-redux';

export function Filter() {
  const data = useSelector((state: any) => state.data);
  const { userNFTs } = data;
  return (
    <div className="filter">
      <p className="total">Total({userNFTs?.length ? userNFTs?.length : 0})</p>
      <div className="filter-list">
        <div className="filter-item click-enable">
          <p>Tier</p>
          <img
            src="/assets/images/marketPlace/arrow-down.png"
            alt="arrow-down"
          />
        </div>
        <div className="filter-item click-enable">
          <p>Race</p>
          <img
            src="/assets/images/marketPlace/arrow-down.png"
            alt="arrow-down"
          />
        </div>
        <div className="filter-item click-enable">
          <p>Class</p>
          <img
            src="/assets/images/marketPlace/arrow-down.png"
            alt="arrow-down"
          />
        </div>
        <div className="filter-item click-enable">
          <p>Price</p>
          <img
            src="/assets/images/marketPlace/arrow-down.png"
            alt="arrow-down"
          />
        </div>
      </div>
    </div>
  );
}
