interface IProps {
  page?: number;
  onPageChange?: (newPage: number) => void;
  totalPage?: number;
}

export function Paging({ page = 1, onPageChange, totalPage = 0 }: IProps) {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!onPageChange) {
      return;
    }
    const newPage = parseInt(event.target.value);
    if (newPage < 1) {
      onPageChange(1);
    } else if (newPage > totalPage) {
      onPageChange(totalPage);
    } else {
      onPageChange(newPage);
    }
  };

  const handleClickPrev = () => {
    if (onPageChange) {
      onPageChange(Math.max(1, page - 1));
    }
  };
  const handleClickNext = () => {
    if (onPageChange) {
      onPageChange(Math.min(totalPage, page + 1));
    }
  };
  return (
    <div className="paging">
      <div className="pre-button click-enable" onClick={handleClickPrev}>
        <img src="/assets/images/marketPlace/arrow-left.png" alt="arrow-left" />
      </div>

      <input
        type="number"
        className="current-page"
        value={page}
        onChange={handleInputChange}
      />

      <p className="page-amount">of {totalPage}</p>
      <div className="next-button click-enable" onClick={handleClickNext}>
        <img
          src="/assets/images/marketPlace/arrow-right.png"
          alt="arrow-right"
        />
      </div>
    </div>
  );
}
