import { NFTCard } from '../nftCard';
import { useMarkerplaceContext } from '../context';
import { IGenesisHero } from 'src/types';
import Spinner from '@components/common/Spinner';

export function Listing() {
  const { isLoading, error, list } = useMarkerplaceContext();
  return (
    <div className="w-full mt-12">
      {isLoading && <Spinner />}
      {!isLoading && error && <div>Something went wrong</div>}
      {!isLoading && list && (
        <div className="marketplace-grid grid gap-12">
          {(list as IGenesisHero[]).map((item) => (
            <NFTCard key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}
