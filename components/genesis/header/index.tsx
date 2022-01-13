import cs from 'classnames';
import { useMarkerplaceContext } from '../context';
import { EnumNFTType } from 'src/types';

export function Header() {
  const { nftType, setNFTType } = useMarkerplaceContext();
  return (
    <div className="content-header">
      <div className="classify">
        {/* <div className="classify-item click-enable">All</div> */}
        {/* <div
          className={cs('classify-item click-enable', {
            selected: nftType === EnumNFTType.Hero,
          })}
          onClick={() => setNFTType(EnumNFTType.Hero)}
        >
          Hero
        </div>
        <div
          className={cs('classify-item click-enable', {
            selected: nftType === EnumNFTType.Weapon,
          })}
          onClick={() => setNFTType(EnumNFTType.Weapon)}
        >
          Weapon
        </div>
        <div
          className={cs('classify-item click-enable', {
            selected: nftType === EnumNFTType.Armor,
          })}
          onClick={() => setNFTType(EnumNFTType.Armor)}
        >
          Armor
        </div> */}
      </div>
      <div className="search">
        <input type="text" placeholder="Enter name" className="search-input" />
        <img
          src="/assets/images/marketPlace/search-icon.png"
          alt="search-icon"
          className="search-icon click-enable"
        />
      </div>
    </div>
  );
}
