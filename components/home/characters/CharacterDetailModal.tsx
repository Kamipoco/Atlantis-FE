import { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay,
  Grid,
  Pagination,
  Navigation,
  EffectFade,
} from "swiper";
import Image from "next/image";
import cs from "classnames";
import { motion } from "framer-motion";

import Modal, { IModalProps } from "./Modal";
import BackButton from "./back-button.svg";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import { DATA_DETAIL } from "./data";

SwiperCore.use([Autoplay, Grid, Pagination, Navigation, EffectFade]);

interface IProps extends Omit<IModalProps, "children"> {
  initialIndex: number | undefined;
}

const CharacterDetailModal = (props: IProps) => {
  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (typeof props.initialIndex !== "undefined") {
      setCurrentIndex(props.initialIndex);
    }
  }, [props.initialIndex]);

  return (
    <Modal {...props}>
      <div className="px-12 -mt-44">
        <Swiper
          pagination={{
            el: ".custom-character-detail-swiper-pagination",
            clickable: true,
            type: "fraction",
          }}
          navigation={{
            nextEl: nextButtonRef.current,
            prevEl: prevButtonRef.current,
          }}
          draggable={false}
          allowTouchMove={false}
          onActiveIndexChange={(index) => {
            setCurrentIndex(index.activeIndex);
          }}
          initialSlide={props?.initialIndex || 0}
        >
          {DATA_DETAIL.map((item, index) => (
            <SwiperSlide key={item.name} className="mt-44">
              <div
                className={cs("flex justify-between", {
                  "opacity-0": index !== currentIndex,
                })}
              >
                <div className="w-[300px]">
                  <motion.div
                    key={currentIndex}
                    transition={{ duration: 1 }}
                    initial={{ x: -300 }}
                    animate={{ x: 0 }}
                  >
                    <h3 className="text-left text-6xl text-white font-bold uppercase mb-5">
                      {item.name}
                    </h3>
                    <div className="flex items-center">
                      <p className="text-selective-yellow text-[15px] mr-4">
                        Class:
                      </p>
                      <Image
                        src={item.classIcon}
                        alt={item.name}
                        width={50}
                        height={50}
                      />
                    </div>
                    <div className="flex items-center mt-4 mb-7">
                      <p className="text-selective-yellow text-[15px] mr-4">
                        Weapons:
                      </p>
                      <p className="text-white text-[15px] mr-4">
                        {item.weapon}
                      </p>
                    </div>
                    <div className="flex items-center">
                      <p className="text-selective-yellow text-[15px] mr-4">
                        Strength state:
                      </p>
                    </div>
                    <div className="flex items-center mt-5">
                      <p className="text-white text-[15px] mr-4">HP:</p>
                      {Array(5)
                        .fill(0)
                        .map((_, index) => (
                          <div
                            className={cs(
                              "w-[24px] h-[30px] mr-1 rounded-tl-sm rounded-tr rounded-br-sm rounded-bl transform skew-x-[-20deg]",
                              index < item.hp ? "bg-yellow" : "bg-white-85"
                            )}
                            key={index}
                          ></div>
                        ))}
                    </div>

                    <div className="flex items-center mt-5">
                      <p className="text-white text-[15px] mr-4">Attack:</p>
                      {Array(5)
                        .fill(0)
                        .map((_, index) => (
                          <div
                            className={cs(
                              "w-[24px] h-[30px] mr-1 rounded-tl-sm rounded-tr rounded-br-sm rounded-bl transform skew-x-[-20deg]",
                              index < item.atk ? "bg-yellow" : "bg-white-85"
                            )}
                            key={index}
                          ></div>
                        ))}
                    </div>

                    <div className="flex items-center mt-5">
                      <p className="text-white text-[15px] mr-4">Defense:</p>
                      {Array(5)
                        .fill(0)
                        .map((_, index) => (
                          <div
                            className={cs(
                              "w-[24px] h-[30px] mr-1 rounded-tl-sm rounded-tr rounded-br-sm rounded-bl transform skew-x-[-20deg]",
                              index < item.def ? "bg-yellow" : "bg-white-85"
                            )}
                            key={index}
                          ></div>
                        ))}
                    </div>
                  </motion.div>
                </div>
                <div className="relative max-w-[500px] -mt-44">
                  <video autoPlay loop>
                    <source src={item.source} type="video/webm" />
                  </video>
                </div>
                <div className="w-[276px]">
                  <motion.div
                    key={currentIndex}
                    transition={{ duration: 1 }}
                    initial={{ x: 400 }}
                    animate={{ x: 0 }}
                  >
                    <h3 className="text-right text-3xl text-white font-bold mb-7">
                      Story
                    </h3>
                    <p className="text-[15px] leading-normal text-white text-right">
                      {item.story}
                    </p>
                  </motion.div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="relative ">
          <div className="flex justify-center relative z-10">
            <div
              ref={prevButtonRef}
              className="custom-character-detail-swiper-button w-[60px] h-[60px] mr-3 cursor-pointer"
            >
              <BackButton />
            </div>
            <div
              ref={nextButtonRef}
              className="custom-character-detail-swiper-button w-[60px] h-[60px] transform rotate-180 cursor-pointer"
            >
              <BackButton />
            </div>
          </div>
          <div className="custom-character-detail-swiper-pagination absolute top-1/2 transform -translate-y-1/2 text-white z-0 right-0 text-4xl font-bold"></div>
        </div>
      </div>
    </Modal>
  );
};

export default CharacterDetailModal;
