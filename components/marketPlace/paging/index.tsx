import { Paging as BasePaging } from '@components/layout/paging';
import { useMarkerplaceContext } from '../context';

export function Paging() {
  const { setPage, page, metadata } = useMarkerplaceContext();

  let totalPage = 0;
  if (metadata) {
    totalPage = Math.ceil(metadata.total / metadata.limit);
  }

  return (
    <BasePaging page={page} onPageChange={setPage} totalPage={totalPage} />
  );
}
