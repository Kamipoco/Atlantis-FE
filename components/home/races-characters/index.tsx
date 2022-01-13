import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

import { charactersData, raceData } from './data';

SwiperCore.use([Pagination, Autoplay]);

export function RacesCharacter() {
  return (
    <div className="races-characters-container px-32 lg:px-0">
      <div className="relative mt-28 pb-12 px-20 characters-container mx-auto">
        <div className="relative races-characters-title">
          <h1 className="font-bold title-text text-center m-0">CHARACTERS</h1>
          <span>CHARACTERS</span>
          <p className="mt-2 text-center">
            Each race has many characters with different positions and has
            unique strength and appearance.
          </p>
        </div>
        <div className="h-96 w-96"></div>
        {/* <div className="mt-12">
          <Swiper
            slidesPerView={5}
            spaceBetween={23}
            pagination={{
              el: '.characters-swiper-pagination',
              clickable: true,
            }}
            centeredSlides
            initialSlide={2}
            draggable
            className="characters-swiper mt-20"
          >
            {charactersData.map((character) => (
              <SwiperSlide key={character.id}>
                <div
                  key={character.id}
                  className="relative h-full flex items-end"
                >
                  <img
                    src={character.image}
                    className="relative z-10 mx-auto hero-image object-contain"
                    alt={character.alt}
                  />
                  <div className="scaling-cooldown absolute text-right opacity-0 invisible transition-all duration-200">
                    <p>
                      Scaling:{' '}
                      <span className="font-semibold">{character.scaling}</span>
                    </p>
                    <p>
                      Cooldown:{' '}
                      <span className="font-semibold">
                        {character.cooldown}
                      </span>
                    </p>
                    <div className="line-dot scaling-cooldown-line">
                      <img
                        src="/assets/images/home/races-characters/scaling-cooldown-line.png"
                        alt="scaling-cooldown-line"
                      />
                      <div className="dot"></div>
                    </div>
                  </div>
                  <div className="health-move absolute text-right opacity-0 invisible transition-all duration-200">
                    <p>
                      Health Points:{' '}
                      <span className="font-semibold">{character.health}</span>
                    </p>
                    <p>
                      Movement Speed:{' '}
                      <span className="font-semibold">
                        {character.moveSpeed}
                      </span>
                    </p>
                    <div className="line-dot health-move-line">
                      <img
                        src="/assets/images/home/races-characters/health-move-line.png"
                        alt="health-move-line"
                      />
                      <div className="dot"></div>
                    </div>
                  </div>
                  <div className="damage-attack absolute text-left opacity-0 invisible transition-all duration-200">
                    <p>
                      Damge:{' '}
                      <span className="font-semibold">{character.damage}</span>
                    </p>
                    <p>
                      Attack Speed:{' '}
                      <span className="font-semibold">
                        {character.attackSpeed}
                      </span>
                    </p>
                    <div className="line-dot damage-attack-line">
                      <img
                        src="/assets/images/home/races-characters/damage-attack-line.png"
                        alt="damage-attack-line"
                      />
                      <div className="dot"></div>
                    </div>
                  </div>
                  <div className="character-info absolute w-full -bottom-24 opacity-0 invisible transition-all duration-200">
                    <h3 className="text-center">{character.race}</h3>
                    <h2 className="text-center font-semibold">
                      {character.name}
                    </h2>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="characters-swiper-pagination mt-14 text-center"></div>
        </div> */}
      </div>
      <div className="relative races-container mx-auto">
        <div className="relative races-characters-title">
          <h1 className="font-bold title-text text-center m-0">RACES</h1>
          <span>RACES</span>
          <p className="mt-2 text-center">
            7 races in Atlantis: Brine, Trench, Atlantis, Xebel, Fisherman,
            Deserters, Hidden Kingdom.
          </p>
        </div>

        <div className="mt-12 lg:-mr-16">
          <Swiper
            slidesPerView={3}
            slidesPerGroup={3}
            spaceBetween={40}
            pagination={{
              el: '.races-swiper-pagination',
              clickable: true,
            }}
            draggable
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            className="races-swiper mt-20 "
          >
            {raceData.map((race) => (
              <SwiperSlide key={race.id}>
                <div key={race.id} className="relative race-item mx-auto">
                  <img
                    src={race.image}
                    className="relative z-10 mx-auto hero-image"
                    alt={race.alt}
                  />
                  <div className=" relative race-bg-behind flex">
                    <div className="relative w-full h-full flex items-center justify-center">
                      <div className="race-name">
                        <span className="uppercase">#{race.id}</span>
                        <h1 className="uppercase m-0">{race.title}</h1>
                      </div>
                      <div
                        className="race-bg-behind-left"
                        style={{ backgroundColor: race.color }}
                      />
                      <div
                        className="race-bg-behind-right"
                        style={{ backgroundColor: race.color }}
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="races-swiper-pagination mt-28 text-center"></div>
        </div>
      </div>
    </div>
  );
}
