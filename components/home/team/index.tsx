import Image from "next/image";
import { members } from "./data";
import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore, { Autoplay, Grid, Pagination } from "swiper";
import Title from "../components/Title";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { Background } from "../background";
SwiperCore.use([Autoplay, Grid, Pagination]);

export function Team() {
  return (
    <div className="relative py-40">
      <div className="atlintis-team max-w-6xl mx-auto relative z-10">
        <Title text="The Olympus Team" className="mb-8" />
        <p className="text-white mb-16 text-center">
          The team always plays an important role in the success of a project.
        </p>

        <Swiper
          slidesPerView={6}
          slidesPerGroup={6}
          grid={{
            rows: 2,
            fill: "row",
          }}
          spaceBetween={40}
          pagination={{
            el: ".team-swiper-pagination",
            bulletClass: "pagination-bullet",
            bulletActiveClass: "pagination-bullet-active",
            type: "bullets",
            clickable: true,
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
        >
          {members.map((item, index) => (
            <SwiperSlide key={item.id + "" + index}>
              <div className="relative">
                <div className="member-image-frame">
                  <Image
                    src={item.image}
                    width={160}
                    height={160}
                    sizes="160px"
                    alt={item.name}
                  />
                </div>
                <p className="member-name mt-4 mb-1">{item.name}</p>
                <p className="member-role mb-16">{item.role}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="team-swiper-pagination text-center relative"></div>
      </div>
      <Background
        className="-bottom-32"
        maskSrc="/assets/images/home/team-mask-bg.png"
        backgroundSrc="/assets/images/home/team-bg-new.png"
      />
      <img
        src="/assets/images/home/class-logo/hidden-logo-gray.png"
        alt="hidden logo"
        className="absolute top-[-8%] left-[-16%] h-[500px]"
      />
      <div className="absolute bottom-0 right-0 overflow-hidden h-[791px] w-[700px] mb-[-400px]">
        <img
          src="/assets/images/home/class-logo/trench-logo-gray.png"
          alt="trench logo"
          className="absolute right-[-35%]"
        />
      </div>
    </div>
  );
}
