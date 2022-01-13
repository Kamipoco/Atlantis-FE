export function About() {
  return (
    <div className="about-container flex flex-col">
      <div className="about-title mb-36 relative">
        <h2 className="font-bold section-title text-secondary uppercase">ABOUT</h2>
        <h2 className="font-bold section-title text-white uppercase">
          THE ATLANTIS
        </h2>
        <img
          src="/assets/images/home/line1.png"
          alt="line1"
          className="absolute top-14 left-1/3"
        />
      </div>

      <div className="about-races flex mb-80">
        <div className="subtract w-6/12 relative">
          <img
            src="/assets/images/home/char1.png"
            alt="char1"
            className="absolute -top-20 -left-16"
          />
          <img
            src="/assets/images/home/char2.png"
            alt="char2"
            className="absolute char2 left-1/2 -top-20"
          />
          <img
            src="/assets/images/home/char3.png"
            alt="char3"
            className="absolute -right-14 -top-20"
          />
        </div>

        <div className="w-6/12 pl-16 flex flex-col">
          <p className="theAtlantis">the Atlantis</p>
          <p className="mb-12 font-semibold uppercase sub-title text-white">
            How are the 7 races in Atlantis?
          </p>
          <div className="line mb-4 relative">
            <div className="line-83 absolute"></div>
            <div className="line-84 absolute"></div>
          </div>
          <p className="mb-2 text text-white">
            7 races in Atlantis: Brine, Trench, Atlantis, Xebel, Fisherman,
            Deserters, Hidden Kingdom.
          </p>
          <p className="mb-12 text text-white">
            Each race has its own division of position and gender, and its
            identification features also have its own outstanding
            characteristics.
          </p>
          <div className="view-more-button relative">
            <p className="absolute top-3 left-10">VIEW MORE</p>
          </div>
        </div>
      </div>

      <div className="about-characters flex relative mb-44">
        <img
          src="/assets/images/home/line2.png"
          alt="line2"
          className="absolute -top-96 left-0"
        />
        <div className="section-1 w-6/12 pr-24 flex flex-col ">
          <p className=" mb-2 font-semibold sub-title uppercase text-white">
            The characters in ATLANTIS are very diverse and well-art
          </p>
          <p className="font-semibold text-base uppercase theAtlantis mb-8">
            the Atlantis
          </p>
          <div className="line mb-4 relative">
            <div className="line-83 absolute"></div>
            <div className="line-84 absolute"></div>
          </div>
          <p className=" mb-12 text text-white">
            Each race has many characters with different positions and has
            unique strength and appearance. The character&apos;s strength is
            increased according to its own stats through training or
            fighting,...
          </p>
          <div className="view-more-button relative">
            <p className="absolute top-3 left-10">VIEW MORE</p>
          </div>
        </div>
        <img
          src="/assets/images/home/subtract-border.png"
          alt="subtract-border"
          className="absolute subtract-border"
        />
        
        <div className="subtract2 w-6/12 relative">
        
          <img
            src="/assets/images/home/char4.png"
            alt="char4"
            className="absolute -top-40 -left-28"
          />
          <img
            src="/assets/images/home/char5.png"
            alt="char5"
            className="absolute -right-44 -top-72"
          />
          
        </div>
      </div>

      <div className="about-maps flex mb-12 relative">
        <div className="subtract3 w-6/12 relative"></div>

        <div className="map-content w-6/12  flex flex-col">
          <p className="theAtlantis">the Atlantis</p>
          <p className=" mb-8 font-semibold sub-title uppercase text-white">
            There are many quality and unique maps
          </p>
          <div className="line mb-4 relative">
            <div className="line-83 absolute"></div>
            <div className="line-84 absolute"></div>
          </div>
          <p className=" mb-4 text text-white">
            With 10 default maps in Atlantis, in addition to event-based maps or
            other specific maps.
          </p>
          <p className=" mb-2 text text-white">
            With 10 default maps in Atlantis, in addition to event-based maps or
            other specific maps.
          </p>
        </div>
        <img
          src="/assets/images/home/line4.png"
          alt="line4"
          className="absolute line4"
        />
      </div>
      <div className="list-map flex flex-row justify-end mb-40 relative">
        <img
          src="/assets/images/home/line3.png"
          alt="line3"
          className="absolute -top-44 right-32"
        />

        <p className="font-semibold text-xl uppercase text-white absolute -top-10 right-0">
          view more
        </p>
        <img src="/assets/images/home/map1.png" alt="map1" className=" ml-8" />
        <img src="/assets/images/home/map2.png" alt="map2" className=" ml-8" />
        <img src="/assets/images/home/map3.png" alt="map3" className=" ml-8" />
      </div>

      <div className="about-characters flex relative mb-64">
        <div className="section-1 w-6/12 pr-24 flex flex-col ">
          <p className=" mb-2 font-semibold sub-title uppercase text-white">
            How is the gameplay of Atlantis attractive, attracting players?
          </p>
          <p className="font-semibold text-base uppercase theAtlantis mb-8">
            the Atlantis
          </p>
          <div className="line mb-4 relative">
            <div className="line-83 absolute"></div>
            <div className="line-84 absolute"></div>
          </div>
          <p className=" mb-2 text text-white">
            There are many game modes like: PvE, PvP, Clan, King of Atlantis,
            Event, Destroy...
          </p>
          <p className=" mb-12 text text-white">
            Also, Atlantis is a Play to earn game, support players to hoard
            collect items, characters, gems, .. to be able to buy and sell
            through a reputable marketplace.
          </p>
          <div className="view-more-button relative">
            <p className="absolute top-3 left-10">VIEW MORE</p>
          </div>
        </div>
        <img
          src="/assets/images/home/subtract-border.png"
          alt="subtract-border"
          className="absolute -top-4 subtract-border"
        />
        <div className="subtract4 w-6/12 relative">
          <img
            src="/assets/images/home/char6.png"
            alt="char4"
            className="absolute -top-4 left-12"
          />
        </div>
      </div>
    </div>
  );
}
