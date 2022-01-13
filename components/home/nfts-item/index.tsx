import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';

import SwiperCore, { Autoplay, Grid, Pagination } from 'swiper';
SwiperCore.use([Autoplay, Grid, Pagination]);

import { nftData } from './data';

export function NftsItem() {
  return (
    <div className="nfts-item-container">
      <div className="relative races-characters-title">
        <h1 className="font-bold title-text text-center m-0">NFTS ITEMS</h1>
        <p className="mt-2 text-center">
          Earn your NFTs item by playing the game and sell it on the marketplace
          to make money
        </p>
      </div>

      <Swiper
        slidesPerView={7}
        slidesPerGroup={7}
        grid={{
          fill: 'row',
          rows: 2,
        }}
        spaceBetween={26}
        pagination={{
          el: '.custom-swiper-pagination',
          clickable: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        className="nfts-item-grid mt-20"
      >
        {nftData.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="relative">
              <img src={item.image} alt={item.alt} className="w-full" />
              <div className="nfts-item-grid-content">
                <h3 className="m-0 text-center font-bold">{item.race}</h3>
                <h2 className="m-0 text-center font-bold">{item.name}</h2>
                <p className="text-center font-bold">{item.uuid}</p>
              </div>
              <button className="text-center font-bold price-btn">
                {item.price}
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="custom-swiper-pagination mt-28 text-center relative"></div>
    </div>
  );
}
